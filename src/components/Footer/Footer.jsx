import React from 'react'

import {
	Footer,
	FooterLink,
	FooterLegalLinks,
	FooterLinksContainer,
	FooterColumn,
	FooterColumnTitle,
} from './Footer.styles'

const FooterComp = () => {
	return (
		<Footer>
			<FooterLinksContainer>
				<FooterColumn>
					<FooterColumnTitle>Browse</FooterColumnTitle>

					<FooterLink>xbox consoles </FooterLink>
					<FooterLink>xbox games</FooterLink>
					<FooterLink>xbox game pass</FooterLink>
					<FooterLink>xbox accessories</FooterLink>
				</FooterColumn>

				<FooterColumn>
					<FooterColumnTitle>Browse</FooterColumnTitle>

					<FooterLink>xbox consoles </FooterLink>
					<FooterLink>xbox games</FooterLink>
					<FooterLink>xbox game pass</FooterLink>
					<FooterLink>xbox accessories</FooterLink>
				</FooterColumn>
				<FooterColumn>
					<FooterColumnTitle>Browse</FooterColumnTitle>

					<FooterLink>xbox consoles </FooterLink>
					<FooterLink>xbox games</FooterLink>
					<FooterLink>xbox game pass</FooterLink>
					<FooterLink>xbox accessories</FooterLink>
				</FooterColumn>
			</FooterLinksContainer>

			<FooterLegalLinks>
				<FooterLink>Sitemap</FooterLink>
				<FooterLink>Contact Microsoft</FooterLink>
				<FooterLink>Privacy</FooterLink>
				<FooterLink>Terms of use</FooterLink>
				<FooterLink>Trademarks</FooterLink>
				<FooterLink>Third party notices</FooterLink>
				<FooterLink>Safety & eco</FooterLink>
				<FooterLink>About our ads</FooterLink>
				<FooterLink>© Microsoft 2022</FooterLink>
			</FooterLegalLinks>
		</Footer>
	)
}

export default FooterComp
