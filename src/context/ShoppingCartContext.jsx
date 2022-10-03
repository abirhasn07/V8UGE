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
	const discount = Math.trunc(Math.random() * 300)
	console.log(discount);
	// PRODUCT DISCOUNT 
	const value = { sneakerCollection, shirtCollection, exclusiveProduct,discount };
	return (
		<StoreContext.Provider value={value}>{children}</StoreContext.Provider>
	);
}
