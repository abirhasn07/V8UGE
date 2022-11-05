import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import { Autoplay } from 'swiper';
import { categories } from '../database/data';
const Categories = () => {
	return (
		<div className="my-8 flex items-center h-[200px] ">
			<Swiper
				slidesPerView={1}
				spaceBetween={10}
				autoplay={{
					delay: 2500,
					disableOnInteraction: true,
				}}
				breakpoints={{
					640: {
						slidesPerView: 5,
						spaceBetween: 5,
					},
					768: {
						slidesPerView: 6,
						spaceBetween: 7.5,
					},
					1024: {
						slidesPerView: 7,
						spaceBetween: 10,
					},
				}}
				loop={true}
				modules={[Autoplay]}
				className="mySwiper"
			>
				{categories.map((cat, index) => {
					return (
						<SwiperSlide
							className="h-full bg-gray-300/10 cursor-pointer hover:border-[1px] border-gray-500/75 rounded"
							key={index}
						>
							<figure className="text-center flex justify-center flex-col items-center">
								<img
									src={cat.img}
									alt={cat.name}
									loading="lazy"
									className="h-[90px] w-[90px] object-contain hover:scale-110 transition-scale duration-100"
								/>
								<figcaption className="my-2 text-center text-base">
									{cat.name}
								</figcaption>
							</figure>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default Categories;
