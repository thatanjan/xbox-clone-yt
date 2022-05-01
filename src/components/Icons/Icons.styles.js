import styled from 'styled-components'

export const IconsContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
	width: 90%;
	margin: 0 auto;
	justify-items: center;
	grid-row-gap: 3rem;
	padding: 3rem 0;
	max-width: 90rem;
`

export const IconLink = styled.a`
	display: grid;
	justify-items: center;
	width: 10rem;

	&:hover {
		cursor: pointer;
	}

	&:hover p {
		border-color: var(--xbox-green);
	}
`

export const IconText = styled.p`
	border-bottom: 0.7rem solid transparent;
	display: inline-block;
	text-align: center;
	text-transform: uppercase;
	font-size: 1.5rem;
	font-weight: bold;
	color: var(--xbox-green);
	padding: 0.5rem 0;
	transition: 0.3s ease-in-out;
`
