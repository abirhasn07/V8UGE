import React from 'react';
import { Link } from 'react-router-dom';
import { useStoreContext } from '../../context/ShoppingCartContext.jsx';
import { formatCurrency } from '../../utilities/CURRENCRYFORMATTER.js';
import './SingleProduct.css'
const SingleProduct = ({ item,style }) => {
   const {discount}=useStoreContext()
	
	return (
		<Link to={`${item.id}/singleProduct`} className="single-product">
            <img src={item.productImage} alt={item.productName} style={{objectFit:`${style}`}} loading="lazy"/>
            
            <h4 className='product-name'>{item.productName}</h4>

			<h4 className='original-price'>{formatCurrency(item.productPrice)} <span className='discount-price'>{formatCurrency(item.productPrice-discount)}</span></h4>
		</Link>
	);
};

export default SingleProduct;
