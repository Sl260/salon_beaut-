/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import axios from "axios";
import styled from "styled-components";
import { useAuth } from "../../provider/authProvider";
import AppointmentCard from "./AppointmentCard";
import { useEffect, useState } from "react";

export const BACKEND_URL = "http://localhost:5000";

const AppointmentsContainer = styled.div`
  max-width: 800px;
  margin: 4rem auto;

  @media (max-width: 768px) {
    margin: 4rem 1rem;
  }
`;

const Appointments = () => {
  const [appointmentsList, setAppointmentList] = useState([]);
  const [update, setUpdate] = useState(false);
  const { token } = useAuth();

  const config = {
    authorization: `Bearer ${token}`,
  };
  // Delete appointment
  const handleDelete = async (id) => {
    const response = await axios.delete(
      `${BACKEND_URL}/delete-appointment/${id}`,
      config
    );

    response.status === 200 && setUpdate((prev) => !prev);
  };

  // Validate appointment
  const handleValidate = async (id) => {
    const response = await axios.put(
      `${BACKEND_URL}/update-appointment/${id}`,
      { validate: true },
      config
    );

    response.status === 200 && setUpdate((prev) => !prev);
  };

  // Fetching data function

  useEffect(() => {
    try {
      axios
        .get(`${BACKEND_URL}/appointments`, config)
        .then((res) => setAppointmentList(res.data));
    } catch (error) {
      console.log("error", error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update, JSON.stringify(appointmentsList)]);

  return (
    <AppointmentsContainer>
      {appointmentsList.length !== 0 &&
        appointmentsList.map((appointment) => (
          <AppointmentCard
            key={appointment?._id}
            date={appointment?.date}
            time={appointment?.time}
            validate={appointment?.validate}
            email={appointment?.email}
            firstName={appointment?.firstName}
            handleDelete={handleDelete}
            handleValidate={handleValidate}
            id={appointment?._id}
            lastName={appointment?.lastName}
          />
        ))}
    </AppointmentsContainer>
  );
};

export default Appointments;
