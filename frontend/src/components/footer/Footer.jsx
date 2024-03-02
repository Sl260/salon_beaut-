import styled from "styled-components";

const FooterWrapper = styled.footer`
  position: relative;
  width: 100%;
  background-color: #515151;
  text-align: center;
  bottom: 0;
  color: white;
  padding: 0.5rem 0;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>&copy; 2024 Beauty Shop</p>
    </FooterWrapper>
  );
};

export default Footer;
