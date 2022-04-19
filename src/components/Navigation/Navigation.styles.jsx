import styled from 'styled-components'

export const Navigation = styled.nav`
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 100%;
	left: 0;
	background-color: #fafafa;
	z-index: 1;
	width: 100%;
`

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
