// ##########################################
// #        Import External Components      #
// ##########################################
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled/macro';
import { Card, Button } from 'react-bootstrap'

// ##########################################
// #        Import Local Components         #
// ##########################################
import Cover from '../components/cover';
import Header from '../components/header';
import Footer from '../components/footer';
import Player from '../components/player';
import Image from '../images/pexels-photography-maghradze-ph-3764958.jpg';

// ##########################################
// #       Component Specific Styling       #
// ##########################################
const PageContainer = styled.div`

`;

const HeadingContainer = styled.div`

`;

const TitleContainer = styled.div`
  text-align: -webkit-center;
  margin-top: 100px;
`;

const Title = styled.h1`
  color: white;
  width: fit-content;
  background: #00000075;
  padding: 25px;
  max-width: 65%;
`;

const ContentContainer = styled.div`
  position: absolute;
  top: 0;
  margin-top: ${props => props.marginTop}px;
  background-color: #111a21;
  width: -webkit-fill-available;
`;

const WelcomeContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
`;

const PlayerContainer = styled.div`
	width: ${props => props.width}px;
	height: ${props => props.width}px;
`;

const WelcomeText = styled.h3`
	color: white;
  font-size: 5vw;
  align-self: center;
  margin-right: 20px;
`;

const AboutContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
`;

const AboutText = styled.h3`
	color: white;
  font-size: 4.5vw;
  margin-top: 100px;
  margin-left: 50px;
  margin-right: 50px;
  width: 60%;
  display: flex;
  flex-direction: column;
`;

const AboutCard = styled(Card)`
  text-align: center;
  padding: 10px;
  margin-right: 50px;
  margin-top: 60px;
  margin-bottom: 60px;
  background-color: #111a21;
`;

const AboutCardBody = styled(Card.Body)`
  background-color: #181a1b;
`;

const AboutCardTitle = styled(Card.Title)`
  color: white;
`;

const AboutCardSubtitle = styled(Card.Subtitle)`
  color: white;
`;

const StyledCardImage = styled(Card.Img)`
  border-radius: 10px;
  margin-top: 16px;
  margin-right: 5px;
  margin-bottom: 5px;
  margin-left: 5px;
  width: -webkit-fill-available;
`;

const LearnMoreButton = styled(Button)`
  margin-top: 25px;
  width: fit-content;
`;

const ProjectText = styled.h3`
	color: white;
  font-size: 5vw;
  margin-top: 100px;
  margin-bottom: 100px;
  margin-left: 50px;
  width: 100%;
`;

const ContactText = styled.h3`
	color: white;
  font-size: 5vw;
  margin-top: 100px;
  margin-bottom: 100px;
  margin-left: 50px;
  width: 100%;
`;

// ##########################################
// #            Home Component              #
// ##########################################
export default function Home() {

  const [contentMarginTop, setContentMarginTop] = useState(window.innerWidth * 2 / 3);
  const [playerWidth, setPlayerWidth] = useState(window.innerWidth / 2);
  
  const handleWindowResize = () => {
    setContentMarginTop(window.innerWidth * 2 / 3);
    setPlayerWidth(window.innerWidth / 2);
  }
  
  useEffect(() => {
    window.onload = handleWindowResize;
    window.onresize = handleWindowResize;
  }, []);
  
  return (
    <PageContainer>
    
      <HeadingContainer>
        <Cover
          cover={Image}
          coverAlt="Retro TV on river shore near forest"
          coverText="Jaiden Hodson"
          coverSubtext={["Full Stack", "Software Developer"]}
        />
        <Header/>      
      </HeadingContainer>
      
      <ContentContainer marginTop={contentMarginTop}>
        
        <WelcomeContainer>
          <PlayerContainer width={playerWidth} height={playerWidth}>
            <Player/>
          </PlayerContainer>
          <WelcomeText>Hey all, I'm Jaiden and I'm glad you made it!</WelcomeText>
        </WelcomeContainer>
       
        <AboutContainer bgColor='#145e97'>
          <AboutText>
            Want to learn more about me?
            <LearnMoreButton>
              Learn More >
            </LearnMoreButton>
          </AboutText>
          <AboutCard style={{ width: '18rem' }}>
            <AboutCardBody>
              <AboutCardTitle>Jaiden Hodson</AboutCardTitle>
              <AboutCardSubtitle>Full Stack Software Developer</AboutCardSubtitle>
              <StyledCardImage variant="top" src="jaiden-model-profile-picture.jpeg" />
            </AboutCardBody>
          </AboutCard>
        </AboutContainer>
        
        <AboutContainer bgColor='#145e97'>
          <ProjectText>Check out some of my projects!</ProjectText>
        </AboutContainer>
        
        <AboutContainer bgColor='#145e97'>
          <ProjectText>Or maybe my blog?</ProjectText>
        </AboutContainer>
        
        <AboutContainer bgColor='#145e97'>
          <ContactText>I'd love to hear from you!</ContactText>
        </AboutContainer>
        
      </ContentContainer>
      
    </PageContainer>
  );
}