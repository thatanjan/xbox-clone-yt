import React from 'react'
import { nanoid } from 'nanoid'

import { NavLink } from './Navigation.styles'

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

const Navigation = ({ Parent }) => {
	return (
		<Parent>
			{navLinks.map((link) => (
				<NavLink key={nanoid()}>{link}</NavLink>
			))}
		</Parent>
	)
}

export default Navigation
