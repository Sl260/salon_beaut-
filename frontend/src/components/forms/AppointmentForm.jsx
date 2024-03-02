// FormComponent.js
import { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../provider/authProvider";

const FormContainer = styled.div`
  width: 20%;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  margin: 4rem auto;
  margin-bottom: 18rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormField = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
`;

const Label = styled.label`
  padding-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const RoundedButton = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px;
  border: none;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    date: null,
    time: "08:00",
  });

  const { token } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      date,
    });
  };

  const handleTimeChange = (time) => {
    setFormData({
      ...formData,
      time,
    });
  };

  const navigate = useNavigate();

  const BACKEND_URL = "http://localhost:5000/create-appointment";

  const options = {
    headers: { authorization: `Bearer ${token}` },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const response = await axios.post(BACKEND_URL, formData, options);
    if (response.status !== 201 && response.status !== 200) {
      toast.error("Registration failed" + response.message);
    } else {
      toast.success("Enregistrement réussi");
      navigate("/", { replace: true });
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            type="text"
            id="firstName"
            required
            minLength={3}
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </FormField>

        <FormField>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            type="text"
            id="lastName"
            required
            minLength={3}
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </FormField>

        <FormField>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </FormField>

        <FormField>
          <Label>Date</Label>
          <div>
            <StyledDatePicker
              minDate={new Date()}
              selected={formData.date}
              onChange={handleDateChange}
            />
          </div>
        </FormField>

        <FormField>
          <Label>Time</Label>
          <div>
            <TimePicker
              onChange={handleTimeChange}
              value={formData.time}
              format="HH:mm"
              minTime="08:00"
              maxTime="18:00"
            />
          </div>
        </FormField>

        <RoundedButton type="submit">Submit</RoundedButton>
      </form>
    </FormContainer>
  );
};

export default AppointmentForm;
