import React from 'react'

import { YellowTag, GreenBtn } from 'components/CommonComponents.styles'

import { imageBreakPoint } from 'media/../globalVars'

import {
	ContentBLocksContainer,
	ContentBlockColumn,
	BigBlock,
	BlockImg,
	SmallBlock,
	BlockDescription,
	BlockTitle,
	BlockSubtitle,
	CtaButton,
	HorizontalBlockDescription,
	HorizontalBlock,
	StarWarsDescription,
	GearShopDescription,
} from './ContentBlocks.styles'

import star_wars from 'media/other_section/star_wars.jpg'
import star_wars_big from 'media/other_section/star_wars_big.jpg'

import gearShop from 'media/other_section/gear_shop.jpg'
import gearShopBig from 'media/other_section/gear_shop_big.jpg'

import { firstBlockData, secondBlockData } from './blockData'

const pattern = [BigBlock, SmallBlock, SmallBlock, BigBlock]

export const StarWarsBlock = () => {
	return (
		<HorizontalBlock>
			<BlockImg>
				<source media={imageBreakPoint} srcSet={star_wars_big} />
				<img src={star_wars} alt='' />
			</BlockImg>

			<StarWarsDescription dark>
				<BlockTitle>SIMPLY NEXT GEN</BlockTitle>
				<BlockSubtitle>
					Experience next gen with LEGO® Star Wars™: the Skywalker Saga with Xbox
					Series S.
				</BlockSubtitle>

				<GreenBtn>Learn More</GreenBtn>
			</StarWarsDescription>
		</HorizontalBlock>
	)
}

export const GearShopBlock = () => (
	<HorizontalBlock>
		<BlockImg>
			<source media={imageBreakPoint} srcSet={gearShopBig} />
			<img src={gearShop} alt='' />
		</BlockImg>

		<GearShopDescription dark>
			<BlockTitle>SIMPLY NEXT GEN</BlockTitle>
			<BlockSubtitle>
				Experience next gen with LEGO® Star Wars™: the Skywalker Saga with Xbox
				Series S.
			</BlockSubtitle>

			<GreenBtn>Learn More</GreenBtn>
		</GearShopDescription>
	</HorizontalBlock>
)
