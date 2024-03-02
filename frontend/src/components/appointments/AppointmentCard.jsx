/* eslint-disable react/prop-types */
import styled from "styled-components";

const AppointmentCardWrapper = styled.div`
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AppointmentInfo = styled.div`
  flex: 1;
`;

const ActionsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const ActionButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.backgroundColor || "#007bff"};
  color: #fff;

  &:hover {
    background-color: ${(props) => props.hoverColor || "#0056b3"};
  }
`;

const AppointmentCard = ({
  id,
  firstName,
  lastName,
  email,
  date,
  time,
  handleDelete,
  handleValidate,
  validate,
}) => {
  function formatDate(inputDate) {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = new Date(inputDate).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  }

  return (
    <AppointmentCardWrapper>
      <AppointmentInfo>
        <h3>{`${firstName} ${lastName}`}</h3>
        <p>Email: {email}</p>
        <p>Date: {formatDate(date)}</p>
        <p>Time: {time}</p>
        <p>
          Status:{""}
          {(validate === true && (
            <span style={{ color: "green", marginLeft: "10px" }}>
              {"Confirmed"}
            </span>
          )) || (
            <span style={{ color: "orange", marginLeft: "10px" }}>
              {"Pending..."}
            </span>
          )}
        </p>
      </AppointmentInfo>
      <ActionsContainer>
        {validate === false && (
          <ActionButton
            onClick={() => handleValidate(id)}
            backgroundColor="#28a745"
            hoverColor="#218838"
          >
            <>Validate</>
          </ActionButton>
        )}

        <ActionButton
          onClick={() => handleDelete(id)}
          backgroundColor="#dc3545"
          hoverColor="#c82333"
        >
          <>delete</>
        </ActionButton>
      </ActionsContainer>
    </AppointmentCardWrapper>
  );
};

export default AppointmentCard;
