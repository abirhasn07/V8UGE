import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { StoreContextProvider } from './context/ShoppingCartContext';
import CartPage from './pages/CartPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Notfound from './pages/Notfound';
import SignUp from './pages/SignUp';
import SingleProductPage from './pages/SingleProductPage';

const App = () => {
	return (
		<StoreContextProvider>
			<Routes>
				<Route element={<Home />} path="/" />
				<Route element={<Login />} path="/login" />
				<Route element={<SignUp />} path="/signUp" />
				<Route element={<CartPage />} path="/cartPage" />
				<Route element={<SingleProductPage />} path=":id/singleProduct" />

				<Route element={<Notfound />} path="*" />
			</Routes>
		</StoreContextProvider>
	);
};

export default App;
