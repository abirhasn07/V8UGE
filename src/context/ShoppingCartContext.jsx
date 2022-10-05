import { createContext, useContext, useEffect, useState } from 'react';
import { products } from '../database/data';

const StoreContext = createContext();

export function useStoreContext() {
	return useContext(StoreContext);
}

export function StoreContextProvider({ children }) {
	// CATEGORIES
	const [sneakerCollection, setSneakerCollection] = useState([]);
	const [shirtCollection, setShirtCollection] = useState([]);
	const [exclusiveProduct, setExclusiveProduct] = useState([]);
	useEffect(() => {
		const sneaker = products.filter((item) => item.cat === 'sneakers');
		setSneakerCollection(sneaker);
		const shirt = products.filter((item) => item.cat === 'shirt');
		setShirtCollection(shirt);
		const exclusive = products.filter((item) => item.cat === 'exclusive');
		setExclusiveProduct(exclusive);
	}, []);

	// PRODUCT DISCOUNT
	const discount = Math.trunc(Math.random() * 300);
	// console.log(discount);
	// PRODUCT DISCOUNT

	// ADD TO CART FUNCTIONS
	const [cartItem, setCartItem] = useState([]);
	function getItemQuantity(id) {
		return cartItem.find((item) => item.id === id)?.quantity || 0;
	}

	function increaseCartQuantity(id) {
		setCartItem((currItem) => {
			// console.log(currItem);
			if (currItem.find((item) => item.id === id) == null) {
				// toast.success('New Product Added', { position: 'top-right' });
				return [...currItem, { id, quantity: 1 }];
			} else {
				return currItem.map((item) => {
					if (item.id === id) {
						// toast.success('Product Added', { position: 'top-right' });
						return { ...item, quantity: item.quantity + 1 };
					} else {
						return item;
					}
				});
			}
		});
	}

	function decreaseCartQuantity(id) {
		setCartItem((currItems) => {
			if (currItems.find((item) => item.id === id)?.quantity === 1) {
				return currItems.filter((item) => item.id !== id);
			} else {
				return currItems.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity - 1 };
					} else {
						return item;
					}
				});
			}
		});
	}

	function removeFromCart(id) {
		setCartItem((currItems) => {
			return currItems.filter((item) => item.id !== id);
		});
	}

	function clearCart() {
		setCartItem([]);
	}

	const cartQuantity = cartItem.reduce(
		(quantity, item) => item.quantity + quantity,
		0,
	);
	const total = cartItem.reduce((total, item) => {
		const product = products.find((i) => i.id === item.id);
		return total + (product?.price || 0) * item.quantity;
	}, 0);
	const tax = Math.round(total * 0.15);
	// console.log(cartItem);
	// CONTEXT VALUES
	const value = {
		sneakerCollection,
		shirtCollection,
		exclusiveProduct,
		discount,
		clearCart,
		removeFromCart,
		decreaseCartQuantity,
		increaseCartQuantity,
		getItemQuantity,
		cartQuantity,
	};
	return (
		<StoreContext.Provider value={value}>{children}</StoreContext.Provider>
	);
}
