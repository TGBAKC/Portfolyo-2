import styled from "styled-components";
import portfolioImage from "./assets/portfolyo.jpg";

const AboutMeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 50px 20px;
  color: white;
`;

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  width: 80%;
  margin-top: 20px;
`;

const AboutLeft = styled.div`
  flex: 1;
  text-align: center; /* Resmi ortalamak için */
`;

const AboutRight = styled.div`
  flex: 1.5;
  text-align: left;
`;

const StyledTitle = styled.h1`
  font-size: 32px;
  color: #df8908;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px;
  text-align: center;
`;

const AboutSkillSection = styled.div`
  margin-top: 20px;
`;

const AboutSkill = styled.div`
  margin: 10px 0;
  font-size: 18px;
  color: white;

  hr {
    height: 6px;
    border: none;
    background: linear-gradient(to right, #DF8908, #B415FF);
    border-radius: 5px;
  }
`;

const AboutMe = () => {
  return (
    <AboutMeSection>
      <StyledTitle>About Me</StyledTitle>

      <AboutContainer>
 
        <AboutLeft>
          <img src={portfolioImage} alt="Portfolio" width="300px" />
        </AboutLeft>

        <AboutRight>
          <p>
          Hello!
My name is Tuğba, and I am a passionate Frontend Developer in the making. I am continuously improving my skills in HTML, CSS, JavaScript, and React, with a keen interest in creating modern, user-friendly, and visually appealing web interfaces.

I enjoy writing clean, scalable, and maintainable code while keeping up with the latest technologies. My focus is on developing interactive and engaging user experiences using modern JavaScript frameworks like React.

My goal is to work in a dynamic and innovative development team where I can contribute to UI/UX-driven projects while expanding my technical expertise. I am always eager to learn new technologies, solve complex problems, and grow as a developer.

Let’s create amazing projects together! 🚀
          </p>

          <AboutSkillSection>
            <AboutSkill>
              <p>HTML & CSS</p>
              <hr style={{ width: "80%" }} />
            </AboutSkill>
            <AboutSkill>
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </AboutSkill>
            <AboutSkill>
              <p>JavaScript</p>
              <hr style={{ width: "90%" }} />
            </AboutSkill>
          </AboutSkillSection>
        </AboutRight>
      </AboutContainer>

    </AboutMeSection>
  );
};

export default AboutMe;
