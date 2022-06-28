// ##########################################
// #        Import External Components      #
// ##########################################
import { useState } from 'react';
import styled from '@emotion/styled/macro';
import { Button } from 'react-bootstrap'

// ##########################################
// #        Import Local Components         #
// ##########################################

// ##########################################
// #       Component Specific Styling       #
// ##########################################
const PostContainer = styled.div`
	background: #00000035;
  padding: 30px;
  border-radius: 40px;
	display: grid;
	grid-template-areas: "Date Date" "Title Cover" "Description Cover"  "Bottom Bottom";
	grid-template-columns: auto;
	@media (max-width: 991px) {
		grid-template-areas: "Date" "Title" "Cover" "Description" "Bottom";
	}
`;

const Title = styled.h3`
	grid-area: Title;
  color: white;
  font-size: 3vw;
	margin: 0.35rem;
`;

const DescriptionContainer = styled.div`
	margin: 0.5rem;
	@media (max-width: 991px) {
		margin: 0.35rem;
	}
`;

const Description = styled.p`
	grid-area: Description;
  color: white;
  font-size: 2vw;
	margin-bottom: 0.5rem;
`;

const TagsContainer = styled.div`
	grid-area: Tags;
	@media (max-width: 991px) {

	}
`;

const Tag = styled.p`
	display: inline-block;
	color: white;
	background-color: #111a21;
	padding: 10px;
	border-radius: 10px;
	font-size: 2vw;
	margin-bottom: 5px;
	margin-right: 5px;
	&:before {
		content: "#";
	}
	@media (max-width: 991px) {
		
	}
`;

const DateContainer = styled.div`
	grid-area: Date;
	margin: 0.35rem;
`;

const Date = styled.p`
	color: white;
	width: fit-content;
	font-size: 2vw;
	margin: 0;
`;

const CoverImage = styled.img`
	grid-area: Cover;
	width: 100%;
	padding: 10px;
	border-radius: 35px;
	@media (max-width: 991px) {
		align-self: center;
	}
`;

const Bottom = styled.div`
	display: grid;
	grid-area: Bottom;
	grid-template-areas: "Tags Button";
	grid-template-columns: auto;
`;

const ButtonContainer = styled.div`
	grid-area: Button;
	align-self: end;
  justify-self: end;
`;

const StyledButton = styled(Button)`
	font-size: 1.5vw;
	margin-right: 20px;
	margin-bottom: 10px;
`;

// ##########################################
// #             Post Component             #
// ##########################################
export default function Post(props) {
	
  return (
	
		<PostContainer key={props.title}>
		
			<DateContainer>
				<Date>{props.publicationDate}</Date>
			</DateContainer>
		
			<Title>{props.title}</Title>
			
			<CoverImage src={props.cover} />
			
			<DescriptionContainer>
				<Description>
					{props.description}
				</Description>
			</DescriptionContainer>			
			
			<Bottom>
			
				<TagsContainer>
					{props.tags.map((tag, tagIdx) =>
						<Tag key={tag}>{tag}</Tag>
					)}
				</TagsContainer>
				
				<ButtonContainer>
					<StyledButton href={"./blog/posts/" + props.slug}>View Post ></StyledButton>
				</ButtonContainer>
			
			</Bottom>
			
		</PostContainer>

  );
}