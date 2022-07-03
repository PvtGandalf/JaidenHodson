// ##########################################
// #        Import External Components      #
// ##########################################
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled/macro';
import { Card, Button } from 'react-bootstrap'
import { FaCaretRight } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// ##########################################
// #        Import Local Components         #
// ##########################################
import Header from '../components/header';
import Cover from '../components/cover';
import Footer from '../components/footer';
import Player from '../components/player';

// ##########################################
// #       Component Specific Styling       #
// ##########################################
const PageContainer = styled.div`

`;

const HeadingContainer = styled.div`

`;

const ContentContainer = styled.div`
  position: absolute;
  background-color: #111a21;
  width: -webkit-fill-available;
`;

const HeaderContainer = styled.div`
  grid-area: Header;
  margin-bottom: 45px;
  @media (max-width: 991px) {
    margin-bottom: 25px;
	}
`;

const WelcomeContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  margin-bottom: 40px;
  margin-left: 10vw;
  margin-right: 10vw;
`;

const PlayerContainer = styled.div`
	width: 30vw;
  height: 45vw;
  margin-right: 5vw;
`;

const WelcomeText = styled.h3`
	color: white;
  font-size: 5vw;
  align-self: center;
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

const AboutSliderText = styled.h3`
  margin-bottom: 20px;
	grid-area: SliderText;
  color: white;
  font-size: 3vw;
  @media (max-width: 991px) {
    margin-bottom: 0px;
	}
`;

const SliderText = styled.h3`
  margin-bottom: 20px;
	grid-area: SliderText;
  color: white;
  font-size: 3vw;
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
    width: 45vw;
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
  font-size: calc(1vw + 0.25rem);
  @media (max-width: 991px) {
    justify-self: self-end;
	}
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
  aspect-ratio: 1 / 1;
  @media (max-width: 991px) {
    grid-template-areas: "SliderText SliderText Button" "ProjectImageContainer ProjectImageContainer ProjectImageContainer";
    grid-template-rows: min-content auto;
    aspect-ratio: 5 / 4;
  }
`;

const ProjectImageContainer = styled.div`
  grid-area: ProjectImageContainer;
  position: relative;
  width: 100%;
  max-width: 37vw;
  line-height: 0;
  @media (max-width: 991px) {
    max-width: none;
    max-height: 20vw;
	}
`;

const ProjectImageBack = styled.img`
  width: 75%;
  position: absolute;
  top: 15%;
  left: 10%;
  border-radius: 5px;
  border: solid;
  border-color: #111a21;
  filter: drop-shadow(10px 10px 25px #111a21);
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 991px) {
    max-width: 75vw;
    left: 0%;
	}
`;

const ProjectImageFront = styled.img`
  width: 75%;
  position: absolute;
  top: 30%;
  left: 25%;
  border-radius: 5px;
  border: solid;
  border-color: #111a21;
  filter: drop-shadow(10px 10px 25px #111a21);
  &:hover {
    transform: scale(1.05);
  }
`;

const BlogContainer = styled.div`
  grid-area: BlogContainer;
  display: grid;
	grid-template-areas: "SliderText" "Button" "BlogImageContainer";
	grid-template-rows: min-content min-content auto;
  background-color: ${props => props.bgColor};
  padding: 50px;
  border: solid;
  border-width: 30px;
  aspect-ratio: 1 / 1;
  @media (max-width: 991px) {
    grid-template-areas: "SliderText SliderText Button" "BlogImageContainer BlogImageContainer BlogImageContainer";
    grid-template-rows: min-content auto;
  }
`;

const BlogImageContainer = styled.div`
  grid-area: BlogImageContainer;
  position: relative;
  width: 100%;
  max-width: 37vw;
  line-height: 0;
`;

