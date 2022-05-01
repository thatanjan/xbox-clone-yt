import React, { useState } from 'react'

import {
	HeaderContainer,
	HamburgerIcon,
	MsLogoContainer,
	MsLogo,
	XboxLogo,
	SearchIcon,
	CartIcon,
	AccountIcon,
} from './Header.styles'

import Navigation from 'components/Navigation/Navigation'

import {
	NavigationOnBigScreen,
	HamburgerNavigation,
} from 'components/Navigation/Navigation.styles'

const NavigationContainer = () => {
	const [open, setOpen] = useState(false)

	return (
		<>
			<HamburgerIcon open={open} onClick={() => setOpen((prev) => !prev)} />

			{open && (
				<Navigation Parent={HamburgerNavigation} onClose={() => setOpen(false)} />
			)}
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

			<XboxLogo />

			<Navigation Parent={NavigationOnBigScreen} />

			<SearchIcon />

			<CartIcon />

			<AccountIcon />
		</HeaderContainer>
	)
}

export default Header
