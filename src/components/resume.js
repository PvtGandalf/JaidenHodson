// ##########################################
// #        Import External Components      #
// ##########################################
import styled from '@emotion/styled/macro';

// ##########################################
// #        Import Local Components         #
// ##########################################
import ResumeImgLink from '../images/Jaiden-Hodson-Resume.png';

// ##########################################
// #       Component Specific Styling       #
// ##########################################
const ResumeContainer = styled.div`
	background: #00000075;
	width: -webkit-fit-content;
	width: -moz-fit-content;
	width: fit-content;
	padding: 14px;
	border-radius: 6px;
`;

const ResumeImg = styled.img`
	width: 100%;
`;

// ##########################################
// #            Resume Component            #
// ##########################################
export default function Resume() {
  return (
		<ResumeContainer>
			<ResumeImg src={ResumeImgLink}/>
		</ResumeContainer>
  );
}