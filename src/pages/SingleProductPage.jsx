import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar.jsx'
import { useStoreContext } from '../context/ShoppingCartContext.jsx'
import {products} from '../database/data.js'
import { formatCurrency } from '../utilities/CURRENCRYFORMATTER.js'
import { BsFillCartPlusFill, BsFillBookmarkPlusFill } from 'react-icons/bs';
const SingleProductPage = () => {
	let { id } = useParams();
	const item = products.filter((product) => product.id === Number(id));
	const { discount, increaseCartQuantity } = useStoreContext();

	return (
		<section>
			<Navbar />
			<div className="container">
				<div className="single-product-page">
					<div className="single-product-img">
						<img src={item[0].productImage} alt={item[0].productName} />
					</div>
					<div className="single-product-info">
						<h2 className="single-product-name">{item[0].productName}</h2>
						<div className="single-product-price">
							<h4>{formatCurrency(item[0].productPrice)}</h4>
							<span>{formatCurrency(item[0].productPrice - discount)}</span>
						</div>
						<div className="single-page-btn-group">
							<button
								className="addToCartBtn"
								onClick={() => increaseCartQuantity(item[0].id)}>
								Add to cart
								<span>
									<BsFillCartPlusFill />
								</span>{' '}
							</button>
							<button className="wishlist-btn">
								Add to Wishlist
								<span>
									<BsFillBookmarkPlusFill size={'2.2rem'} />
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SingleProductPage