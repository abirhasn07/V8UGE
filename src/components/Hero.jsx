import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { heroData } from '../database/data';
const Hero = () => {
	return (
		<section className="h-full lg:mt-[60px] mt-[100px] w-[90%] mx-auto">
			<Swiper className="mySwiper" scrollbar={false}>
				{heroData.map((item, index) => {
					return (
						<SwiperSlide key={index}>
							<div className="">
								<h2
									id="title"
									className="lg:text-6xl lg:w-[80%] text-3xl font-bold text-black my-4 leading-[100%] w-full mx-auto lg:mb-8"
								>
									{item.title}
								</h2>

								<img
									src={item.img}
									alt=""
									className="object-cover w-[100%] h-[80vh]"
									loading="lazy"
								/>

								<button className="hidden lg:block mx-auto border-[1px] border-gray-400 mt-4 rounded-full px-[16px] py-[8px] leading-none text-sm font-outfit">
									scroll down
								</button>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Hero;
