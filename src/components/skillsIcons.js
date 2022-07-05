// ##########################################
// #        Import External Components      #
// ##########################################
import styled from '@emotion/styled/macro';
import { keyframes } from '@emotion/react';

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
const IconGroupContainer = styled.div`
  text-align: center;
`;

const Icon = styled.a`
  font-size: 3vw;
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
	@media (max-width: 991px) {
    margin: 1.25%;
	}
`;

const IconText = styled.p`
  font-size: 0.95vw;
  color: white;
`;

const SkillsIconsContainer = styled.div`
  grid-area: Skills;
  justify-self: center;
`;

// ##########################################
// #         SkillsIcons Component          #
// ##########################################
export default function SkillsIcons() {
	
  return (
		<SkillsIconsContainer>
			<IconGroupContainer>
				{IconLibrary.main.skills.map((skill, idx) =>
					<Icon key={skill.skill_name} title={skill.skill_name} href={skill.skill_reference} target="_blank">
						<i className={skill.skill_icon_name}></i>
						<IconText>{skill.skill_name}</IconText>
					</Icon>
				)}
			</IconGroupContainer>
		</SkillsIconsContainer>
  );
}