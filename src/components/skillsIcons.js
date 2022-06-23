// ##########################################
// #        Import External Components      #
// ##########################################
import styled from '@emotion/styled/macro';
import { keyframes } from '@emotion/react'

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
const IconGroupContainer = styled.div`
  text-align: center;
`;

const Icon = styled.a`
  font-size: calc(1vw + 1.9rem);
  display: inline-block;
  color: white;
  margin: 3%;
  text-decoration: none;
	&:hover {
		transform: scale(1.25);
    animation: ${animateColorChange} 5s linear infinite;
		background-image: linear-gradient(0deg, hsla(0, 100%, 50%, 1) 0%, hsla(306, 100%, 50%, 1) 10%, hsla(170, 100%, 47%, 1) 20%, hsla(279, 100%, 50%, 1) 30%, hsla(248, 100%, 50%, 1) 40%, hsla(141, 100%, 50%, 1) 50%, hsla(248, 100%, 50%, 1) 60%, hsla(279, 100%, 50%, 1) 70%, hsla(170, 100%, 47%, 1) 80%, hsla(306, 100%, 50%, 1) 90%, hsla(0, 100%, 50%, 1) 100%);
		background-size: 100% 1100%;
		-webkit-text-fill-color: transparent;
		-webkit-background-clip: text;
	};
`;

const SkillsIconsContainer = styled.div`
  grid-area: Skills;
  justify-self: center;
`;

// ##########################################
// #            About Component             #
// ##########################################
export default function SkillsIcons() {
  
  function handleIconClick(e) {
    e.preventDefault();
		window.open(e.currentTarget.href, '_blank');
	}
  
  return (
		<SkillsIconsContainer>
			
			{/* AWS, Bootstrap, C, CSS3, Docker */}
			<IconGroupContainer>
				<Icon title="Amazon Web Service" href="https://aws.amazon.com/" onClick={handleIconClick}>
					<i className="devicon-amazonwebservices-original"></i>
				</Icon>
				<Icon title="Bootstrap" href="https://getbootstrap.com/" onClick={handleIconClick}>
					<i className="devicon-bootstrap-plain"></i>
				</Icon>
				<Icon title="C" href="https://www.codecademy.com/resources/docs/c" onClick={handleIconClick}>
					<i className="devicon-c-plain"></i>
				</Icon>
				<Icon title="CSS3" href="https://developer.mozilla.org/en-US/docs/Web/CSS" onClick={handleIconClick}>
					<i className="devicon-css3-plain"></i>
				</Icon>
				<Icon title="Docker" href="https://docs.docker.com/" onClick={handleIconClick}>
					<i className="devicon-docker-plain"></i>
				</Icon>
			</IconGroupContainer>
			
			{/* Figma, Git, Github, GraphQL, Heroku */}
			<IconGroupContainer>
				<Icon title="Figma" href="https://www.figma.com" onClick={handleIconClick}>
					<i className="devicon-figma-plain"></i>
				</Icon>
				<Icon title="Git" href="https://git-scm.com/docs" onClick={handleIconClick}>
					<i className="devicon-git-plain"></i>
				</Icon>
				<Icon title="Github" href="https://github.com" onClick={handleIconClick}>
					<i className="devicon-github-plain"></i>
				</Icon>
				<Icon title="GraphQL" href="https://graphql.org" onClick={handleIconClick}>
					<i className="devicon-graphql-plain"></i>
				</Icon>
				<Icon title="Heroku" href="https://www.heroku.com" onClick={handleIconClick}>
					<i className="devicon-heroku-plain"></i>
				</Icon>
			</IconGroupContainer>
			
			{/* HTML5, Java, Javascript, Jira, Linux */}
			<IconGroupContainer>
				<Icon title="HTML5" href="https://developer.mozilla.org/en-US/docs/Web/HTML" onClick={handleIconClick}>
					<i className="devicon-html5-plain"></i>
				</Icon>
				<Icon title="Java" href="https://docs.oracle.com/en/java/" onClick={handleIconClick}>
					<i className="devicon-java-plain"></i>
				</Icon>
				<Icon title="Javascript" href="https://developer.mozilla.org/en-US/docs/Web/javascript" onClick={handleIconClick}>
					<i className="devicon-javascript-plain"></i>
				</Icon>
				<Icon title="Jira" href="https://www.atlassian.com/software/jira" onClick={handleIconClick}>
					<i className="devicon-jira-plain"></i>
				</Icon>
				<Icon title="Linux" href="https://www.linux.org/" onClick={handleIconClick}>
					<i className="devicon-linux-plain"></i>
				</Icon>
			</IconGroupContainer>
			
			
			{/* MDB, MongoDB, MySQL, NodeJs, Python */}
			<IconGroupContainer>
				<Icon title="Material Design Bootstrap" href="https://mdbootstrap.com" onClick={handleIconClick}>
					<i className="devicon-materialui-plain"></i>
				</Icon>
				<Icon title="MongoDB" href="https://www.mongodb.com" onClick={handleIconClick}>
					<i className="devicon-mongodb-plain"></i>
				</Icon>
				<Icon title="MySQL" href="https://www.mysql.com" onClick={handleIconClick}>
					<i className="devicon-mysql-plain"></i>
				</Icon>
				<Icon title="NodeJs" href="https://nodejs.org" onClick={handleIconClick}>
					<i className="devicon-nodejs-plain"></i>
				</Icon>
				<Icon title="Python" href="https://www.python.org" onClick={handleIconClick}>
					<i className="devicon-python-plain"></i>
				</Icon>
			</IconGroupContainer>
			
			{/* React, Redis, Redux, ThreeJs, Windows */}
			<IconGroupContainer>
				<Icon title="React" href="https://reactjs.org" onClick={handleIconClick}>
					<i className="devicon-react-plain"></i>
				</Icon>
				<Icon title="Redis" href="https://redis.io" onClick={handleIconClick}>
					<i className="devicon-redis-plain"></i>
				</Icon>
				<Icon title="Redux" href="https://redux.js.org" onClick={handleIconClick}>
					<i className="devicon-redux-plain"></i>
				</Icon>
				<Icon title="ThreeJs" href="https://threejs.org" onClick={handleIconClick}>
					<i className="devicon-threejs-original"></i>
				</Icon>
				<Icon title="Windows" href="https://www.microsoft.com/en-us/windows" onClick={handleIconClick}>
					<i className="devicon-windows8-plain"></i>
				</Icon>
			</IconGroupContainer>

		</SkillsIconsContainer>
  );
}