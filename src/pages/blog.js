// ##########################################
// #        Import External Components      #
// ##########################################
import styled from '@emotion/styled/macro';
import { useQuery } from 'react-query';

// ##########################################
// #        Import Local Components         #
// ##########################################
import Header from '../components/header';
import Cover from '../components/cover';
import Footer from '../components/footer';
import Post from '../components/post';

// ##########################################
// #              Dev API Key               #
// ##########################################
const DEV_API_KEY = process.env.REACT_APP_DEV_API_KEY;
const DEV_USER_ID = process.env.REACT_APP_DEV_USER_ID;

// ##########################################
// #       Component Specific Styling       #
// ##########################################
const PageContainer = styled.div`

`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-areas: "Title" "Posts";
	grid-template-columns: auto;
  margin-top: 45px;
  margin-bottom: 45px;
  @media (max-width: 991px) {
    margin-top: 45px;
    margin-bottom: 45px;
    margin-left: 30px;
    margin-right: 30px;
	}
`;

const HeaderContainer = styled.div`
  grid-area: Header;
  margin-bottom: 45px;
  @media (max-width: 991px) {
    margin-bottom: 25px;
	}
`;

const TitleContainer = styled.div`
  grid-area: Title;
  margin-bottom: 45px;
  width: 40%;
  justify-self: center;
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

const PostsContainer = styled.div`
  grid-area: Posts;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 50px;
  margin-left: 50px;
  margin-right: 50px;
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    margin-left: 0px;
    margin-right: 0px;
    grid-gap: 25px;
	}
`;

const FooterContainer = styled.div`
  margin-top: 55px;
  @media (max-width: 991px) {
    margin-top: 0px;
	}
`;

// ##########################################
// #             Blog Component             #
// ##########################################
export default function Blog() {
  
  //const blogUrl = 'https://dev.to/api/articles/me/published';
  const blogUrl = `https://dev.to/api/articles?username=${DEV_USER_ID}&state=all`;
  
  const fetchBlogData = async () => {
    const res = await fetch(blogUrl, {
      method: 'GET',
    })
    return res.json();
  }

  const { isLoading, isError, data } = useQuery('blogData', () => fetchBlogData());
  
  return (
    <PageContainer>
      <Header />
      
      <HeaderContainer>
        <Cover
          title="Jaiden Hodson"
          subtext={["Full Stack", "Software Developer"]}
        />
      </HeaderContainer>
      
      <ContentContainer>
      
        <TitleContainer>
          <Title>My Blog</Title>
        </TitleContainer>
      
        <PostsContainer>
      
          {isLoading ? (
              <p>Fetching data...</p>
            ) : isError ? (
              <p>An error occured while fetching blog data</p>
            ) : (
        
            data.map((post, postIdx) => {
              
              const options = { year: 'numeric', month: 'long', day: 'numeric' };
              const published = new Date(post.published_at).toLocaleDateString(undefined, options);
            
              return (
                <Post
                  key={post.title}
                  title={post.title}
                  description={post.description}
                  tags={post.tag_list}
                  publicationDate={published}
                  cover={post.cover_image}
                  slug={post.slug}
                />
              );
              
            })
            
          )}
        
        </PostsContainer>
        
      </ContentContainer>
      
      <FooterContainer>
        <Footer />
      </FooterContainer>
      
    </PageContainer>
  );
}