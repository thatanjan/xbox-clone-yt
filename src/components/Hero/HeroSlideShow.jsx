import React from 'react'
import { nanoid } from 'nanoid'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'

import 'swiper/css'

import {
	HeroBgImage,
	HeroSection,
	HeroContent,
	HeroContentTitle,
	HeroContentSubtitle,
} from './Hero.styles'
import { GreenBtn, YellowTag } from 'components/CommonComponents.styles'

import { imageBreakPoint } from 'media/../globalVars'

import tiny_tina from 'media/hero_section/small/tiny_tina.jpg'
import tiny_tina_big from 'media/hero_section/big/tiny_tina_big.jpg'

import sea from 'media/hero_section/small/sea.jpg'
import sea_big from 'media/hero_section/big/sea_big.jpg'

import xbox from 'media/hero_section/small/xbox.jpg'
import xbox_big from 'media/hero_section/big/xbox_big.jpg'

SwiperCore.use([Autoplay, Navigation, Pagination])

const slideShowData = [
	{
		title: 'Xbox & Bethesda Games Showcase 2022',
		subtitle: 'Streaming live on Sunday, June 12, 2022.',
		images: {
			small: xbox,
			big: xbox_big,
		},
		buttonText: 'learn more',
		onLeftSide: true,
	},
	{
		yellowTag: '',
		title: 'Tiny Tina’s Wonderlands ',
		subtitle: 'Whimsy, wonder, and high-powered weaponry',
		images: {
			small: tiny_tina,
			big: tiny_tina_big,
		},
		buttonText: 'Get it Now',
	},

	{
		yellowTag: 'console . pc . cloud',
		title: 'Sea of Thieves',
		subtitle: 'Play with PC Game Pass or Ultimate',
		images: {
			small: sea,
			big: sea_big,
		},
		buttonText: 'Get it Now',
	},
]

const HeroSlideShow = () => {
	return (
		<Swiper loop pagination={{ clickable: true }} navigation>
			{slideShowData.map((data) => {
				const { yellowTag, title, subtitle, images, buttonText, onLeftSide } = data
				const { small, big } = images

				return (
					<SwiperSlide key={nanoid()}>
						<HeroBgImage>
							<source media={imageBreakPoint} srcSet={big} />
							<img src={small} alt='' />
						</HeroBgImage>
						<HeroContent onLeftSide={onLeftSide}>
							<YellowTag>{yellowTag}</YellowTag>
							<HeroContentTitle>{title}</HeroContentTitle>
							<HeroContentSubtitle>{subtitle}</HeroContentSubtitle>

							<GreenBtn>{buttonText || ''}</GreenBtn>
						</HeroContent>
					</SwiperSlide>
				)
			})}
		</Swiper>
	)
}

export default HeroSlideShow
