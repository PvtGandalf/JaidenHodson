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
  background-color: #00000035;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const SocialContainer = styled.div`
  text-align: center;
  margin: 20px;
  font-size: calc(1vw + 0.5rem);
`;

const SocialIcon = styled.a`
  display: inline-block;
	color: white;
	margin-right: 10px;
  margin-left: 10px;
	&:hover {
		color: white;
		transform: scale(1.25);
	};
`;

const CopyrightContainer = styled.div`
  font-size: calc(1vw + 0.5rem);
`;

const CopyrightText = styled.p`
  color: white;
  text-align: center;
`;

const WebsiteLink = styled.a`
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
        
        <SocialIcon href='https://github.com/PvtGandalf' target="_blank">
          <FaGithub />
        </SocialIcon>
        
        <SocialIcon href='https://medium.com/@PvtGandalf' target="_blank">
          <FaMediumM />
        </SocialIcon>
        
        <SocialIcon href='https://www.linkedin.com/in/jaiden-hodson-4a4b70227/' target="_blank">
          <FaLinkedin />
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