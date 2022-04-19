import React, { useState } from 'react'

import {
	HeaderContainer,
	HamburgerIcon,
	MsLogoContainer,
	MsLogo,
	SearchIcon,
	CartIcon,
	AccountIcon,
} from './Header.styles'

import Navigation from 'components/Navigation/Navigation'

const NavigationContainer = () => {
	const [open, setOpen] = useState(false)

	return (
		<>
			<HamburgerIcon open={open} onClick={() => setOpen((prev) => !prev)} />

			{open && <Navigation onClose={() => setOpen(false)} />}
		</>
	)
}

const Header = () => {
	return (
		<HeaderContainer>
			<NavigationContainer />

			<MsLogoContainer>
				<MsLogo />
			</MsLogoContainer>

			<SearchIcon />

			<CartIcon />

			<AccountIcon />
		</HeaderContainer>
	)
}

export default Header
