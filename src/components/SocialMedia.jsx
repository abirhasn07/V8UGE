import React from 'react';
import { socialMedia } from '../database/data';
import Marquee from 'react-fast-marquee';

const SocialMedia = () => {
	const img = socialMedia.map((item, index) => {
		return (
			<img
				src={item.img}
				alt="fashion_icon"
				width={'16.5%'}
				height="150px"
				className="w-[30%] lg:w-[16.5%]"
				key={index}
			/>
		);
	});
	return (
		<section className="my-8 w-[88%] mx-auto  flex justify-center flex-wrap">
			{img}
		</section>
	);
};

export default SocialMedia;
