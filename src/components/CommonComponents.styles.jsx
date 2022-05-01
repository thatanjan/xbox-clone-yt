import styled from 'styled-components'

export const GreenBtn = styled.a.attrs({
	className: 'green__btn',
})`
	font-size: 1.7rem;
	display: inline-block;
	text-transform: uppercase;
	font-weight: bold;
	padding: 0.5rem 2rem 0.5rem 2.2rem;
	color: #054b16;
	font-weight: 800;
	background: #9bf00b;
	transition: all 0.3s ease-in-out;

	&:hover {
		background: #8bd80a;
		text-decoration: underline;
		cursor: pointer;
	}
`

export const YellowTag = styled.div`
	background: #ffd800;
	text-transform: uppercase;
	font-size: 1.4rem;
	display: inline-block;
	padding: 0 1rem;
	color: #000;
`
