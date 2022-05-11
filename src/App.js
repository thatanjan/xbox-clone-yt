import React from 'react'

import Header from 'components/Header/Header'
import Hero from 'components/Hero/Hero'
import Icons from 'components/Icons/Icons'
import ContentBlocks from 'components/ContentBlocks/ContentBlocks'
import Footer from 'components/Footer/Footer'
import SocialMedia from 'components/SocialMedia/SocialMedia'

const App = () => {
	return (
		<>
			<Header />
			<Hero />
			<Icons />
			<ContentBlocks />
			<SocialMedia />
			<Footer />
		</>
	)
}

export default App
