// ##########################################
// #        Import External Components      #
// ##########################################
import styled from '@emotion/styled/macro';
import { keyframes } from '@emotion/react';
import { Button as BootstrapButton } from 'react-bootstrap'

// ##########################################
// #        Import Local Components         #
// ##########################################

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

const ImageContainer = styled.div`
	display: flex;
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

const IconContainer = styled.div`
	
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
	
	const techLibrary = new Map();
		
	techLibrary.set('Amazon Web Service', {reference: 'https://reactjs.org', icon: 'devicon-amazonwebservices-original'});
	techLibrary.set('Bootstrap', {reference: 'https://getbootstrap.com/', icon: 'devicon-bootstrap-plain'});
	techLibrary.set('C', {reference: 'https://www.codecademy.com/resources/docs/c', icon: 'devicon-c-plain'});
	techLibrary.set('CSS3', {reference: 'https://developer.mozilla.org/en-US/docs/Web/CSS', icon: 'devicon-css3-plain'});
	techLibrary.set('Docker', {reference: 'https://docs.docker.com/', icon: 'devicon-docker-plain'});
	techLibrary.set('Figma', {reference: 'https://www.figma.com', icon: 'devicon-figma-plain'});
	techLibrary.set('Git', {reference: 'https://git-scm.com/docs', icon: 'devicon-git-plain'});
	techLibrary.set('Github', {reference: 'https://github.com', icon: 'devicon-github-plain'});
	techLibrary.set('GraphQL', {reference: 'https://graphql.org', icon: 'devicon-graphql-plain'});
	techLibrary.set('Heroku', {reference: 'https://www.heroku.com', icon: 'devicon-heroku-plain'});
	techLibrary.set('HTML5', {reference: 'https://developer.mozilla.org/en-US/docs/Web/HTML', icon: 'devicon-html5-plain'});
	techLibrary.set('Java', {reference: 'https://docs.oracle.com/en/java/', icon: 'devicon-java-plain'});
	techLibrary.set('Javascript', {reference: 'https://developer.mozilla.org/en-US/docs/Web/javascript', icon: 'devicon-javascript-plain'});
	techLibrary.set('Jira', {reference: 'https://www.atlassian.com/software/jira', icon: 'devicon-jira-plain'});
	techLibrary.set('Material Design Bootstrap', {reference: 'https://mdbootstrap.com', icon: 'devicon-materialui-plain'});
	techLibrary.set('MongoDB', {reference: 'https://www.mongodb.com', icon: 'devicon-mongodb-plain'});
	techLibrary.set('MySQL', {reference: 'https://www.mysql.com', icon: 'devicon-mysql-plain'});
	techLibrary.set('NodeJs', {reference: 'https://nodejs.org', icon: 'devicon-nodejs-plain'});
	techLibrary.set('Python', {reference: 'https://www.python.org', icon: 'devicon-python-plain'});
	techLibrary.set('React', {reference: 'https://reactjs.org', icon: 'devicon-react-plain'});
	techLibrary.set('Redis', {reference: 'https://redis.io', icon: 'devicon-redis-plain'});
	techLibrary.set('Redux', {reference: 'https://redux.js.org', icon: 'devicon-redux-plain'});
	techLibrary.set('ThreeJs', {reference: 'https://threejs.org', icon: 'devicon-threejs-plain'});
	techLibrary.set('Windows', {reference: 'https://www.microsoft.com/en-us/windows', icon: 'devicon-windows-plain'});
	
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
				{props.technology.map((skill, idx) =>
					<Icon key={skill} title={skill} href={techLibrary.get(skill).reference}>
						<i className={techLibrary.get(skill).icon}></i>
					</Icon>
				)}
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