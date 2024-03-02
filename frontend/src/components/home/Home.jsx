import styled from "styled-components";
import ServiceCard from "./ServiceCard";

const services = [
  {
    id: 1,
    title: "Hair Care",
    subtitle: "Expert cuts, coloring, and styling for all types of hair.",
    imageSrc: "https://picsum.photos/id/200/300?grayscale",
    imageAlt: "Hair Care Service",
  },
  {
    id: 2,
    title: "Skin Care",
    subtitle: "Facials, massages, and treatments for a healthy glow.",
    imageSrc: "https://picsum.photos/id/200/300?grayscale",
    imageAlt: "Skin Care",
  },
  {
    id: 3,
    title: "Makeup",
    subtitle: "Enhance your natural beauty with our expert makeup artists.",
    imageSrc: "https://picsum.photos/id/1035/300?grayscale",
    imageAlt: "Makeup Service",
  },
];

const BeautyShop = () => {
  return (
    <Container>
      <Header>
        <Logo
          src="https://picsum.photos/id/1025/800/600?grayscale"
          alt="Beauty Shop Logo"
        />
        <h1>Embrace Your Beauty</h1>
        <p>Indulge in a luxurious experience at our beauty haven.</p>

        <Button href="/appointment">Book an Appointment</Button>
      </Header>
      <Main>
        <h2>Our Services</h2>
        <Section>
          {services?.map((service, index) => (
            <ServiceCard
              key={index}
              imageAlt={service.imageAlt}
              imageSrc={service.imageSrc}
              subtitle={service.subtitle}
              title={service.title}
            />
          ))}
        </Section>
        <Section2 about>
          <h2>About Us</h2>
          <p>
            We are passionate about helping you look and feel your best. Our
            experienced team uses the latest techniques and high-quality
            products to provide exceptional service in a relaxing and welcoming
            environment.
          </p>
        </Section2>
      </Main>
    </Container>
  );
};

export default BeautyShop;

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 0;
  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Section = styled.section`
  margin-bottom: 2rem;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
    display: block;
  }
`;
const Section2 = styled.section`
  margin-bottom: 2rem;
  text-align: center;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 10px 2rem;
  background-color: #0a51f6;
  text-decoration: none;
  color: white;
  border-radius: 12px;
`;
