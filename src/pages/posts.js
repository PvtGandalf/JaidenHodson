// ##########################################
// #        Import External Components      #
// ##########################################
import styled from '@emotion/styled/macro';
import {  Button } from 'react-bootstrap'
import { FaCaretRight } from 'react-icons/fa';
import { useQuery } from 'react-query';
import { useParams } from "react-router-dom";
import parse, { domToReact, htmlToDOM } from 'html-react-parser';

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
  width: 40%;
  background: #00000035;
  padding: 30px;
  border-radius: 40px;
  @media (max-width: 991px) {
    margin-bottom: 25px;
    width: 100%;
	}
`;

const Title = styled.h2`
  color: white;
  font-size: 3.5vw;
  text-align: center;
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
  
  const options = {
    replace: ({ attribs, children }) => {
      if (!attribs) {
        return;
      }

      if (attribs.id === 'p') {
        return <h1 style={{ fontSize: 42 }}>{domToReact(children, options)}</h1>;
      }

      if (attribs.class === 'prettify') {
        return (
          <span style={{ color: 'hotpink' }}>
            {domToReact(children, options)}
          </span>
        );
      }
    }
  };
  
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
              {parse(data.body_html)}
            </BodyContainer>
          
          </ContentContainer>
          
        )}
      
      <FooterContainer>
        <Footer />
      </FooterContainer>
      
    </PageContainer>
  );
}