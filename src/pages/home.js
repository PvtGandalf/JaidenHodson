// ##########################################
// #        Import External Components      #
// ##########################################
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled/macro';
import { Card, Button, Carousel } from 'react-bootstrap'
import { FaCaretRight } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Slider from "react-slick";

// ##########################################
// #        Import Local Components         #
// ##########################################
import Header from '../components/header';
import Cover from '../components/cover';
import Footer from '../components/footer';
import Player from '../components/player';
import ProjectLibrary from '../utilities/projectLibrary.json';

// ##########################################
// #       Component Specific Styling       #
// ##########################################
const PageContainer = styled.div`

`;

const HeadingContainer = styled.div`

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
  margin-bottom: 3vw;
  margin-left: 10vw;
  margin-right: 5vw;
`;

const PlayerContainer = styled.div`
	width: 30vw;
  height: 45vw;
`;

const WelcomeText = styled.h3`
	color: white;
  font-size: 5vw;
  align-self: center;
`;

const AboutContainer = styled.div`
  grid-area: SliderContainer;
  background-color: #145e97;
  padding: 50px;
  border: 30px solid;
  @media (max-width: 991px) {
    padding: 30px;
    border: 25px solid;
	}
`;

const AboutInformationContainer = styled.div`
  display: grid;
	grid-template-areas: "SliderText Button" "LinkedIn GithubStats";
  grid-template-columns: 1fr 1fr;
  @media (max-width: 991px) {
    grid-template-areas: "SliderText Button" "LinkedIn LinkedIn" "GithubStats GithubStats";
	}
`;

const SliderText = styled.h3`
	grid-area: SliderText;
  color: white;
  font-size: 3vw;
  margin-bottom: 30px;
  max-width: 45vw;
  @media (max-width: 991px) {
    font-size: 4vw;
	}
`;

const ProfileImage = styled.img`
  grid-area: ProfileCard;
  height: 65%;
  border-radius: 5px;
  border: solid;
  border-color: #111a21;
  filter: drop-shadow(10px 10px 25px #111a21);
  &:hover {
    transform: scale(1.05);
  }
`;

const GithubStatsContainer = styled.div`
  grid-area: GithubStats;
  color: white;
  text-align: -webkit-center;
  align-self: self-end;
  margin-bottom: 15px;
  padding-top: 1.5vw;
  padding-right: 5vw;
  padding-left: 5vw;
  z-index: 1;
  &:hover {
    transform: scale(1.05);
  }
`;

const SliderSubtitleText = styled.h4`
  font-size: 2.2vw;
  margin-bottom: 15px;
  @media (max-width: 991px) {
    font-size: 3vw;
	}
`;

const GithubStatsImage = styled.img`
  width: 100%;
  filter: drop-shadow(10px 10px 25px #111a21);
`;

const LinkedInContainer = styled.div`
  grid-area: LinkedIn;
  color: white;
  text-align: -webkit-center;
  align-self: self-end;
  margin-bottom: 15px;
  padding-top: 1.5vw;
  padding-right: 5vw;
  padding-left: 5vw;
  &:hover {
    transform: scale(1.05);
  }
`;

const LinkedInImageContainer = styled.div`
  display: grid;
	grid-template-areas: "LinkedInImage";
  grid-template-columns: auto;
`;

const LinkedInProfileImage = styled.img`
  grid-area: LinkedInImage;
  width: 25%;
  margin-top: 5%;
  margin-left: 5%;
  filter: drop-shadow(10px 10px 25px #111a21);
`;

const LinkedInBannerImage = styled.img`
  grid-area: LinkedInImage;
  width: 100%;
  filter: drop-shadow(10px 10px 25px #111a21);
  border-radius: 5px;
  border: solid;
  border-color: #666666;
`;

const PageLinkButton = styled(Button)`
  grid-area: Button;
  width: fit-content;
  height: fit-content;
  font-size: 1.5vw;
  white-space: nowrap;
  justify-self: ${props => props.position};
  @media (max-width: 991px) {
    justify-self: self-end;
    font-size: 2.75vw;
	}
`;

const ProjectContainer = styled.div`
  grid-area: ProjectContainer;
  display: grid;
	grid-template-areas: "SliderText" "Button" "ProjectImageContainer";
	grid-template-rows: min-content min-content auto;
  background-color: ${props => props.bgColor};
  padding: 50px;
  border: 30px solid;
  height: 100%;
  @media (max-width: 991px) {
    grid-template-areas: "SliderText Button" "ProjectImageContainer ProjectImageContainer";
    grid-template-rows: min-content auto;
    height: auto;
    aspect-ratio: 10/8.5;
    padding: 30px;
    border: 25px solid;
  }
`;

const StyledSlider = styled(Slider)`
  .slick-track {
    display: flex !important;
  }
  .slick-slide {
    height: inherit !important;
    display: flex !important;
    justify-content: center;
    align-items: center;
  }
`;

const CarouselContainer = styled.div`
  
`;

