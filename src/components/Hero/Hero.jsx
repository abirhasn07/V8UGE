import React from 'react'

import './Hero.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { slider } from '../../database/slider';
const Hero = () => {
	return (
		<section className="slider-main">
			<Swiper className="mySwiper">
				{slider.map((item,index) => {
					return (
						<SwiperSlide key={index}>
							<div className="swiper-container">
								<div className="slide-info">
									<h1 className="headline">{item.title}</h1>
									<p className='sub-headline'>{item.subtitle}</p>
									<button className='btn-large'>Explore Now</button>
								</div>
								<div className="slider-img">
									<img src={item.img} alt="" />
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Hero