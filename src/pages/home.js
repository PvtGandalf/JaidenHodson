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
  grid-area: SliderContainer;
  background-color: ${props => props.bgColor};
  padding: 50px;
  border: solid;
  border-width: 30px;
`;

const AboutInformationContainer = styled.div`
  display: grid;
	grid-template-areas: "SliderText SliderText" "Button ProfileCard" "GithubStats ProfileCard";
	grid-template-columns: auto;
  @media (max-width: 991px) {
    grid-template-areas: "SliderText SliderText Button" "ProfileCard ProfileCard ProfileCard" "GithubStats GithubStats GithubStats";
    grid-template-columns: auto auto 130px;
  }
`;

const SliderText = styled.h3`
  margin-bottom: 20px;
	grid-area: SliderText;
  color: white;
  font-size: 3vw;
  @media (max-width: 991px) {
    margin-bottom: 0px;
	}
`;

const AboutCard = styled(Card)`
  grid-area: ProfileCard;
  text-align: center;
  place-self: center;
  padding: 10px;
  background-color: #111a21;
  width: 70%;
  filter: drop-shadow(10px 10px 25px #111a21);
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 991px) {
    margin-top: 50px;
    width: 50%;
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
  grid-area: GithubStats;
  color: white;
  text-align: -webkit-center;
  align-self: self-end;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 991px) {
    margin-top: 40px;
	}
`;

const GithubStatsText = styled.h4`
  margin-bottom: 20px;
`;

const GithubStatsImage = styled.img`
  width: 100%;
  filter: drop-shadow(10px 10px 25px #111a21);
`;

const PageLinkButton = styled(Button)`
  grid-area: Button;
  width: fit-content;
  height: fit-content;
`;

const ProjectContainer = styled.div`
  grid-area: ProjectContainer;
  display: grid;
	grid-template-areas: "SliderText" "Button" "ProjectImageContainer";
	grid-template-rows: min-content min-content auto;
  background-color: ${props => props.bgColor};
  padding: 50px;
  border: solid;
  border-width: 30px;
  height: 100%;
`;

const ProjectImageContainer = styled.div`
  grid-area: ProjectImageContainer;
`;

const ProjectImageBack = styled.img`
  width: 50%;
  margin-top: 8%;
  margin-left: 10%;
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
  width: 50%;
  margin-top: 8%;
  margin-left: 10%;
  transform: translate(20%, 25%);
  position: absolute;
  border-radius: 5px;
  border: solid;
  border-color: #111a21;
  filter: drop-shadow(10px 10px 25px #111a21);
  &:hover {
    transform: translate(60px, 70px) scale(1.05);
  }
`;

const BlogContainer = styled.div`
  grid-area: BlogContainer;
  background-color: ${props => props.bgColor};
  padding: 50px;
  border: solid;
  border-width: 30px;
`;

const BlogImageContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  margin-right: 45px;
  margin-left: 60px;
  width: 38vw;
  height: 35vw;
`;

const BlogImage = styled.img`
  position: absolute;
  transform: translate(40px, 0px);
  margin-top: 50px;
  width: 50%;
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
  transform: translate(0px, 189px);
  width: 30%;
  border-radius: 5px;
  border: solid;
  border-color: #111a21;
  filter: drop-shadow(10px 10px 25px #111a21);
  &:hover {
    transform: translate(0px, 50px) scale(1.05);
  }
`;

const MultiSlideInSectionContainer = styled.div`
  display: grid;
	grid-template-areas: "ProjectContainer BlogContainer";
	grid-template-columns: 50% 50%;
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
            <AboutInformationContainer>
              <SliderText>
                Want to learn more about me?
              </SliderText>
              <PageLinkButton href="../about">
                  Learn More <FaCaretRight />
                </PageLinkButton>
              <GithubStatsContainer>
                <GithubStatsText>Follow me on Github!</GithubStatsText>
                <a href="https://github.com/PvtGandalf">
                  <GithubStatsImage src="https://github-readme-stats.vercel.app/api?username=PvtGandalf&amp;show_icons=true&amp;theme=tokyonight" alt="Jaiden&#39;s GitHub stats" />
                </a>
              </GithubStatsContainer>
              <AboutCard>
                <AboutCardBody>
                  <AboutCardTitle>Jaiden Hodson</AboutCardTitle>
                  <AboutCardSubtitle>Full Stack Software Developer</AboutCardSubtitle>
                  <StyledCardImage variant="top" src="images/jaiden-model-profile-picture.jpeg" />
                </AboutCardBody>
              </AboutCard>
            </AboutInformationContainer>
          </AboutContainer>
        </SlideInSection>
        
        <MultiSlideInSectionContainer>
          
          <SlideInSection>
            <ProjectContainer bgColor='#145e97'>
              <SliderText>
                Check out some of my projects!
              </SliderText>
              <PageLinkButton href="../projects">
                View Projects <FaCaretRight />
              </PageLinkButton>
              <ProjectImageContainer>
                <ProjectImageBack src="images/projects/MarvelComicWiki[CharacterSearch].jpeg" />
                <ProjectImageFront src="images/projects/MarvelComicWiki[EventsInformation].jpeg" />
              </ProjectImageContainer>
            </ProjectContainer>
          </SlideInSection>

          <SlideInSection>
            <BlogContainer bgColor='#145e97'>
              <SliderText>
                I've also got a blog!
                <PageLinkButton href="../blog">
                  Visit Blog <FaCaretRight />
                </PageLinkButton>
              </SliderText>
              <BlogImageContainer>
                <BlogImage src="images/medium-blog-post-contents.jpeg" />
                <BlogProfileImage src="images/github-profile.jpeg" />
              </BlogImageContainer>
            </BlogContainer>
          </SlideInSection>
          
        </MultiSlideInSectionContainer>
      
        <Footer />
        
      </ContentContainer>
    </PageContainer>
  );
}