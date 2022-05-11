import React from 'react'

import { YellowTag } from 'components/CommonComponents.styles'

import { imgBreakPoint } from 'globalVars'

import {
	ContentBlocksContainer,
	ContentBlockColumn,
	BigBlock,
	BlockImg,
	SmallBlock,
	BlockDescription,
	BlockTitle,
	BlockSubtitle,
	CtaButton,
} from './ContentBlocks.styles'

import { StarWarsBlock, GearShopBlock } from './HorizontalBlocks'

import { firstBlockData, secondBlockData } from './blockData'

const pattern = [BigBlock, SmallBlock, SmallBlock, BigBlock]

const SingleDescription = ({ dark, tag, title, subtitle, cta }) => (
	<BlockDescription dark={dark}>
		{tag && <YellowTag>{tag}</YellowTag>}

		<BlockTitle>{title}</BlockTitle>

		<BlockSubtitle>{subtitle}</BlockSubtitle>

		<CtaButton>{cta}</CtaButton>
	</BlockDescription>
)

const SingleBlock = ({ Parent, data: { bigImg, img, ...restOfData } }) => (
	<Parent>
		<BlockImg>
			{bigImg && <source media={imgBreakPoint} srcSet={bigImg} />}
			<img src={img} alt='' />
		</BlockImg>

		<SingleDescription {...restOfData} />
	</Parent>
)

const Blocks = ({ data }) => (
	<ContentBlocksContainer>
		<ContentBlockColumn>
			<SingleBlock data={data[0]} Parent={pattern[0]} />
			<SingleBlock data={data[1]} Parent={pattern[1]} />
		</ContentBlockColumn>

		<ContentBlockColumn>
			<SingleBlock data={data[2]} Parent={pattern[2]} />
			<SingleBlock data={data[3]} Parent={pattern[3]} />
		</ContentBlockColumn>
	</ContentBlocksContainer>
)

const ContentBlocks = () => {
	return (
		<div>
			<Blocks data={firstBlockData} />
			<StarWarsBlock />
			<Blocks data={secondBlockData} />
			<GearShopBlock />
		</div>
	)
}

export default ContentBlocks
