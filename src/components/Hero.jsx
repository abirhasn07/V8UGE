import React from 'react';
const Hero = () => {
	const banner =
		'https://ik.imagekit.io/abirhasan/v8uge_cloth_store/Banner/final_banner_cxg3Xddul.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667742802594';
	return (
		<section className="h-full lg:mt-[60px] mt-[100px] w-[85%] mx-auto flex items-center justify-center flex-col-reverse lg:flex-row">
			<div className="w-full lg:w-[60%] text-center lg:text-left lg:block flex flex-col items-center  ">
				<p className="uppercase hidden lg:block">exclusive Collection</p>
				<h1 className="lg:text-4xl font-bold lg:w-[90%] w-full text-[32px]">
					Make Your Summer <span className="text-orange">Fashion</span> More
					Elegant
				</h1>
				<small className="text-[12px] my-2 hidden lg:block">
					use this code to receive 50% discount off all products
				</small>
				<button className="block bg-orange text-white w-40 lg:text-xl leading-none lg:h-[50px] capitalize rounded mt-2 text-base h-[40px]">
					explore now
				</button>
			</div>
			<div className=" w-full lg:w-[40%]">
				<img
					src={banner}
					alt="this is a banner v8uge website"
					className="w-full object-cover h-auto"
				/>
			</div>
		</section>
	);
};

export default Hero;
