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

const HeaderContainer = styled.div`
  grid-area: Header;
  margin-bottom: 45px;
  @media (max-width: 991px) {
    margin-bottom: 25px;
	}
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

// ##########################################
// #            Error Component             #
// ##########################################
export default function Error() {
  return (
    <PageContainer>
      <Header />
      
      <HeaderContainer>
        <Cover
          title="Jaiden Hodson"
          subtext={["Full Stack", "Software Developer"]}
        />
      </HeaderContainer>
      
      <BodyContainer>
        
      </BodyContainer>
      
      <Footer></Footer>
    </PageContainer>
  );
}