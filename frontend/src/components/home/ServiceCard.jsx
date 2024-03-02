/* eslint-disable react/prop-types */
import styled from "styled-components";

const ServiceCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  padding: 1rem;
  max-width: 350px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    margin: 0.5rem;
    padding: 0.5rem;
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    width: 150px;
  }
`;

const ServiceCard = ({ title, subtitle, imageSrc, imageAlt }) => {
  return (
    <ServiceCardWrapper>
      <ServiceImage src={imageSrc} alt={imageAlt} />
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </ServiceCardWrapper>
  );
};

export default ServiceCard;
