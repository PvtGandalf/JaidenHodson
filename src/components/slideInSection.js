// ##########################################
// #        Import External Components      #
// ##########################################
import { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled/macro';

// ##########################################
// #        Import Local Components         #
// ##########################################

// ##########################################
// #       Component Specific Styling       #
// ##########################################
const SlideInSectionContainer = styled.div`
	transform: ${props => props.visible ? 'translateX(0vw)' : 'translateX(80vw)'};
	transition: transform 1000ms ease-in-out;
`;

// ##########################################
// #            Player Component            #
// ##########################################
export default function SlideInSection(props) {
	
	const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  
	useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
				if (entry.isIntersecting) {
					setVisible(entry.isIntersecting);
				}
			});
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
	
	return (
		<SlideInSectionContainer
			visible={isVisible}
      ref={domRef}
    >
      {props.children}
		</SlideInSectionContainer>
  );
}