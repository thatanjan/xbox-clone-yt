import React from 'react'

import { YellowTag } from 'components/CommonComponents.styles'

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
} from './ContentBlocks.styles'

import { firstBlockData, secondBlockData } from './blockData'

import { StarWarsBlock, GearShopBlock } from './HorizontalBlocks'

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
			{bigImg && <source media={imageBreakPoint} srcSet={bigImg} />}
			<img src={img} alt='' />
		</BlockImg>

		<SingleDescription {...restOfData} />
	</Parent>
)

const Blocks = ({ data }) => (
	<ContentBLocksContainer>
		<ContentBlockColumn>
			<SingleBlock data={data[0]} Parent={pattern[0]} />
			<SingleBlock data={data[1]} Parent={pattern[1]} />
		</ContentBlockColumn>
		<ContentBlockColumn>
			<SingleBlock data={data[2]} Parent={pattern[2]} />
			<SingleBlock data={data[3]} Parent={pattern[3]} />
		</ContentBlockColumn>
	</ContentBLocksContainer>
)

const ContentBlocks = () => {
	return (
		<>
			<Blocks data={firstBlockData} />

			<StarWarsBlock />

			<Blocks data={secondBlockData} />

			<GearShopBlock />
		</>
	)
}

export default ContentBlocks
