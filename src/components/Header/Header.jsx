import React, { useState } from 'react'

import Navigation from 'components/Navigation/Navigation'

import {
	HamburgerNavigation,
	NavigationOnBigScreen,
} from 'components/Navigation/Navigation.styles'

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

const NavigationContainer = () => {
	const [open, setOpen] = useState(false)
	return (
		<>
			<HamburgerIcon open={open} onClick={() => setOpen((prev) => !prev)} />

			{open && <Navigation Parent={HamburgerNavigation} />}
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
