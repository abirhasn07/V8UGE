import React from 'react'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'
import ProductContainer from '../components/ProductContainer/ProductContainer';
import { useStoreContext } from '../context/ShoppingCartContext';

const Home = () => {
	const { sneakerCollection,shirtCollection, exclusiveProduct } = useStoreContext();
  return (
	  <div>
		  <Navbar />
		  <Hero />
		  <ProductContainer products={exclusiveProduct} name={"exclusive product"} style="cover"/>
		<ProductContainer products={sneakerCollection} name={"sneakers collection"} style="contain"/>
		<ProductContainer products={shirtCollection} name={"summer collection"} style="contain"/>
		  
	</div>
  )
}

export default Home