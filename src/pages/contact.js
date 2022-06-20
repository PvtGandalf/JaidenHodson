// ##########################################
// #        Import External Components      #
// ##########################################
import styled from '@emotion/styled/macro';

// ##########################################
// #        Import Local Components         #
// ##########################################
import Header from '../components/header';
import Footer from '../components/footer';

// ##########################################
// #       Component Specific Styling       #
// ##########################################
const PageContainer = styled.div`
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

// ##########################################
// #           Contact Component            #
// ##########################################
export default function Contact() {
  return (
    <PageContainer>
      <Header></Header>
      
      <BodyContainer>
        
      </BodyContainer>
      
      <Footer></Footer>
    </PageContainer>
  );
}