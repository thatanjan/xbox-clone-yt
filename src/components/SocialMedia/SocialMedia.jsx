import React from 'react'

import {
	SocialMediaBlock,
	SocialMediaIcon,
	FollowText,
} from './SocialMedia.styles'

import email from 'media/icons/social_media/email.svg'
import facebook from 'media/icons/social_media/facebook.svg'
import twitter from 'media/icons/social_media/twiiter.svg'
import instagram from 'media/icons/social_media/instagram.svg'

const SocialMedia = () => {
	return (
		<SocialMediaBlock>
			<FollowText>Follow Xbox</FollowText>

			<SocialMediaIcon src={email} />
			<SocialMediaIcon src={facebook} />
			<SocialMediaIcon src={twitter} />
			<SocialMediaIcon src={instagram} />
		</SocialMediaBlock>
	)
}

export default SocialMedia
