// ##########################################
// #        Import External Components      #
// ##########################################
import styled from '@emotion/styled/macro';

// ##########################################
// #        Import Local Components         #
// ##########################################
import Header from '../components/header';
import Cover from '../components/cover';
import Footer from '../components/footer';
import Project from '../components/project';

// ##########################################
// #       Component Specific Styling       #
// ##########################################
const PageContainer = styled.div`

`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-areas: "Title" "Projects";
	grid-template-columns: auto;
  margin-top: 45px;
  margin-bottom: 45px;
  @media (max-width: 991px) {
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

const ProjectsContainer = styled.div`
  grid-area: Projects;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  margin-left: 50px;
  margin-right: 50px;
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    grid-gap: 25px;
    margin-left: 0px;
    margin-right: 0px;
	}
`;

const FooterContainer = styled.div`
  margin-top: 55px;
  @media (max-width: 991px) {
    margin-top: 0px;
	}
`;

// ##########################################
// #           Projects Component           #
// ##########################################
export default function Projects() {
  
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
        
        <TitleContainer>
          <Title>My Projects</Title>
        </TitleContainer>
        
        <ProjectsContainer>
        <Project
            title="Elixir Experiment"
            images={["/images/projects/ElixirExperiment[Home].png",
            "/images/projects/ElixirExperiment[Cocktail].png",
						"/images/projects/ElixirExperiment[Ingredients].png"]}
            description="Designed, developed, and released a fully functional mobile application to the Google Play Store."
            technology={['Android', 'Dart', 'Git', 'Figma', 'Flutter']}
            demo="https://play.google.com/store/apps/details?id=com.pvtgandalf.the_elixir_experiment"
          />
          <Project
            title="Whole Body Health"
            images={["/images/projects/WBH[Home].png", "/images/projects/WBH[Founder].png"]}
            description="Worked alongside a frontend designer to create a user-friendly, responsive website for a company within the chiropractic sector."
            technology={['AWS', 'Bootstrap', 'CSS3', 'HTML5', 'MaterialUI', 'React', 'Typescript']}
            demo="https://www.wholebodyhealthlebanon.com"
          />
          <Project
            title="MUFG & Union Bank"
            images={["/images/projects/MUFG[Mobile].png",
						"/images/projects/MUFG[Updated].png"]}
            description="Integrated an authentication orchestration system into the bank’s login and HRT flows to improve user experience and maintainability of code."
            technology={['AWS', 'Bash', 'Bootstrap', 'CSS3', 'Docker', 'Express', 'Git', 'HTML5', 'Java', 'Jenkins', 'Jira', 'NodeJs', 'Python', 'React', 'Typescript']}
            demo="https://sso.mufgamericas.com/login/auth"
          />
          <Project
            title="Marvel Comic Wiki"
            images={["/images/projects/MarvelComicWiki[CharacterSearch].jpeg", "/images/projects/MarvelComicWiki[EventsInformation].jpeg"]}
            description="This service retrieves data from Marvel's Developer API and provides the user with a simple UI to traverse through Marvel's database."
            technology={['AWS', 'Bootstrap', 'CSS3', 'HTML5', 'Javascript', 'MaterialUI', 'React']}
            demo="https://www.marvelcomicwiki.com"
            code="https://github.com/PvtGandalf/MarvelComicWiki"
          />
          <Project
            title="Helping My Friend"
            images={["/images/projects/HMF[Home].jpeg", "/images/projects/HMF[Project].jpeg"]}
            description="This is an all-in-one platform that allows its users to create/share projects with the option to enable fundraising, meal-planning and work party scheduling."
            technology={['Bootstrap', 'CSS3', 'Docker', 'Heroku', 'HTML5', 'Javascript', 'Jira', 'MongoDB', 'NodeJs']}
            demo="http://helpingmyfriend.com"
          />
          <Project
            title="Beaver Cocktails"
            images={["/images/projects/BeaverCocktails[Home].png", "/images/projects/BeaverCocktails[RecipeDetails].png", "/images/projects/BeaverCocktails[BarcodeScanner].png"]}
            description="This Figma prototype includes most of the features required from a Cocktail Builder application."
            technology={["Figma"]}
            demo="https://www.figma.com/proto/FdUvNWfBklduvbglLsstXJ/Beaver-Cocktails?node-id=2%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A2"
          />
        </ProjectsContainer>
        
      </ContentContainer>
      
      <FooterContainer>
        <Footer />
      </FooterContainer>
      
    </PageContainer>
  );
}