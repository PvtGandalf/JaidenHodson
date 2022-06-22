// ##########################################
// #        Import External Components      #
// ##########################################
import { useState, useRef } from 'react';
import styled from '@emotion/styled/macro';
import { Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJsSquare, faHtml5, faCss3Alt, faDocker, faPython, faNodeJs, faGithub, faGitAlt, faWindows, faLinux, faBootstrap, faMdb, faAws, faJira, faFigma } from '@fortawesome/free-brands-svg-icons';

// ##########################################
// #        Import Local Components         #
// ##########################################
import Header from '../components/header';
import Footer from '../components/footer';
import Player from '../components/player';
import SlideInSection from '../components/slideInSection';

// ##########################################
// #       Component Specific Styling       #
// ##########################################
const PageContainer = styled.div`

`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-areas: "Skills Model Edu" "Bio Bio Bio";
	grid-template-columns: 1fr min-content 1fr;
  margin: 30px;
`;

const TitleContainer = styled.div`

`;

const Title = styled.h1`
  margin-top: 100px;
  color: white;
  font-size: 5vw;
  text-align: center;
`;

const Subtitle = styled.h2`
  margin-top: 30px;
  color: white;
  font-size: 3vw;
  text-align: center;
`;

const TextContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
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
		color: white;
		transform: scale(1.25);
	};
`;

const SkillsContainer = styled.div`
  grid-area: Skills;
  width: 32vw;
  justify-self: center;
`;

const ModelContainer = styled.div`
  grid-area: Model;
  justify-self: center;
	width: 20vw;
  height: 45vw;
`;

const EducationContainer = styled.div`
  grid-area: Edu;
  width: 32vw;
  justify-self: center;
`;

const BiographyContainer = styled.div`
  grid-area: Bio;
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
      
      <TitleContainer>
        <Title>About Me</Title>
      </TitleContainer>
      
      <ContentContainer>
        
        <SkillsContainer>
          <Subtitle>Skills</Subtitle>
          <IconGroupContainer>
            <Icon title="Amazon Web Service" href="https://aws.amazon.com/" onClick={handleIconClick}>
              <FontAwesomeIcon icon={faAws} />
            </Icon>
            
            <Icon title="Bootstrap" href="https://getbootstrap.com/" onClick={handleIconClick}>
              <FontAwesomeIcon icon={faBootstrap} />
            </Icon>
            
            <Icon title="C Programming Language" href="https://www.codecademy.com/resources/docs/c" onClick={handleIconClick}>
              <i className="devicon-c-plain"></i>
            </Icon>
            
            <Icon title="CSS (Cascading Style Sheets)" href="https://developer.mozilla.org/en-US/docs/Web/CSS" onClick={handleIconClick}>
              <FontAwesomeIcon icon={faCss3Alt} />
            </Icon>
            
            <Icon title="Docker" href="https://docs.docker.com/" onClick={handleIconClick}>
              <FontAwesomeIcon icon={faDocker} />
            </Icon>
          </IconGroupContainer>
          
          <IconGroupContainer>
            <Icon><FontAwesomeIcon icon={faFigma} /></Icon>
            <Icon><FontAwesomeIcon icon={faGitAlt} /></Icon>
            <Icon><FontAwesomeIcon icon={faGithub} /></Icon>
            <Icon><i className="devicon-graphql-plain"></i></Icon>
            <Icon><i className="devicon-heroku-plain"></i></Icon>
            
          </IconGroupContainer>
          
          <IconGroupContainer>
            <Icon><FontAwesomeIcon icon={faHtml5} /></Icon>
            <Icon><i className="devicon-java-plain"></i></Icon>
            <Icon><FontAwesomeIcon icon={faJsSquare} /></Icon>
            <Icon><FontAwesomeIcon icon={faJira} /></Icon>
            <Icon><FontAwesomeIcon icon={faLinux} /></Icon>
          </IconGroupContainer>
          
          <IconGroupContainer>
            <Icon><FontAwesomeIcon icon={faMdb} /></Icon>
            <Icon><i className="devicon-mongodb-plain"></i></Icon>
            <Icon><i className="devicon-mysql-plain"></i></Icon>
            <Icon><FontAwesomeIcon icon={faNodeJs} /></Icon>
            <Icon><FontAwesomeIcon icon={faPython} /></Icon>
          </IconGroupContainer>
          
          <IconGroupContainer>
            <Icon><FontAwesomeIcon icon={faReact} /></Icon>
            <Icon><i className="devicon-redis-plain"></i></Icon>
            <Icon><i className="devicon-redux-plain"></i></Icon>
            <Icon><i className="devicon-threejs-original"></i></Icon>
            <Icon><FontAwesomeIcon icon={faWindows} /></Icon>
          </IconGroupContainer>

        </SkillsContainer>
        
        <ModelContainer>
          <Player/>
        </ModelContainer>
        
        <EducationContainer>
          <Subtitle>Education</Subtitle>
          <TextContainer>
            <Text>Oregon State University</Text>
            <Text>Bachelor of Computer Science</Text>
            <Text>Focus: Web and Mobile</Text>
            <Text>GPA: 3.75</Text>
          </TextContainer>
          <TextContainer>
            <Text>South Albany High School</Text>
            <Text>Honors Diploma</Text>
            <Text>Focus: STEM</Text>
            <Text>GPA: 4.20</Text>
          </TextContainer>
        </EducationContainer>
        
        <BiographyContainer>
          <Subtitle>Biography</Subtitle>
        </BiographyContainer>
        
      </ContentContainer>
      
      <Footer />
    </PageContainer>
  );
}