import styled from 'styled-components'

import msLogo from 'media/icons/microsoft_logo.png'
import xboxLogo from 'media/icons/xbox_20.png'

import searchIcon from 'media/icons/search.png'
import hamburgerIcon from 'media/icons/hamburger.png'
import cartIcon from 'media/icons/cart.png'
import accountIcon from 'media/icons/account.svg'
import closeIcon from 'media/icons/close.png'

import { breakPoints } from 'globalVars'

export const HeaderContainer = styled.header`
	height: 6rem;
	background-color: #fafafa;
	display: flex;
	align-items: center;
	position: relative;

	${breakPoints.xl} {
		padding: 0 10rem;
	}
`

export const HeaderBaseIcon = styled.img`
	height: 2.5rem;
	width: 2.5rem;
	cursor: pointer;
	margin-right: 2rem;
`

export const HamburgerIcon = styled(HeaderBaseIcon).attrs((props) => ({
	src: props.open ? closeIcon : hamburgerIcon,
}))`
	object-fit: cover;
	margin-left: 1rem;
	opacity: 0.6;

	${breakPoints.lg} {
		display: none;
	}
`

export const MsLogoContainer = styled.div`
	flex-grow: 1;
	display: flex;
	justify-content: center;

	${breakPoints.lg} {
		display: block;
		flex-grow: 0;
		margin: 0 2rem;
	}
`

export const MsLogo = styled.img.attrs({
	src: msLogo,
})`
	width: 10rem;
	height: auto;
`

export const XboxLogo = styled.img.attrs({
	src: xboxLogo,
})`
	width: 7.5rem;
	height: auto;
`

export const SearchIcon = styled(HeaderBaseIcon).attrs({
	src: searchIcon,
})`
	transform: scaleX(-1);
`

export const CartIcon = styled(HeaderBaseIcon).attrs({ src: cartIcon })``

export const AccountIcon = styled(HeaderBaseIcon).attrs({ src: accountIcon })``
