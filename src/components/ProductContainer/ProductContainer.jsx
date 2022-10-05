import React, { useEffect, useRef } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
// SWIPER SLIDERS 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
// SWIPER SLIDERS
// GSAP ANIMATION
import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
// GSAP ANIMATION
// CUSTOM CSS
import './ProductContainer.css';
// CUSTOM CSS
const ProductContainer = ({ products, name, style }) => {
	const secTitle = useRef(null);
	const productRef = useRef(null);
	useEffect(() => {}, []);
	return (
		<section className="product-container" ref={productRef}>
			<div className="container">
				<div className="section-header">
					<h2 className="section-title" ref={secTitle}>
						{name}
					</h2>
				</div>

				<div className="sneakers-content">
					<Swiper
						slidesPerView={1}
						spaceBetween={40}
						// loopFillGroupWithBlank={true}
						loop={true}
						modules={[Navigation]}
						autoplay={true}
						navigation={true}
						breakpoints={{
							640: {
								slidesPerView: 1,
								spaceBetween: 0,
							},
							768: {
								slidesPerView: 2,
								spaceBetween: 40,
							},
							1024: {
								slidesPerView: 3.8,
								spaceBetween: 0,
							},
						}}
						className="mySwiper">
						{products &&
							products.map((item) => {
								return (
									<SwiperSlide key={item.id}>
										<SingleProduct item={item} style={style} />
									</SwiperSlide>
								);
							})}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default ProductContainer