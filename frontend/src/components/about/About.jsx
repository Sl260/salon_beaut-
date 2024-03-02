import styled from "styled-components";

const AboutUs = () => {
  return (
    <AboutContainer>
      <Title>About Us</Title>
      <Content>
        <p>
          [Insert your company description here.] We are a team of passionate
          individuals dedicated to providing exceptional [services you offer].
          Our mission is to [your company's mission statement].
        </p>
        <p>
          [Highlight your company's strengths and unique selling points. Mention
          your experience, values, or any achievements.] We believe in [your
          company's core values] and strive to deliver unforgettable experiences
          for our customers.
        </p>
      </Content>
      <Image
        src="https://picsum.photos/id/1005/800/600?grayscale"
        alt="About Us Image"
      />
    </AboutContainer>
  );
};

export default AboutUs;

// Styled components
const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  @media (max-width: 768px) {
    padding: 1rem 0;
    margin: 0 1rem;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
`;

const Content = styled.div`
  text-align: justify;
  width: 60%;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 40%;
  height: auto;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 1rem;
  }
`;
