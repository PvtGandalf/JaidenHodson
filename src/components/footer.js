// ##########################################
// #        Import External Components      #
// ##########################################
import styled from '@emotion/styled/macro';

// ##########################################
// #        Import Local Components         #
// ##########################################


// ##########################################
// #       Component Specific Styling       #
// ##########################################
const StyledFooter = styled.div`
  position: relative;
	bottom: 0;
  width: 100%;
  text-align: center;
  background-color: #00000075;
`;

// ##########################################
// #            Footer Component            #
// ##########################################
export default function Footer() {
  return (
    <StyledFooter>
      Footer here
    </StyledFooter>
  );
}