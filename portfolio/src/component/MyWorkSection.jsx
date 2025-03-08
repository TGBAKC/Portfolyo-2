import React from "react";
import styled from "styled-components";
import projectExamImage from "../component/assets/ProjectExam2.png"; 
import secondProjectImage from "../component/assets/SemesterProject.png"; 
import lastProjectImage from "./assets/JavascriptFramework-CA.png"; //


const MyWorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #161513;
`;


const StyledTitle = styled.h2`
  font-size: 36px;
  color: #df8908;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 30px;
  text-align: center;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  width: 90%;
  max-width: 1200px;
`;


const ProjectCard = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
  }
`;


const ProjectImage = styled.img`
  width: 100%;
  height: 200px; /* ✅ Tüm görselleri eşit yükseklikte yap */
  object-fit: cover; /* ✅ Görseli çerçeveye sığdır */
  border-radius: 8px;
  margin-bottom: 15px;
`;


const ProjectTitle = styled.h3`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;


const ProjectDescription = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 15px;
`;


const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;


const Button = styled.a`
  background: #df8908;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s;

  &:hover {
    background: #b56d06;
  }
`;

const MyWorkSection = () => {
  return (
    <MyWorkContainer>
      <StyledTitle>My Latest Projects</StyledTitle>

      <ProjectGrid>
        <ProjectCard>
          <ProjectImage src={projectExamImage} alt="Project Exam 2" />
          <ProjectTitle>Project Exam 2</ProjectTitle>
          <ProjectDescription>
            A travel booking platform built using modern web technologies, featuring user authentication, 
            search functionality, and detailed listings.
          </ProjectDescription>
          <ButtonContainer>
            <Button href="https://github.com/TGBAKC/Project-Exam-2-main.git" target="_blank">
              GitHub Repo
            </Button>
            <Button href="https://holidaze-netlify-app.netlify.app/" target="_blank">
              Live on Netlify
            </Button>
          </ButtonContainer>
        </ProjectCard>

        <ProjectCard>
          <ProjectImage src={secondProjectImage} alt="Semester Project" />
          <ProjectTitle>EstateBid</ProjectTitle>
          <ProjectDescription>
            An online auction platform where users can list and bid on real estate properties. 
            Built using React and integrates with an external API.
          </ProjectDescription>
          <ButtonContainer>
            <Button href="https://github.com/TGBAKC/EstateBid.git" target="_blank">
              GitHub Repo
            </Button>
            <Button href="https://voluble-palmier-237d76.netlify.app/" target="_blank">
              Live on Netlify
            </Button>
          </ButtonContainer>
        </ProjectCard>

        <ProjectCard>
          <ProjectImage src={lastProjectImage} alt="JavaScript Framework CA" />
          <ProjectTitle>JavaScript Frameworks CA</ProjectTitle>
          <ProjectDescription>
            A fully responsive web app built with React and styled-components. Showcases dynamic 
            content fetching and state management.
          </ProjectDescription>
          <ButtonContainer>
            <Button href="https://github.com/TGBAKC/css-frameworks-ca.git" target="_blank">
              GitHub Repo
            </Button>
            <Button href="https://javascript-frameworks.netlify.app/" target="_blank">
              Live on Netlify
            </Button>
          </ButtonContainer>
        </ProjectCard>
      </ProjectGrid>
    </MyWorkContainer>
  );
};

export default MyWorkSection;
