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

// ##########################################
// #       Component Specific Styling       #
// ##########################################
const PageContainer = styled.div`

`;

const ContentContainer = styled.div`
  text-align: -webkit-center;
`;

const HeaderContainer = styled.div`
  grid-area: Header;
  margin-bottom: 45px;
`;

const TitleContainer = styled.div`
  grid-area: Title;
  width: 40%;
  justify-self: center;
  background: #00000035;
  padding: 30px;
  border-radius: 40px;
  margin-bottom: 35px;
`;

const Title = styled.h2`
  color: white;
  font-size: 3.5vw;
  text-align: center;
`;

const Subtitle = styled.h3`
  color: white;
  font-size: 2.5vw;
  text-align: center;
`;

const VideoOuterContainer = styled.div`
  width: 85%;
	background: #00000035;
  padding: 30px;
  border-radius: 40px;
`;

const VideoInnerContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 30px;
  border-radius: 40px;
  &:after {
    display: block;
    content: "";
    padding-top: 56.25%;
  }
`;

const StyledIFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const FooterContainer = styled.div`
  margin-top: 55px;
`;

// ##########################################
// #            Contact Component           #
// ##########################################
export default function About() {
  
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
          <Title>Go back home!</Title>
        </TitleContainer>
        
        <VideoOuterContainer>
          <VideoInnerContainer>
            <StyledIFrame
              src="https://www.youtube.com/embed/mJZZNHekEQw?start=86&origin=https://www.pvtgandalf.com"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </VideoInnerContainer>
        </VideoOuterContainer>
        
      </ContentContainer>
      
      <FooterContainer>
        <Footer />
      </FooterContainer>
      
    </PageContainer>
  );
}