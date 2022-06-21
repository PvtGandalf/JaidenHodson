// ##########################################
// #        Import External Components      #
// ##########################################
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled/macro';
import { Card, Button } from 'react-bootstrap'
import { FaCaretRight } from 'react-icons/fa';

// ##########################################
// #        Import Local Components         #
// ##########################################
import Cover from '../components/cover';
import Header from '../components/header';
import Footer from '../components/footer';
import Player from '../components/player';
import SlideInSection from '../components/slideInSection';
import Image from '../images/pexels-photography-maghradze-ph-3764958.jpg';

// ##########################################
// #       Component Specific Styling       #
// ##########################################
const PageContainer = styled.div`

`;

const HeadingContainer = styled.div`

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
  padding: 50px;
  align-items: center;
  justify-content: space-around;
  border: solid;
  border-width: 30px;
`;

const SliderText = styled.h3`
	color: white;
  font-size: 3vw;
  display: flex;
  flex-direction: column;
`;

const AboutInformationContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: 50px;
`;

const AboutCard = styled(Card)`
  text-align: center;
  margin-right: 50px;
  padding: 10px;
  background-color: #111a21;
  width: 17rem;
  filter: drop-shadow(10px 10px 25px #111a21);
  &:hover {
    transform: scale(1.05);
  }
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

const GithubStatsContainer = styled.div`
  color: white;
  text-align: -webkit-center;
  &:hover {
    transform: scale(1.05);
  }
`;

const GithubStatsText = styled.h4`
  margin-bottom: 20px;
`;

const GithubStatsImage = styled.img`
  filter: drop-shadow(10px 10px 25px #111a21);
`;

const PageLinkButton = styled(Button)`
  margin-top: 25px;
  width: fit-content;
`;

const ProjectImageContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  margin-right: 45px;
  margin-left: 60px;
  width: 38vw;
  height: 35vw;
`;

const ProjectImageBack = styled.img`
  width: 35vw;
  margin: 30px;
  transform: translate(-50px, -30px);
  position: absolute;
  border-radius: 5px;
  border: solid;
  border-color: #111a21;
  filter: drop-shadow(10px 10px 25px #111a21);
  &:hover {
    transform: translate(-50px, -30px) scale(1.05);
  }
`;

const ProjectImageFront = styled.img`
  width: 35vw;
  margin: 30px;
  transform: translate(60px, 70px);
  position: absolute;
  border-radius: 5px;
  border: solid;
  border-color: #111a21;
  filter: drop-shadow(10px 10px 25px #111a21);
  &:hover {
    transform: translate(60px, 70px) scale(1.05);
  }
`;

const BlogImageContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  margin-right: 45px;
  margin-left: 60px;
  width: 38vw;
  height: 35vw;
  display: flex;
`;

const BlogImage = styled.img`
  position: absolute;
  transform: translate(60px, -30px);
  width: 30vw;
  border-radius: 5px;
  border: solid;
  border-color: #111a21;
  filter: drop-shadow(10px 10px 25px #111a21);
  &:hover {
    transform: translate(60px, -30px) scale(1.05);
  }
`;

const BlogProfileImage = styled.img`
  position: absolute;
  transform: translate(0px, 50px);
  width: 24vw;
  border-radius: 5px;
  border: solid;
  border-color: #111a21;
  filter: drop-shadow(10px 10px 25px #111a21);
  &:hover {
    transform: translate(0px, 50px) scale(1.05);
  }
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
        <Header />      
      </HeadingContainer>
      
      <ContentContainer marginTop={contentMarginTop}>
        
        <WelcomeContainer>
          <PlayerContainer width={playerWidth} height={playerWidth}>
            <Player/>
          </PlayerContainer>
          <WelcomeText>Hey all, I'm Jaiden and I'm glad you made it!</WelcomeText>
        </WelcomeContainer>
        
        <SlideInSection>
          <AboutContainer bgColor='#145e97'>
            <SliderText>
              Want to learn more about me?
              <PageLinkButton href="../about">
                Learn More <FaCaretRight />
              </PageLinkButton>
            </SliderText>
            <AboutInformationContainer>
              <AboutCard>
                <AboutCardBody>
                  <AboutCardTitle>Jaiden Hodson</AboutCardTitle>
                  <AboutCardSubtitle>Full Stack Software Developer</AboutCardSubtitle>
                  <StyledCardImage variant="top" src="images/jaiden-model-profile-picture.jpeg" />
                </AboutCardBody>
              </AboutCard>
              <GithubStatsContainer>
                <GithubStatsText>Follow me on Github!</GithubStatsText>
                <a href="https://github.com/PvtGandalf">
                  <GithubStatsImage src="https://github-readme-stats.vercel.app/api?username=PvtGandalf&amp;show_icons=true&amp;theme=tokyonight" alt="Jaiden&#39;s GitHub stats" />
                </a>
              </GithubStatsContainer>
            </AboutInformationContainer>
          </AboutContainer>
        </SlideInSection>
        
        <SlideInSection>
          <AboutContainer bgColor='#145e97'>
            <SliderText>
              Check out some of my projects!
              <PageLinkButton href="../projects">
                View Projects <FaCaretRight />
              </PageLinkButton>
            </SliderText>
            <ProjectImageContainer>
              <ProjectImageBack src="images/projects/MarvelComicWiki[CharacterSearch].jpeg" />
              <ProjectImageFront src="images/projects/MarvelComicWiki[EventsInformation].jpeg" />
            </ProjectImageContainer>
          </AboutContainer>
        </SlideInSection>
        
        <SlideInSection>
          <AboutContainer bgColor='#145e97'>
            <SliderText>
              Or maybe my blog?
              <PageLinkButton href="../blog">
                Visit Blog <FaCaretRight />
              </PageLinkButton>
            </SliderText>
            <BlogImageContainer>
              <BlogImage src="images/medium-blog-post-contents.jpeg" />
              <BlogProfileImage src="images/github-profile.jpeg" />
            </BlogImageContainer>
          </AboutContainer>
        </SlideInSection>
        

        
        <Footer />
        
      </ContentContainer>
    </PageContainer>
  );
}