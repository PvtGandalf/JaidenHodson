// ##########################################
// #        Import External Components      #
// ##########################################
import styled from '@emotion/styled/macro';

// ##########################################
// #        Import Local Components         #
// ##########################################
import Header from '../components/header';
import TitleBadge from '../components/titleBadge';
import Footer from '../components/footer';
import Player from '../components/player';
import SkillsIcons from '../components/skillsIcons';

// ##########################################
// #       Component Specific Styling       #
// ##########################################
const PageContainer = styled.div`

`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-areas: "Title Title Title" "Skills Model Bio" "Edu Edu Edu";
	grid-template-columns: 1fr min-content 1fr;
  margin-top: 45px;
  margin-bottom: 45px;
  @media (max-width: 991px) {
    grid-template-areas: "Title Title Title Title" "Model Bio Bio Bio" "Skills Skills Skills Skills" "Edu Edu Edu Edu";
    grid-template-columns: auto;
    margin-top: 45px;
    margin-bottom: 45px;
    margin-left: 30px;
    margin-right: 30px;
	}
`;

const HeaderContainer = styled.div`
  grid-area: Header;
  margin-bottom: 45px;
  @media (max-width: 991px) {
    margin-bottom: 25px;
	}
`;

const TitleContainer = styled.div`
  grid-area: Title;
  margin-bottom: 45px;
  width: 40%;
  justify-self: center;
  background: #00000035;
  padding: 30px;
  border-radius: 40px;
  @media (max-width: 991px) {
    margin-bottom: 25px;
    width: 100%;
	}
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
  @media (max-width: 991px) {
    font-size: 2.4vw;
	}
`;

const SkillsContainer = styled.div`
  grid-area: Skills;
  width: 32vw;
  justify-self: center;
  background: #00000035;
  padding: 30px;
  border-radius: 40px;
  @media (max-width: 991px) {
    width: 100%;
    margin-top: 25px;
    padding: 20px;
	}
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
  @media (max-width: 991px) {
    width: 100%;
    margin-top: 25px;
    padding: 20px;
	}
`;

const EducationContentContainer = styled.div`
  display: flex;
  align-items: end;
`;

const SchoolContainer = styled.a`
  width: 100%;
  line-height: normal;
  text-decoration: none;
  &:hover {
    transform: scale(1.05);
  }
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
  @media (max-width: 991px) {
    width: auto;
	}
`;

const BiographyContentContainer = styled.div`
  margin-left: 9%;
  margin-right: 9%;
  margin-top: 15px;
  text-align: center;
  @media (max-width: 991px) {
    width: auto;
    height: fit-content;
    align-self: center;
	}
`;

const FooterContainer = styled.div`
  margin-top: 55px;
  @media (max-width: 991px) {
    margin-top: 0px;
	}
`;

// ##########################################
// #            About Component             #
// ##########################################
export default function About() {
  
  return (
    <PageContainer>
      <Header />
      
      <HeaderContainer>
        <TitleBadge
          title="Jaiden Hodson"
          subtext={["Full Stack", "Software Developer"]}
        />
      </HeaderContainer>
      
      <ContentContainer>
        
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
          
            <SchoolContainer href="https://oregonstate.edu">
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
            
            <SchoolContainer href="https://sahs.albany.k12.or.us">
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