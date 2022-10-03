import React from 'react';
import ReactDOM from 'react-dom/client';


import App from './App';

import "swiper/css/bundle";

import './stylesheet/reset.css';
import './stylesheet/index.css';
import './stylesheet/pages.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
);
