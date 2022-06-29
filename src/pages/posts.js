// ##########################################
// #        Import External Components      #
// ##########################################
import styled from '@emotion/styled/macro';
import {  Button } from 'react-bootstrap'
import { FaCaretRight } from 'react-icons/fa';
import { useQuery } from 'react-query';
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';

// ##########################################
// #        Import Local Components         #
// ##########################################
import Header from '../components/header';
import TitleBadge from '../components/titleBadge';
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
  width: fit-content;
  padding: 10px;
  text-align: start;
  margin-right: auto;
  margin-left: 5%;
`;

const Code = styled.code`
  
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
export default function Posts(props) {
  
  const postPathTitle = useParams().path;
  
  const postUrl = `https://dev.to/api/articles/${DEV_USER_ID}/${postPathTitle}`;

  const { isLoading, data } = useQuery('postData', () =>
    fetch(postUrl, {
      method: 'GET',
    }).then(res =>
      res.json()
    )
  );
  
  console.log(data);
  
  return (
    <PageContainer>
      <Header />
      
      <HeaderContainer>
        <TitleBadge
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

              <MarkdownContainer>
                <ReactMarkdown
                  components={{
                    h3: Subtitle,
                    p: Text,
                    img: Image,
                    pre: CodeContainer,
                    code: Code
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