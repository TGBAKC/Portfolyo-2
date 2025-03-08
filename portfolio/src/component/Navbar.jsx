import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #161513;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;


const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
`;


const PortfolioText = styled.h1`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;


const Nav = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;


const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;




const Navbar = ({ aboutRef, projectsRef, contactRef }) => {

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" }); 
    }
  };

  return (
    <>
      <GlobalStyle />

      <NavbarWrapper>
       
        <PortfolioText>Portfolio</PortfolioText>

        <Nav>
          <NavItem onClick={() => scrollToSection(aboutRef)}>About Me</NavItem>
          <NavItem onClick={() => scrollToSection(projectsRef)}>My Latest Projects</NavItem>
          <NavItem onClick={() => scrollToSection(contactRef)}>Contact</NavItem>
        </Nav>
        
      </NavbarWrapper>
    </>
  );
};

export default Navbar;
