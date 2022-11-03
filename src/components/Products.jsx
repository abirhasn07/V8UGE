import React from 'react';

import SingleProduct from './SingleProduct';

const Products = ({ productsData }) => {
	return (
		<div className="mt-24 w-[95%] mx-auto">
			<div className="lg:w-[90%] lg:my-4 my-2 mx-auto text-xl lg:text-4xl capitalize font-semibold text-black/90">
				weekly Best Sellers{' '}
			</div>
			<div
				className="flex justify-center
            items-center gap-2 flex-wrap w-full "
			>
				{productsData &&
					productsData.map((item, index) => {
						return <SingleProduct item={item} key={index} />;
					})}
			</div>
		</div>
	);
};

export default Products;
