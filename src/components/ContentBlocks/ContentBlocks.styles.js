import styled, { css } from 'styled-components'

import { breakPoints } from 'media/../globalVars'

export const ContentBLocksContainer = styled.section`
	display: grid;
	grid-template-columns: 1fr;
	margin-bottom: 0.5rem;

	${breakPoints.lg} {
		grid-template-columns: 1fr 1fr;
		grid-gap: 0.5rem;
	}
`

export const ContentBlockColumn = styled.div`
	cursor: pointer;
	color: #fff;
	display: grid;

	& div {
		margin-top: 0.5rem;
	}
`

export const SmallBlock = styled.div`
	background-color: var(--xbox-green);
	${breakPoints.lg} {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
`

export const BlockImg = styled.picture`
	& img {
		display: block;
		width: 100%;
		height: auto;

		${breakPoints.lg} {
			height: 100%;
		}
	}
`

export const BlockTitle = styled.h2`
	font-size: 2.6rem;
	margin-top: 1rem;
	color: inherit;
`

export const BlockSubtitle = styled.p`
	font-size: 1.8rem;
	line-height: 1.5;
	padding: 2.4rem 0 0.4rem;
	margin-bottom: 1rem;
	color: inherit;
`

export const CtaButton = styled.a`
	padding: 1rem 0.3rem 0.7rem 0;
	margin-top: 1.6rem;
	font-size: 1.5rem;
	font-weight: 900;
	color: inherit;
	display: inline-block;
	transition: all 0.3s ease-in-out;
`

export const BlockDescription = styled.div`
	padding: 4rem 3vw;
	color: ${(props) => (props.dark ? 'black' : 'white')};
	align-self: center;

	${CtaButton}:hover {
		color: ${(props) => (props.dark ? 'black' : 'var(--light-green)')};
		text-decoration: underline;
	}
`

export const HorizontalBlock = styled.section`
	position: relative;
`

export const HorizontalBlockDescription = styled(BlockDescription)`
	color: #000;

	${breakPoints.lg} {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}
`

export const StarWarsDescription = styled(HorizontalBlockDescription)`
	padding: 4rem;

	${BlockTitle} {
		font-size: 5rem;

		${breakPoints.xl} {
			font-size: 8.5rem;
			line-height: 1;
		}
	}

	${BlockSubtitle} {
		font-size: 3rem;
		line-height: 1.4;
	}

	${breakPoints.lg} {
		right: auto;
		left: 5%;
		max-width: 60rem;
	}
`

const commonBigTextStyle = css`
	${breakPoints.sm} {
		${CtaButton} {
			font-size: 2rem;
		}

		${BlockTitle} {
			font-size: 3.6rem;
		}

		${BlockSubtitle} {
			font-size: 2.5rem;
		}
	}
`

export const BigBlock = styled.div`
	position: relative;

	${BlockDescription} {
		position: absolute;
		bottom: 0;
		background: transparent;
		width: 100%;
	}

	${commonBigTextStyle}
`

export const GearShopDescription = styled(HorizontalBlockDescription)`
	${breakPoints.lg} {
		padding-right: 0;
		max-width: 40rem;
		right: 5%;
	}

	${breakPoints.xl} {
		right: 10%;
		max-width: 50rem;
	}

	${commonBigTextStyle}
`
