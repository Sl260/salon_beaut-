import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/login", { replace: true });
  };

  useEffect(() => {}, [token]);

  const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 100%;
    background-color: white;
    position: sticky;
    top: 0;
    right: 0;
    left: 0;
    padding: 2rem 0;
  `;

  const NavLink = styled(Link)`
    font-size: bold;
    text-decoration: none;
    color: inherit;
  `;

  const HomeLink = styled(Link)`
    font-size: bold;
    text-decoration: none;
    margin-left: 8rem;
    color: inherit;
  `;

  const NavLinks = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 4rem;
    max-width: 30%;
    color: black;
    margin-right: ${menuOpen ? "0" : "8rem"};
    flex-grow: 1;

    @media (max-width: 768px) {
      display: ${menuOpen ? "flex" : "none"};
      flex-direction: column;
      align-items: start;
      row-gap: 0.4rem;
      position: absolute;
      top: 5rem;
      left: 0;
      width: 100%;
      background-color: white;
      padding: 1rem;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  `;

  const Logo = styled.img`
    width: 8rem;
    margin-left: 8rem;
  `;

  const HamburgerMenu = styled.div`
    display: none;
    cursor: pointer;

    @media (max-width: 768px) {
      display: block;
      margin-left: 1rem;
      margin-right: 1rem;
    }
  `;

  return (
    <HeaderWrapper>
      <HamburgerMenu onClick={() => setMenuOpen(!menuOpen)}>☰</HamburgerMenu>
      <HomeLink to="/">Accueil</HomeLink>
      <Logo src="/" alt="Logo" />
      <NavLinks>
        <NavLink to="/service">Service</NavLink>
        <NavLink to="/about-us">About us</NavLink>
        {token && <NavLink to="/appointments">Appointments</NavLink>}
        {(!token && <NavLink to="/login">Login</NavLink>) || (
          <NavLink onClick={() => handleLogout()}>Logout</NavLink>
        )}
      </NavLinks>
    </HeaderWrapper>
  );
};

export default Header;
