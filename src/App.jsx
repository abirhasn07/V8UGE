import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import 'swiper/css/bundle';
import Products from './components/Products';
import Banner from './components/Banner';
import { bestSeller, newYearExclusive } from './database/data';
import Categories from './components/Categories';
import Testimonial from './components/Testimonial';
import SocialMedia from './components/SocialMedia';
import Newsletter from './components/Newsletter';
const App = () => {
	const weekly_product = bestSeller;
	const yearly_product = newYearExclusive;
	return (
		<div className="max-w-[1980px] mx-auto font-outfit font-400">
			<Navbar />
			<Hero />
			<Categories />
			<Products productsData={weekly_product} />
			<Banner />
			<Products productsData={yearly_product} />
			<Testimonial />
			<SocialMedia />
			<Newsletter />
		</div>
	);
};

export default App;
