import styled from 'styled-components'

import { breakPoints } from 'globalVars'

export const Footer = styled.footer`
	padding: 0 2rem;
	background: #f2f2f2;
	padding-bottom: 5rem;

	${breakPoints.lg} {
		padding-left: 10rem;
	}
`

export const FooterLink = styled.a`
	margin-right: 3rem;
	color: #616161;
	font-size: 1.1rem;
	line-height: 1.6rem;
	padding-top: 0.6rem;
	text-transform: capitalize;

	&:hover {
		text-decoration: underline;
	}
`

export const FooterLegalLinks = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-top: 2rem;
`

export const FooterLinksContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`

export const FooterColumn = styled.div`
	color: #616161;
	display: flex;
	flex-direction: column;
	text-transform: capitalize;
	font-size: 1.5rem;
	flex-basis: 30rem;

	${FooterLink} {
		display: block;
		margin-bottom: 1.5rem;
	}
`

export const FooterColumnTitle = styled.h4`
	font-weight: bold;
	padding-top: 3rem;
`
