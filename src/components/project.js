// ##########################################
// #        Import External Components      #
// ##########################################
import styled from '@emotion/styled/macro';
import { keyframes } from '@emotion/react';
import { Button as BootstrapButton } from 'react-bootstrap'

// ##########################################
// #        Import Local Components         #
// ##########################################
import IconLibrary from '../utilities/iconLibrary.json';

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

// ##########################################
// #       Component Specific Styling       #
// ##########################################
const ProjectContainer = styled.div`
	background: #00000035;
  padding: 30px;
  border-radius: 40px;
	display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  color: white;
  font-size: 3.5vw;
  text-align: center;
`;

const ImagesContainer = styled.div`
	display: flex;
	margin: 10px;
`;

const Image = styled.img`
  width: 100%;
	border-radius: 5px;
	border: solid;
  border-radius: 5px;
	&:hover {
    transform: scale(1.05);
  }
`;

const DescriptionContainer = styled.div`
	margin-top: 30px;
	margin-right: 30px;
	margin-bottom: 20px;
	margin-left: 30px;
`;

const Description = styled.p`
  color: white;
  font-size: 1.5vw;
  text-align: center;
`;

const TechnologyContainer = styled.div`
	text-align: center;
	align-self: center;
	width: 75%;
`;

const Icon = styled.a`
  font-size: 2.5vw;
  display: inline-block;
  color: white;
  margin-right: 3%;
  margin-left: 3%;
  text-decoration: none;
	&:hover {
		transform: scale(1.25);
    animation: ${animateColorChange} 5s linear infinite;
		background-image: linear-gradient(0deg, hsla(0, 100%, 50%, 1) 0%, hsla(306, 100%, 50%, 1) 10%, hsla(170, 100%, 47%, 1) 20%, hsla(279, 100%, 50%, 1) 30%, hsla(248, 100%, 50%, 1) 40%, hsla(141, 100%, 50%, 1) 50%, hsla(248, 100%, 50%, 1) 60%, hsla(279, 100%, 50%, 1) 70%, hsla(170, 100%, 47%, 1) 80%, hsla(306, 100%, 50%, 1) 90%, hsla(0, 100%, 50%, 1) 100%);
		background-size: 100% 1100%;
		-webkit-text-fill-color: transparent;
		-webkit-background-clip: text;
	};
	@media (max-width: 991px) {
		margin-right: 1.25%;
    margin-left: 1.25%;
	}
`;

const IconText = styled.p`
  font-size: 1vw;
  color: white;
`;

const ButtonsContainer = styled.div`
	display: flex;
  justify-content: space-evenly;
	margin-top: 35px;
  margin-bottom: 15px;
	height: 100%;
	align-items: flex-end;
`;

const Button = styled(BootstrapButton)`
  width: fit-content;
  height: fit-content;
  font-size: calc(1vw + 0.25rem);
  @media (max-width: 991px) {
    justify-self: self-end;
	}
	
`;

// ##########################################
// #           Project Component            #
// ##########################################
export default function Project(props) {
	
  return (
		<ProjectContainer>

			<Title>{props.title}</Title>
			
			<ImagesContainer>
				{props.images.map((image, idx) =>
					<ImagesContainer key={image}>
						<Image src={image} />
					</ImagesContainer>
				)}
			</ImagesContainer>
			
			<DescriptionContainer>
				<Description>
				{props.description}
				</Description>
			</DescriptionContainer>
			
			<TechnologyContainer>
				{props.technology.map((skill, idx) => {
					const currentIcon = (IconLibrary.main.skills.find(item => item.skill_name === skill));
					
					return (
						<Icon key={currentIcon.skill_name} title={currentIcon.skill_name} href={currentIcon.skill_reference}>
							<i className={currentIcon.skill_icon_name}></i>
							<IconText>{currentIcon.skill_name}</IconText>
						</Icon>
					);
					
				})}
			</TechnologyContainer>
			
			<ButtonsContainer>
			{props.demo ? 
				<Button href={props.demo}>View Demo</Button>
				:
				<></>
			}
			{props.code ? 
				<Button href={props.code}>View Code</Button>
				:
				<></>
			}
			</ButtonsContainer>

		</ProjectContainer>
  );
}