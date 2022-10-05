import React from 'react';
import Navbar from '../Navbar/Navbar';
import { FiDelete } from 'react-icons/fi';
import { useStoreContext } from '../../context/ShoppingCartContext';

const ShoppingCart = () => {
	const { cartItem } = useStoreContext();
	console.log(cartItem);

	return (
		<div className="">
			<Navbar />
			<div className="cart-page">
				<table>
					<tr>
						<th>Product</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Subtotal</th>
						<th>Remove</th>
					</tr>
					{}
					<tr>
						<td>
							<div className="cart-info">
								<img
									src="https://ik.imagekit.io/abirhasan/Rectangle_9_rm-2M73Ei.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664522676699"
									alt=""
									className="shopping-cart-img"
									width={'75px'}
								/>
								<div>
									<p className="product-name">GREY SWEATER</p>
								</div>
							</div>
						</td>
						<td className="product-price">
							<p className="original-price">$1700.00</p>
						</td>
						<td className="button-groups">
							<button>+</button>
							<button>1</button>
							<button>-</button>
						</td>
						<td className="cart-price">$1479.00</td>
						<td className="cart-price">
							<FiDelete />
						</td>
					</tr>
				</table>
			</div>
		</div>
	);
};

export default ShoppingCart;
