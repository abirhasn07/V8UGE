import React, { useEffect, useState } from 'react';
import star from '../assets/star-svgrepo-com.svg';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// import required modules
import { Autoplay, Scrollbar } from 'swiper';
const Testimonial = () => {
	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch('https://testimonialapi.toolcarton.com/api');
			const data = await res.json();
			setUser(data);
		};
		fetchData();
	}, []);

	const [user, setUser] = useState([]);

	const data = user.map((item, index) => {
		return (
			<SwiperSlide key={index} className="">
				<article className="h-[350px] w-[400px] flex flex-col items-center bg-gray-100 justify-center gap-4">
					<figure className="flex  justify-around items-center w-full">
						<img
							src={item.avatar}
							alt={item.name}
							className="rounded-full w-[50px] h-[50px]"
						/>
						<figcaption className="text-left -ml-4">
							<h4>{item.name}</h4>
							<strong>{item.designation}</strong>
						</figcaption>
						<div className="flex items-center gap-1">
							<img src={star} alt="" width={20} />
							<span>{item.rating}</span>
						</div>
					</figure>
					<aside className="w-[90%] text-left">{item.message}</aside>
				</article>
			</SwiperSlide>
		);
	});
	return (
		<section className="w-[88%] mx-auto my-8">
			<Swiper
				slidesPerView={1}
				spaceBetween={10}
				scrollbar={{
					hide: true,
				}}
				breakpoints={{
					640: {
						slidesPerView: 2,
						spaceBetween: 5,
					},
					768: {
						slidesPerView: 4,
						spaceBetween: 10,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
				}}
				autoplay={{
					delay: 2500,
					disableOnInteraction: true,
				}}
				modules={[Scrollbar, Autoplay]}
				className="mySwiper"
			>
				{data}
			</Swiper>
		</section>
	);
};

export default Testimonial;
