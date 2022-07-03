// ##########################################
// #        Import External Components      #
// ##########################################
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled/macro';

// ##########################################
// #        Import Local Components         #
// ##########################################

// ##########################################
// #       Component Specific Styling       #
// ##########################################
const StyledNavbar = styled(Navbar)`
	text-align: center;
  padding: 30px;
	background-color: #00000075;
`;

const StyledNavbarBrand = styled(Navbar.Brand)`
	font-size: calc(1vw + 7px);
	display: flex;
`;

const StyledNavLink = styled(NavLink)`
	font-size: calc(0.5vw + 7px);
`;

const StyledImage = styled.img`
  filter: invert(100%);
  height: 7vw;
	&:hover {
		transform: scale(1.1);
		filter: invert(90%);
	}
`;

const StyledBrandText = styled.p`
  align-self: center;
	margin-bottom: 0;
	margin-left: 1.15vw;
	@media (max-width: 991px) {
    display: none;
	}
`;

// ##########################################
// #           Header Component             #
// ##########################################
export default function Header(props) {

	return (	
		<StyledNavbar expand="lg" variant="dark">
			<Container fluid>
				
				<StyledNavbarBrand href="../../home">
					<StyledImage src="PvtGandalf-Logo-[BG-Transparent].svg"/>
				</StyledNavbarBrand>
				
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<StyledNavLink to="../about" className="nav-link">About</StyledNavLink>
						<StyledNavLink to="../projects" className="nav-link">Projects</StyledNavLink>
						<StyledNavLink to="../blog" className="nav-link">Blog</StyledNavLink>
						<StyledNavLink to="../contact" className="nav-link">Contact</StyledNavLink>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</StyledNavbar>
	);
}