import Appointments from "../components/appointments/Appointments";
import Header from "../components/header/Header";

const fakeAppointments = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    date: "2024-03-01 10:00 AM",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    date: "2024-03-02 02:30 PM",
  },
  {
    id: 3,
    firstName: "Alice",
    lastName: "Johnson",
    email: "alice.johnson@example.com",
    date: "2024-03-03 09:00 AM",
  },
  {
    id: 4,
    firstName: "Bob",
    lastName: "Williams",
    email: "bob.williams@example.com",
    date: "2024-03-04 03:00 PM",
  },
  {
    id: 5,
    firstName: "Eva",
    lastName: "Brown",
    email: "eva.brown@example.com",
    date: "2024-03-05 11:30 AM",
  },
];
const AppointmentsPage = () => {
  return (
    <>
      <Header />
      <Appointments appointments={fakeAppointments} />
    </>
  );
};

export default AppointmentsPage;
