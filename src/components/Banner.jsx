import React from 'react';
import { banner } from '../database/banner';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper';

const Banner = () => {
	return (
		<div className="w-[90%] mx-auto my-4">
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 5500,
					disableOnInteraction: false,
				}}
				loop={true}
				pagination={{
					clickable: true,
				}}
				modules={[Autoplay, Pagination]}
				className="mySwiper"
			>
				{banner.map((item, index) => (
					<SwiperSlide key={index}>
						<img src={item.img} width={'95%'} className="mx-auto rounded" />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Banner;
