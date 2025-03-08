import React from "react";
import styled from "styled-components";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

 background-color: #161513;
  padding: 40px;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #df8908;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px;
  text-align: center;
`;

const ContactCard = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 400px;
  text-align: center;
  margin: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
  }
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0;
  font-size: 18px;
  color: #333;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: #df8908;
  }
`;

const Icon = styled.span`
  color: #df8908;
  font-size: 24px;
  margin-right: 10px;
`;

function Contact() {
  return (
    <ContactWrapper>
      <Title>Contact Me</Title>

      <ContactCard>
        <ContactItem href="mailto:tugbakca47@gmail.com">
          <Icon>
            <FaEnvelope />
          </Icon>
          tugbakca47@gmail.com
        </ContactItem>
      </ContactCard>

      <ContactCard>
        <ContactItem href="tel:+4797622428">
          <Icon>
            <FaPhone />
          </Icon>
          +47 976 22 428
        </ContactItem>
      </ContactCard>

      <ContactCard>
        <ContactItem
          href="https://www.google.com/maps/place/Stavanger,+Norway"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon>
            <FaMapMarkerAlt />
          </Icon>
          Norway, Stavanger
        </ContactItem>
      </ContactCard>
    </ContactWrapper>
  );
}

export default Contact;
