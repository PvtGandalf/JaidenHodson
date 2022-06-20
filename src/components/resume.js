// ##########################################
// #        Import External Components      #
// ##########################################
import styled from '@emotion/styled/macro';

// ##########################################
// #        Import Local Components         #
// ##########################################
import ResumePdf from '../pdfs/Jaiden-Hodson-Resume.pdf';
import ResumeImgLink from '../images/Jaiden-Hodson-Resume.png';

// ##########################################
// #       Component Specific Styling       #
// ##########################################
const PageContainer = styled.div`
	text-align: -webkit-center;
`;

const ResumeContainer = styled.div`
	background: #00000075;
	width: -webkit-fit-content;
	width: -moz-fit-content;
	width: fit-content;
	padding: 14px;
	border-radius: 6px;
`;

const ResumeImg = styled.img`
	width: 50vw;
`;

// ##########################################
// #            Resume Component            #
// ##########################################
export default function Resume() {
  return (
    <PageContainer>
    
			<ResumeContainer>
				<ResumeImg src={ResumeImgLink}/>
      </ResumeContainer>
			
    </PageContainer>
  );
}