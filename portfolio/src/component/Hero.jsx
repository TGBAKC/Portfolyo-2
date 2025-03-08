import styled from "styled-components";
import portfolioImage from "./assets/portfolyo.jpg";
const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 50px 20px;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const HeroTitle = styled.h1`
  font-size: 28px;
  color: white;
  span {
    color: #DF8908;
  }
`;

const HeroDescription = styled.p`
  font-size: 18px;
  color: #ccc;
  max-width: 600px;
`;





const Hero = () => {
  return (
    <HeroSection id="home">
      <img src={portfolioImage} alt="Portfolio" width="300px" />
      <HeroTitle>
        <span>I'm Tugba AKCA,</span> frontend developer based in Norway.
      </HeroTitle>
      <HeroDescription>
      I am a frontend development student who studied at Noroff. Currently, I have started improving myself in Java, and I plan to continue developing my skills in this field.
      </HeroDescription>
    

    </HeroSection>
  );
};

export default Hero;
