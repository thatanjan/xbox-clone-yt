import styled from 'styled-components'

import { breakPoints } from 'globalVars'

export const HeroSection = styled.section`
	position: relative;
	width: 100%;
`

export const HeroBgImg = styled.picture`
	& > img {
		width: 100%;
		height: auto;
		object-fit: cover;
		object-position: top center;
		max-height: 120rem;
	}
`

export const HeroContentTitle = styled.h2`
	font-size: 4rem;
	line-height: 1.3;
	font-weight: bold;
	padding: 1rem 0;

	${breakPoints.md} {
		font-size: 5rem;
	}

	${breakPoints.lg} {
		font-size: 3.5rem;
	}
`

export const HeroContentSubtitle = styled.h4`
	font-size: 2.5rem;
	font-weight: 400;
	line-height: 1.4;
	padding: 1rem 0;

	${breakPoints.md} {
		font-size: 3rem;
	}

	${breakPoints.lg} {
		font-size: 2.5rem;
	}
`

export const HeroContent = styled.div`
	position: absolute;
	bottom: 20%;
	left: 50%;
	transform: translateX(-50%);
	text-align: center;
	width: 80%;
	z-index: 10;
	color: white;

	${breakPoints.md} {
		bottom: 10%;
	}

	${breakPoints.lg} {
		width: 40%;
		bottom: auto;
		top: 50%;
		transform: translate(0, -50%);
		text-align: left;
		left: ${(props) => (props.leftSide ? '10%' : '60%')};
	}
`
