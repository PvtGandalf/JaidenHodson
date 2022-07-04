// ##########################################
// #        Import External Components      #
// ##########################################
import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaMediumM, FaEnvelope, FaBook, FaDownload} from 'react-icons/fa';
import styled from '@emotion/styled/macro';
import { keyframes } from '@emotion/react'
import { Modal, Button } from 'react-bootstrap'

// ##########################################
// #        Import Local Components         #
// ##########################################
import Resume from '../components/resume';
import ResumePdf from '../pdfs/Jaiden-Hodson-Resume.pdf';

// ##########################################
// #           Keyframe Animations          #
// ##########################################
const animateColorChange = keyframes`
	0% {
    background-position: 0% 0%;
  }
	100% {
    background-position: 0% 100%;
  }
`

const animateBounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
		-webkit-transform: translateY(0);
	}
	40% {
		-webkit-transform: translateY(-20px);
	}
	60% {
		-webkit-transform: translateY(-10px);
	}
`

// ##########################################
// #       Component Specific Styling       #
// ##########################################
const TitleBadgeContainer = styled.div`
	width: -webkit-fill-available;
  text-align: -webkit-center;
`;

const CoverTextContainer = styled.div`
	background: #00000035;
	padding-top: 85px;
	padding-bottom: 85px;
`;

const CoverCharacter = styled.span`
	display: block;
	&:hover {
		animation: ${animateColorChange} 5s linear infinite, ${animateBounce} 1s linear infinite;
		background-image: linear-gradient(0deg, hsla(0, 100%, 50%, 1) 0%, hsla(306, 100%, 50%, 1) 10%, hsla(170, 100%, 47%, 1) 20%, hsla(279, 100%, 50%, 1) 30%, hsla(248, 100%, 50%, 1) 40%, hsla(141, 100%, 50%, 1) 50%, hsla(248, 100%, 50%, 1) 60%, hsla(279, 100%, 50%, 1) 70%, hsla(170, 100%, 47%, 1) 80%, hsla(306, 100%, 50%, 1) 90%, hsla(0, 100%, 50%, 1) 100%);
		background-size: 100% 1100%;
		-webkit-text-fill-color: transparent;
		-webkit-background-clip: text;
	}
`;

const CoverText = styled.h1`
	color: white;
	font-size: 5vw;
	margin-bottom: 10px;
	display: flex;
  justify-content: center;
`;

const CoverSubtext = styled.h2`
	color: white;
	font-size: 3vw;
  display: flex;
	margin-bottom: 5px;
  justify-content: center;
`;

const CoverSocialContainer = styled.div`
	color: white;
	text-align: center;
	font-size: 2.25vw;
	display: flex;
  justify-content: center;
	margin-top: 10px;
	margin-bottom: 10px;
`;

const CoverSocialIcon = styled.a`
	color: white;
	margin-right: 10px;
  margin-left: 10px;
	&:hover {
		color: white;
		transform: scale(1.25);
	}
`;

const StyledModal = styled(Modal)`
	place-content: center;
	.modal-content {
		background-color: rgba(0,0,0,.0001);
  	border: none;
	}
`;

const StyledHeader = styled(Modal.Header)`
	border-bottom: none;
	padding-top: 0;
	padding-bottom: 0;
	padding-right: 1rem;
	padding-left: 1rem;
	.btn-close {
		filter: invert(0.8);
		padding: 0;
	}
`;

const StyledButton = styled(Button)`
	width: fit-content;
	align-self: center;
	background-color: #1e1e1e;
  border-color: #323232;
	&:hover {
		background-color: #4e4e4e;
    border-color: #686868;
	}
`;

const StyledFaDownload = styled(FaDownload)`
	font-size: 15px;
  vertical-align: baseline;
`;

const DownloadLink = styled.a`
	color: white;
  text-decoration: none;
	&:hover {
		color: white;
	}
`;

const ResumeContainer = styled.div`
	
`;

// ##########################################
// #            Cover Component             #
// ##########################################
export default function Cover(props) {
	
	const resumeDownloadLink = 'https://drive.google.com/file/d/1TcNxx0coo2Wiro90i2QdklgE3CRUWh8G/view?usp=sharing';
	
	const [showResumeModal, setShowResumeModal] = useState(false);
	
	function stringToCoverCharacter(string) {
		return string.split('').map((letter, coverTextArray_idx) => {
			if (letter === ' ') {
				letter = '\u00A0'
			}
			return <CoverCharacter key={coverTextArray_idx}>{letter}</CoverCharacter>;
		});
	}
	
	const coverTextArray = stringToCoverCharacter(props.title);
	const coverSubtextArray1 = stringToCoverCharacter(props.subtext[0]);
	const coverSubtextArray2 = stringToCoverCharacter(props.subtext[1]);
	
	function onResumeDownloadButtonPress() {
		window.open(resumeDownloadLink, '_blank');
	}
	
	return (
		<TitleBadgeContainer>
		
				<CoverTextContainer>
					
					<CoverText>
						{coverTextArray}
					</CoverText>
					
					<CoverSubtext>
						{coverSubtextArray1}
					</CoverSubtext>
					
					<CoverSubtext>
						{coverSubtextArray2}
					</CoverSubtext>
					
					<CoverSocialContainer>
						<CoverSocialIcon href='https://github.com/PvtGandalf'>
							<FaGithub />
						</CoverSocialIcon>
						<CoverSocialIcon href='https://medium.com/@PvtGandalf'>
							<FaMediumM />
						</CoverSocialIcon>
						<CoverSocialIcon href='https://www.linkedin.com/in/jaiden-hodson-4a4b70227/'>
							<FaLinkedin />
						</CoverSocialIcon>
						<CoverSocialIcon href='mailto:jaidenhodson1013@gmail.com'>
							<FaEnvelope />
						</CoverSocialIcon>
						<CoverSocialIcon onClick={() => setShowResumeModal(true)}>
							<FaBook />
						</CoverSocialIcon>
					</CoverSocialContainer>
					
				</CoverTextContainer>
				
				<StyledModal
					show={showResumeModal}
					onHide={() => setShowResumeModal(false)}
					{...props}
					dialogClassName="modal-width"
					aria-labelledby="contained-modal-title-vcenter"
					centered
				>
					<StyledHeader closeButton="true">
						<StyledButton variant="primary">
							<DownloadLink href={ResumePdf} download="Jaiden-Hodson-Resume">
								Download <StyledFaDownload />
							</DownloadLink>
						</StyledButton>{' '}
					</StyledHeader>
					
					<ResumeContainer>
						<Resume />
					</ResumeContainer>
					
				</StyledModal>
			
		</TitleBadgeContainer>
	);
}