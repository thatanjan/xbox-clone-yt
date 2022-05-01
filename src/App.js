import Header from 'components/Header/Header'
import Hero from 'components/Hero/Hero'
import ContentBLocks from 'components/ContentBlocks/ContentBlocks'
import Icons from 'components/Icons/Icons'
import Footer from 'components/Footer/Footer'
import SocialMedia from 'components/SocialMedia/SocialMedia'

function App() {
	return (
		<>
			<Header />
			<Hero />
			<Icons />

			<ContentBLocks />

			<SocialMedia />
			<Footer />
		</>
	)
}

export default App
