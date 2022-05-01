import React from 'react'
import { nanoid } from 'nanoid'

import { Navigation, NavLink } from './Navigation.styles'

const navLinks = [
	'Game Pass',
	'Games',
	'Devices',
	'Play',
	'Community',
	'Support',
	'My xbox',
	'Developers',
]

const Index = ({ Parent }) => {
	return (
		<Parent>
			{navLinks.map((link) => (
				<NavLink key={nanoid()} href='/'>
					{link}
				</NavLink>
			))}
		</Parent>
	)
}

export default Index
