// ##########################################
// #        Import External Components      #
// ##########################################
import { useState } from 'react';
import styled from '@emotion/styled/macro';
import { Card, Button } from 'react-bootstrap'
import { FaCaretRight } from 'react-icons/fa';
import { useQueryClient, useQuery } from 'react-query';

// ##########################################
// #        Import Local Components         #
// ##########################################
import Header from '../components/header';
import Footer from '../components/footer';
import SlideInSection from '../components/slideInSection';

// ##########################################
// #       Component Specific Styling       #
// ##########################################
const PageContainer = styled.div`

`;

const HeadingContainer = styled.div`

`;

const ContentContainer = styled.div`
  color: white;
`;

const PostContainer = styled.div`
  color: white;
  background-color: black;
  text-align: center;
  margin: 25px;
  padding: 25px;
`;

// ##########################################
// #             Blog Component             #
// ##########################################
export default function Blog() {
  
  const userId = 'PvtGandalf';
  
  const blogUrl = 'https://dev.to/api/articles/me/published';
  
  const { isLoading, error, data } = useQuery('blogData', () =>
    fetch(blogUrl, { 
      method: 'GET',
      headers: {
        "api-key": "Jx6nv5hSBVaK5uXeEhzJpGEo"
      }
    }).then(res =>
      res.json()
    )
  );

  console.log(data);
  
  return (
    <PageContainer>
    
      <HeadingContainer>
        <Header />      
      </HeadingContainer>
      
      <ContentContainer>
      {/*
        {data.map((post, postIdx) =>
          <PostContainer>
            <p>{post.title}</p>
            <p>{post.description}</p>
            <p>{post.published_at}</p>
            {post.tag_list.map((tag, tagIdx) =>
              <p>{tag}</p>
            )}
          </PostContainer>
				)}
      */}
      </ContentContainer>
      
      <Footer />
      
    </PageContainer>
  );
}