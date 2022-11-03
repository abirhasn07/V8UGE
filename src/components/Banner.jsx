import React from 'react';

const Banner = () => {
	const img =
		'https://ik.imagekit.io/abirhasan/v8uge_cloth_store/weekly_Best_Sellers_T0GtNfzeoG.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667489774388';
	return (
		<div className="w-[90%] mx-auto my-8">
			<img
				src={img}
				alt="discount banner"
				loading="lazy"
				width={'95%'}
				className="h-[90px] object-cover rounded-lg mx-auto"
			/>
		</div>
	);
};

export default Banner;
