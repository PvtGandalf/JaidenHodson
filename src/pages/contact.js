// ##########################################
// #        Import External Components      #
// ##########################################
import styled from '@emotion/styled/macro';
import { Card, Button } from 'react-bootstrap'
import { FaCaretRight } from 'react-icons/fa';

// ##########################################
// #        Import Local Components         #
// ##########################################
import Header from '../components/header';
import Footer from '../components/footer';
import SlideInSection from '../components/slideInSection';

// ##########################################
// #       Component Specific Styling       #
// ##########################################
const PageContainer = styled.div`

`;

const HeadingContainer = styled.div`

`;

const ContentContainer = styled.div`

`;


// ##########################################
// #           Contact Component            #
// ##########################################
export default function Contact() {
  
  return (
    <PageContainer>
    
      <HeadingContainer>
        <Header />      
      </HeadingContainer>
      
      <ContentContainer>

      </ContentContainer>
      
      <Footer />
      
    </PageContainer>
  );
}