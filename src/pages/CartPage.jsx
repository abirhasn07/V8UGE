import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import OderSummary from '../components/OderSummary/OderSummary';
import ShoppingCart from '../components/ShoppingCart/ShoppingCart';
import '../stylesheet/shoppingcart.css';
const CartPage = () => {
	return (
		<section>
			<Navbar />
			{/* <div className="container cart-container">
				<div className="shopping-cart-container">
					<ShoppingCart />
				</div>
				<div className="oderSummary-container">
					<OderSummary />
				</div>
			</div> */}

			<div
				style={{
					marginTop: '10px',
					height: '100vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<h2 className="section-title" style={{ fontSize: '4rem' }}>
					COMING SOON
				</h2>
			</div>
		</section>
	);
};

export default CartPage;
