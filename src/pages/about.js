// ##########################################
// #        Import External Components      #
// ##########################################
import { useState, useRef } from 'react';
import styled from '@emotion/styled/macro';
import { keyframes } from '@emotion/react'
import { Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJsSquare, faHtml5, faCss3Alt, faDocker, faPython, faNodeJs, faGithub, faGitAlt, faWindows, faLinux, faBootstrap, faMdb, faAws, faJira, faFigma } from '@fortawesome/free-brands-svg-icons';

// ##########################################
// #        Import Local Components         #
// ##########################################
import Header from '../components/header';
import TitleBadge from '../components/titleBadge';
import Footer from '../components/footer';
import Player from '../components/player';
import SkillsIcons from '../components/skillsIcons';
import SlideInSection from '../components/slideInSection';

// ##########################################
// #           Keyframe Animations          #
// ##########################################
const animateColorChange = keyframes`
	0% {
    background-position: 0% 0%;
  }
	100% {
    background-position: 0% 100%;
  }
`

// ##########################################
// #       Component Specific Styling       #
// ##########################################
const PageContainer = styled.div`

`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-areas: "Header Header Header" "Title Title Title" "Skills Model Bio" "Edu Edu Edu";
	grid-template-columns: 1fr min-content 1fr;
  margin: 30px;
`;

const HeaderContainer = styled.div`
  grid-area: Header;
  margin-top: 45px;
  margin-bottom: 75px;
`;

const TitleContainer = styled.div`
  grid-area: Title;
  margin-bottom: 45px;
  width: 40%;
  justify-self: center;
  background: #00000035;
  padding: 30px;
  border-radius: 40px;
`;

const Title = styled.h2`
  color: white;
  font-size: 3.5vw;
  text-align: center;
`;

const Subtitle = styled.h3`
  color: white;
  font-size: 3vw;
  text-align: center;
`;

const TextContainer = styled.div`
  text-align: center;
`;

const Text = styled.p`
  color: white;
  font-size: 2vw;
  margin: 0;
`;

const IconGroupContainer = styled.div`
  text-align: center;
`;

const Icon = styled.a`
  font-size: calc(1vw + 1.9rem);
  display: inline-block;
  color: white;
  margin: 3%;
  text-decoration: none;
	&:hover {
		transform: scale(1.25);
    animation: ${animateColorChange} 5s linear infinite;
		background-image: linear-gradient(0deg, hsla(0, 100%, 50%, 1) 0%, hsla(306, 100%, 50%, 1) 10%, hsla(170, 100%, 47%, 1) 20%, hsla(279, 100%, 50%, 1) 30%, hsla(248, 100%, 50%, 1) 40%, hsla(141, 100%, 50%, 1) 50%, hsla(248, 100%, 50%, 1) 60%, hsla(279, 100%, 50%, 1) 70%, hsla(170, 100%, 47%, 1) 80%, hsla(306, 100%, 50%, 1) 90%, hsla(0, 100%, 50%, 1) 100%);
		background-size: 100% 1100%;
		-webkit-text-fill-color: transparent;
		-webkit-background-clip: text;
	};
`;

const SkillsContainer = styled.div`
  grid-area: Skills;
  width: 32vw;
  justify-self: center;
  background: #00000035;
  padding: 30px;
  border-radius: 40px;
`;

const ModelContainer = styled.div`
  grid-area: Model;
  justify-self: center;
	width: 20vw;
  height: 45vw;
`;

const EducationContainer = styled.div`
  grid-area: Edu;
  width: 80%;
  justify-self: center;
  background: #00000035;
  padding: 30px;
  border-radius: 40px;
  margin-top: 45px;
`;

const EducationContentContainer = styled.div`
  display: flex;
  align-items: end;
`;

const SchoolContainer = styled.div`
  width: 100%;
  line-height: normal;
`;

const EducationImageContainer = styled.div`
  text-align: center;
  padding: 10px;
`;

const EducationImage = styled.img`
  width: 50%;
`;

const BiographyContainer = styled.div`
  grid-area: Bio;
  width: 32vw;
  justify-self: center;
  background: #00000035;
  padding: 30px;
  border-radius: 40px;
`;

const BiographyContentContainer = styled.div`
  margin-left: 9%;
  margin-right: 9%;
  margin-top: 15px;
  text-align: center;
`;

const FooterContainer = styled.div`
  margin-top: 55px;
`;

// ##########################################
// #            About Component             #
// ##########################################
export default function About() {
  
  function handleIconClick(e) {
    e.preventDefault();
		window.open(e.currentTarget.href, '_blank');
	}
  
  return (
    <PageContainer>
      <Header />
      
      <ContentContainer>
        
        <HeaderContainer>
          <TitleBadge
            title="Jaiden Hodson"
            subtext={["Full Stack", "Software Developer"]}
          />
        </HeaderContainer>
        
        <TitleContainer>
          <Title>About Me</Title>
        </TitleContainer>
        
        <SkillsContainer>
          <Subtitle>Skills</Subtitle>
          <SkillsIcons />
        </SkillsContainer>
        
        <ModelContainer>
          <Player/>
        </ModelContainer>
        
        <EducationContainer>
          <Subtitle>Education</Subtitle>
          
          <EducationContentContainer>
          
            <SchoolContainer>
              <EducationImageContainer>
                <EducationImage src="images/OSU-Beavers.png" />
              </EducationImageContainer>
              <TextContainer>
                <Text>Oregon State University</Text>
                <Text>Bachelor of Computer Science</Text>
                <Text>Focus: Web and Mobile</Text>
                <Text>GPA: 3.75</Text>
              </TextContainer>
            </SchoolContainer>
            
            <SchoolContainer>
              <EducationImageContainer>
                <EducationImage src="images/SAHS-RedHawks.png" />
              </EducationImageContainer>
              <TextContainer>
                <Text>South Albany High School</Text>
                <Text>Honors Diploma</Text>
                <Text>Focus: STEM</Text>
                <Text>GPA: 4.20</Text>
              </TextContainer>
            </SchoolContainer>
            
          </EducationContentContainer>
          
        </EducationContainer>
        
        <BiographyContainer>
          <Subtitle>Biography</Subtitle>
          <BiographyContentContainer>
            <Text>
            I'm a full stack software developer with most of my web development experience using the MERN stack (MongoDB, Express, React, NodeJs). I'm very adaptive to new technologies and my current skillset ranges from general web design all the way to forensic analysis.
            </Text>
          </BiographyContentContainer>
        </BiographyContainer>
        
      </ContentContainer>
      
      <FooterContainer>
        <Footer />
      </FooterContainer>
      
    </PageContainer>
  );
}