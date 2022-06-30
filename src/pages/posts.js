// ##########################################
// #        Import External Components      #
// ##########################################
import { useState, useEffect } from 'react';
import styled from '@emotion/styled/macro';
import {  Button } from 'react-bootstrap'
import { FaCaretRight } from 'react-icons/fa';
import { useQuery } from 'react-query';
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import { FaHeart } from 'react-icons/fa';

// ##########################################
// #        Import Local Components         #
// ##########################################
import Header from '../components/header';
import Cover from '../components/cover';
import Footer from '../components/footer';

// ##########################################
// #               Dev User ID              #
// ##########################################
const DEV_USER_ID = process.env.REACT_APP_DEV_USER_ID;

// ##########################################
// #       Component Specific Styling       #
// ##########################################
const PageContainer = styled.div`

`;

const HeaderContainer = styled.div`
  grid-area: Header;
  margin-bottom: 45px;
  @media (max-width: 991px) {
    margin-bottom: 25px;
	}
`;

const ContentContainer = styled.div`
  text-align: -webkit-center;
`;

const TitleContainer = styled.div`
  margin-bottom: 45px;
  width: fit-content;
  background: #00000035;
  padding: 30px;
  border-radius: 40px;
  @media (max-width: 991px) {
    margin-bottom: 25px;
	}
`;

const Title = styled.h2`
  color: white;
  font-size: 3.5vw;
  text-align: center;
`;

const CoverImage = styled.img`
	width: 100%;
  padding: 30px;
  border-radius: 35px;
  margin-bottom: 10px;
`;

const PostInfoContainer = styled.div`
  display: grid;
  grid-template-areas: "Profile NameDate Tags Reactions";
	grid-template-columns: min-content min-content auto;
  margin-bottom: 30px;
  margin-right: 5%;
  margin-left: 5%;
  @media (max-width: 991px) {
    grid-template-areas: "Profile NameDate Reactions" "Tags Tags Tags";
    grid-template-columns: min-content min-content auto;
	}
`;

const ProfileImage = styled.img`
  grid-area: Profile;
  border-radius: 40px;
  margin-right: 0.8rem;
  width: 4.5rem;
  align-self: center;
`;

const NameDateContainer = styled.div`
  grid-area: NameDate;
  width: max-content;
  align-self: center;
`;

const Name = styled.p`
  margin-bottom: 0;
`;

const PublishedDate = styled.p`
  margin-bottom: 0;
  font-size: 0.875rem;
  color: #c5b5b5;
`;

const TagsContainer = styled.div`
	grid-area: Tags;
  align-self: center;
  margin-left: 1rem;
	@media (max-width: 991px) {
    margin-left: 0px;
    margin-top: 1rem;
	}
`;

const Tag = styled.p`
	display: inline-block;
	color: white;
	background-color: #111a21;
	padding: 10px;
	border-radius: 10px;
	font-size: 1rem;
	margin-bottom: 5px;
	margin-right: 5px;
	&:before {
		content: "#";
	}
	@media (max-width: 991px) {
		font-size: 0.8rem;
	}
`;

const ReactionContainer = styled.div`
  grid-area: Reactions;
  display: flex;
  justify-self: end;
  height: fit-content;
  align-items: center;
  align-self: center;
`;

const ReactionCount = styled.p`
  color: #c5b5b5;
	margin-bottom: 0px;
  margin-right: 0.6rem;
`;

const ReactionIcon = styled(FaHeart)`
  color: red;
`;

const BodyContainer = styled.div`
  color: white;
  text-align: start;
  margin-left: 50px;
  margin-right: 50px;
  background: #00000035;
  padding: 30px;
  border-radius: 40px;
`;

const MarkdownContainer = styled.div`
  text-align: -webkit-center;
`;

const Subtitle = styled.h3`
  margin-top: 60px;
  text-align: start;
  width: 90%;
`;

const Text = styled.p`
  width: 90%;
  text-align: start;
`;


const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const CodeContainer = styled.pre`
  background-color: #111a21;
  width: 90%;
  padding: 10px;
  text-align: start;
`;

const Code = styled.code`
  
`;

const Embed = styled.iframe`
  width: 90%;
  height: 30vw;
`;

const FooterContainer = styled.div`
  margin-top: 55px;
  @media (max-width: 991px) {
    margin-top: 45px;
	}
`;

// ##########################################
// #             Posts Component            #
// ##########################################
export default function Posts() {
  
  const postPathTitle = useParams().path;
  const postUrl = `https://dev.to/api/articles/${DEV_USER_ID}/${postPathTitle}`;
  const [ published, setPublished ] = useState('');

  const { isLoading, data } = useQuery('postData', () =>
    fetch(postUrl, {
      method: 'GET',
    }).then(res =>
      res.json()
    )
  );
  
  useEffect(() => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    
    if (data) {
      setPublished(new Date(data.published_at).toLocaleDateString(undefined, options));
    }
  }, [data]);
  
  return (
    <PageContainer>
      <Header />
      
      <HeaderContainer>
        <Cover
          title="Jaiden Hodson"
          subtext={["Full Stack", "Software Developer"]}
        />
      </HeaderContainer>
      
        {isLoading ? ( <p>Fetching data...</p> ) : (
          
          <ContentContainer>
          
            <TitleContainer>
              <Title>{data.title}</Title>
            </TitleContainer>
            
            <BodyContainer>
            
              <CoverImage src={data.cover_image} />
              
              <PostInfoContainer>
                <ProfileImage src={data.user.profile_image_90} />
                
                <NameDateContainer>
                  <Name>{data.user.name}</Name>
                  <PublishedDate>{published}</PublishedDate>
                </NameDateContainer>
                
                <TagsContainer>
                  {data.tags.map((tag, tagIdx) =>
                    <Tag key={tag}>{tag}</Tag>
                  )}
                </TagsContainer>
                
                <ReactionContainer>
                  <ReactionCount>{data.public_reactions_count}</ReactionCount>
                  <ReactionIcon />
                </ReactionContainer>
                
              </PostInfoContainer>
              
              <MarkdownContainer>
                <ReactMarkdown
                  components={{
                    h3: Subtitle,
                    img: Image,
                    pre: CodeContainer,
                    code: Code,
                    p: ({ children }) => {
                      if (children[0].startsWith('{% embed')) {
                          const embedLink = children[0].split(' ')[2];
                          return (
                            <Embed src={embedLink} />
                          );
                      }
                      // Return default child if it's not an embed
                      return <Text>{children}</Text>;
                  }
                  }}
                >
                  {data.body_markdown.split('---')[2]}
                </ReactMarkdown>
              </MarkdownContainer>

            </BodyContainer>
          
          </ContentContainer>
          
        )}
      
      <FooterContainer>
        <Footer />
      </FooterContainer>
      
    </PageContainer>
  );
}