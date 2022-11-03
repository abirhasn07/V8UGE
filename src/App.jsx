import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import 'swiper/css/bundle';
const App = () => {
	return (
		<div className="max-w-[1980px] mx-auto font-outfit font-400">
			<Navbar />
			<Hero />
		</div>
	);
};

export default App;
