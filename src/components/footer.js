// ##########################################
// #        Import External Components      #
// ##########################################
import styled from '@emotion/styled/macro';
import { FaLinkedin, FaGithub, FaMediumM, FaEnvelope } from 'react-icons/fa';

// ##########################################
// #        Import Local Components         #
// ##########################################


// ##########################################
// #       Component Specific Styling       #
// ##########################################
const StyledFooter = styled.div`
  margin-top: 50px;
  margin-bottom: 60px;
`;

const SocialContainer = styled.div`
  text-align: center;
  margin: 20px;
`;

const SocialIcon = styled.a`
	color: white;
	margin-right: 10px;
  margin-left: 10px;
  font-size: 1.65vw;
	&:hover {
		color: white;
		transform: scale(1.25);
	}
`;

const CopyrightContainer = styled.div`

`;

const CopyrightText = styled.p`
  font-size: 1.5rem;
  color: white;
  text-align: center;
`;

const WebsiteLink = styled.a`
  font-size: 1.5rem;
  color: white;
  text-align: center;
  text-decoration: none;
`;

// ##########################################
// #            Footer Component            #
// ##########################################
export default function Footer() {
  return (
    <StyledFooter>
      <SocialContainer>
        
        <SocialIcon href='https://www.linkedin.com/in/jaiden-hodson-4a4b70227/'>
          <FaLinkedin />
        </SocialIcon>
        
        <SocialIcon href='https://github.com/PvtGandalf'>
          <FaGithub />
        </SocialIcon>
        
        <SocialIcon href='https://medium.com/@PvtGandalf'>
          <FaMediumM />
        </SocialIcon>
        
        <SocialIcon href='mailto:jaidenhodson1013@gmail.com'>
          <FaEnvelope />
        </SocialIcon>
        
      </SocialContainer>
    
      <CopyrightContainer>
        <CopyrightText>
          © 2020 Copyright: <WebsiteLink href="../home">PvtGandalf.com</WebsiteLink>
        </CopyrightText>
      </CopyrightContainer>
    </StyledFooter>
  );
}