const CarouselImage = styled.img`
  width: 100%;
  border-radius: 5px;
  border: solid;
  border-color: #111a21;
`;

const ProjectImageContainer = styled.div`
  grid-area: ProjectImageContainer;
  position: relative;
  width: 100%;
  max-width: 32vw;
  line-height: 0;
  justify-self: center;
  align-self: center;
  filter: drop-shadow(10px 10px 25px #111a21);
  @media (max-width: 991px) {
    max-width: 70vw;
    margin-top: 3vw;
    margin-bottom: 4vw;
	}
`;

const ProjectImageBack = styled.img`
  max-height: 25vw;
  max-width: 90%;
  position: absolute;
  top: 10%;
  border-radius: 5px;
  border: solid;
  border-color: #111a21;
  filter: drop-shadow(10px 10px 25px #111a21);
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 991px) {
    max-height: 50vw;
    max-width: 100%;
    top: 30%;
	}
`;

const ProjectImageFront = styled.img`
  max-height: 25vw;
  max-width: 90%;
  position: absolute;
  top: 30%;
  left: 10%;
  border-radius: 5px;
  border: solid;
  border-color: #111a21;
  filter: drop-shadow(10px 10px 25px #111a21);
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 991px) {
    max-height: 50vw;
    max-width: 100%;
    top: 60%;
    left: 25%;
	}
`;

const BlogContainer = styled.div`
  grid-area: BlogContainer;
  display: grid;
	grid-template-areas: "SliderText" "Button" "BlogImageContainer";
	grid-template-rows: min-content min-content auto;
  background-color: ${props => props.bgColor};
  padding: 50px;
  border: 30px solid;
  @media (max-width: 991px) {
    grid-template-areas: "SliderText SliderText Button" "BlogImageContainer BlogImageContainer BlogImageContainer";
    grid-template-rows: min-content auto;
    height: auto;
    padding: 30px;
    border: 25px solid;
  }
`;

const BlogImageContainer = styled.div`
  grid-area: BlogImageContainer;
  display: grid;
	grid-template-areas: "BlogImage";
	grid-template-rows: auto;
  padding-right: 3vw;
  padding-left: 3vw;
  padding-top: 4vw;
  max-height: 37vw;
  @media (max-width: 991px) {
    max-height: none;
    padding-right: 5vw;
    padding-left: 5vw;
    padding-top: 4vw;
    padding-bottom: 1.5vw;
  }
`;

const BlogImage = styled.img`
  grid-area: BlogImage;
  border-radius: 5px;
  border: solid;
  border-color: #111a21;
  filter: drop-shadow(10px 10px 25px #111a21);
  max-height: 33vw;
  justify-self: self-end;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 991px) {
    justify-self: start;
    max-height: none;
    width: 90%;
  }
`;

const BlogProfileImage = styled.img`
  grid-area: BlogImage;
  border-radius: 5px;
  border: solid;
  border-color: #111a21;
  filter: drop-shadow(10px 10px 25px #111a21);
  width: 50%;
  align-self: self-end;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 991px) {
    align-self: start;
    width: 45%;
    margin-left: 55%;
    margin-top: 52%;
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
  
  const sliderSettings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
  };
  
  return (
    <PageContainer>
    
      <Header />
      
      <Cover
        title="Jaiden Hodson"
        subtext={["Full Stack", "Software Developer"]}
      />

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
            <SliderText>
              Want to learn more about me?
            </SliderText>
            <PageLinkButton href="../about" position='self-end'>
              Learn More <FaCaretRight />
            </PageLinkButton>
            <GithubStatsContainer>
              <SliderSubtitleText>Follow me on Github!</SliderSubtitleText>
              <a href="https://github.com/PvtGandalf"  target="_blank">
                <GithubStatsImage src="https://github-readme-stats.vercel.app/api?username=PvtGandalf&amp;show_icons=true&amp&theme=tokyonight" alt="Jaiden&#39;s GitHub stats" />
              </a>
            </GithubStatsContainer>
            
            <LinkedInContainer>
              <SliderSubtitleText>Connect with me on LinkedIn!</SliderSubtitleText>
              <a href="https://www.linkedin.com/in/jaiden-hodson-4a4b70227/" target="_blank">
                <LinkedInImageContainer>
                  <LinkedInBannerImage src="images/linkedin-banner.png" alt="Jaiden&#39;s LinkedIn" />
                  <LinkedInProfileImage src="images/pvtgandalf-profile-image.png" alt="Jaiden&#39;s LinkedIn" />
                </LinkedInImageContainer>
              </a>
            </LinkedInContainer>
            
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
              <StyledSlider {...sliderSettings}>
                {ProjectLibrary.main.projects.map((project, idx) =>
                  <CarouselContainer key={project.project_title}>
                    <CarouselImage src={project.project_images[0].image_link} alt={project.project_images[0].image_alt} />
                  </CarouselContainer>
                )}
              </StyledSlider>
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
        
    </PageContainer>
  );
}