const BlogImage = styled.img`
  max-height: 85%;
  position: absolute;
  top: 12%;
  left: 25%;
  border-radius: 5px;
  border: solid;
  border-color: #111a21;
  filter: drop-shadow(10px 10px 25px #111a21);
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 991px) {
    top: 7%;
    left: 55%;
  }
`;

const BlogProfileImage = styled.img`
  height: 65%;
  position: absolute;
  top: 32%;
  left: 14%;
  border-radius: 5px;
  border: solid;
  border-color: #111a21;
  filter: drop-shadow(10px 10px 25px #111a21);
  &:hover {
    transform: scale(1.05);
  }
`;

const MultiSlideInSectionContainer = styled.div`
  display: grid;
	grid-template-areas: "ProjectContainer BlogContainer";
	grid-template-columns: 50% 50%;
  @media (max-width: 991px) {
    grid-template-columns: auto;
    grid-template-areas: "ProjectContainer" "BlogContainer";
	}
`;

// ##########################################
// #            Home Component              #
// ##########################################
export default function Home() {
  
  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const { ref, inView } = useInView();
  const { ref: ref2, inView: inView2 } = useInView();
  const { ref: ref3, inView: inView3 } = useInView();

  useEffect(() => {
    
    const aboutView = (inView) ? controls.start('visible') : controls.start('hidden');
    const projectView = (inView2) ? controls2.start('visible') : controls2.start('hidden');
    const blogView = (inView3) ? controls3.start('visible') : controls3.start('hidden');
    
  }, [inView, inView2, inView3]);
  
  const boxVariants = {
    hidden: {opacity: 0 },
    visible: {
      opacity: 1, 
      transition: {
        duration: 0.5,
        
      },
    },
  };
  
  return (
    <PageContainer>
    
      <Header />
      
      <HeaderContainer>
        <Cover
          title="Jaiden Hodson"
          subtext={["Full Stack", "Software Developer"]}
        />
      </HeaderContainer>
      
      <ContentContainer>

        <WelcomeContainer>
          <WelcomeText>Hey all, I'm Jaiden and I'm glad you made it!</WelcomeText>
          <PlayerContainer>
            <Player/>
          </PlayerContainer>
        </WelcomeContainer>
        
        <motion.div
          ref={ref}
          initial='hidden'
          animate={controls}
          variants={boxVariants}
        >
          
          <AboutContainer bgColor='#145e97'>
            <AboutInformationContainer>
              <AboutSliderText>
                Want to learn more about me?
              </AboutSliderText>
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
        
        </motion.div>
        
        
        
        <MultiSlideInSectionContainer>
          
            <motion.div
              ref={ref2}
              initial='hidden'
              animate={controls2}
              variants={boxVariants}
            >
              <ProjectContainer bgColor='#145e97'>
                <SliderText>
                  Check out my projects!
                </SliderText>
                <PageLinkButton href="../projects">
                  View Projects <FaCaretRight />
                </PageLinkButton>
                <ProjectImageContainer>
                  <ProjectImageBack src="images/projects/MarvelComicWiki[CharacterSearch].jpeg" />
                  <ProjectImageFront src="images/projects/MarvelComicWiki[EventsInformation].jpeg" />
                </ProjectImageContainer>
              </ProjectContainer>
            </motion.div>

          <motion.div
            ref={ref3}
            initial='hidden'
            animate={controls3}
            variants={boxVariants}
          >
            <BlogContainer bgColor='#145e97'>
              <SliderText>
                I've also got a blog!
              </SliderText>
              <PageLinkButton href="../blog">
                Visit Blog <FaCaretRight />
              </PageLinkButton>
              <BlogImageContainer>
                <BlogImage src="images/medium-blog-post-contents.jpeg" />
                <BlogProfileImage src="images/github-profile.jpeg" />
              </BlogImageContainer>
            </BlogContainer>
          </motion.div>
          
        </MultiSlideInSectionContainer>
      
        <Footer />
        
      </ContentContainer>
    </PageContainer>
  );
}