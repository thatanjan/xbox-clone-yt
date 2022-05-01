import styled from 'styled-components'

import { breakPoints } from 'globalVars'

export const NavLink = styled.a`
	padding: 1.4rem 2.4rem 1.5rem 1.5rem;
	font-size: 1.5rem;
	border: 0.1rem solid rgba(224, 222, 222, 0.529);
	text-transform: capitalize;
	color: #000;

	&:hover {
		text-decoration: underline;
	}
`

export const HamburgerNavigation = styled.nav`
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 100%;
	left: 0;
	background-color: #fafafa;
	z-index: 5;
	width: 100%;
`

export const NavigationOnBigScreen = styled(HamburgerNavigation)`
	display: none;

	${NavLink} {
		border: none;
	}

	${breakPoints.lg} {
		position: static;
		display: flex;
		flex-direction: row;
		padding-left: 3rem;
		flex-grow: 1;
	}
`
