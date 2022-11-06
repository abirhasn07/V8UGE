import React from 'react';

const SingleProduct = ({ item }) => {
	return (
		<div className="w-[95%] lg:w-[22%] my-2 lg:my-4 cursor-pointer ">
			<div className="overflow-hidden ">
				<img
					src={item.img}
					alt={item.name}
					className="w-full object-cover hover:scale-105 transition transition-scale duration-200"
					loading="lazy"
					height={'200px'}
				/>
			</div>
			<p className="capitalize px-2 font-semibold">{item.name}</p>

			<div className="flex justify-between px-2">
				<p>USD ${item.price}</p>
				<div className=" ">
					<svg
						width="35"
						height="35"
						viewBox="0 0 35 35"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle
							cx="17.5"
							cy="17.5"
							r="17.5"
							fill="#EE3D25"
							fillOpacity="0.5"
						/>
						<path
							d="M15.9375 26.875C16.8004 26.875 17.5 26.1754 17.5 25.3125C17.5 24.4496 16.8004 23.75 15.9375 23.75C15.0746 23.75 14.375 24.4496 14.375 25.3125C14.375 26.1754 15.0746 26.875 15.9375 26.875Z"
							fill="#FDFBF5"
						/>
						<path
							d="M23.2295 26.875C24.0924 26.875 24.792 26.1754 24.792 25.3125C24.792 24.4496 24.0924 23.75 23.2295 23.75C22.3665 23.75 21.667 24.4496 21.667 25.3125C21.667 26.1754 22.3665 26.875 23.2295 26.875Z"
							fill="#FDFBF5"
						/>
						<path
							d="M18.5413 18.5417H20.6247V15.4271H23.7393V13.3438H20.6247V10.2396H18.5413V13.3438H15.4268V15.4271H18.5413V18.5417Z"
							fill="#FDFBF5"
						/>
						<path
							d="M15.4163 22.7083H23.7497C23.9595 22.7077 24.1643 22.6437 24.3371 22.5248C24.51 22.4058 24.6429 22.2374 24.7184 22.0417L27.6663 14.375H25.4372L23.0309 20.625H16.1143L11.4372 9.40625C11.2786 9.02611 11.0109 8.7015 10.6679 8.47345C10.3249 8.2454 9.92198 8.12415 9.51009 8.125H7.08301V10.2083H9.51009L14.458 22.0625C14.5362 22.2527 14.6689 22.4156 14.8394 22.5305C15.0099 22.6454 15.2107 22.7073 15.4163 22.7083Z"
							fill="#FDFBF5"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default SingleProduct;
