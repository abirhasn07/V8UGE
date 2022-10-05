import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUserCircle } from 'react-icons/fa';

import { BsFillCartFill, BsFillHeartFill } from 'react-icons/bs';
import './Navbar.css';
import { useStoreContext } from '../../context/ShoppingCartContext';

const Navbar = () => {
	const [isLoginTrue, setLoginTrue] = useState(false);
	const { cartQuantity } = useStoreContext();
	return (
		<nav>
			<div className="container">
				<Link to={'/'} className="logo">
					<img
						src="https://ik.imagekit.io/abirhasan/Logo_yAZA_BVl7.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664533251302
          "
						alt="v8uge store logo"
						className="company-logo"
						width={'100px'}
					/>
				</Link>
				<ul className="nav-list">
					{/* <Link to="/login"  className="list-item">Login</Link> */}
					<li className="list-item">
						Search
						<span className="search-icon">
							<FaSearch />
						</span>
					</li>

					<Link to="/cartPage" className="list-item">
						Cart <span>({cartQuantity})</span>
					</Link>
					<Link className="list-item">
						Wishlist <span>(0)</span>
					</Link>
					<Link to="/signUp" className="list-item">
						SignUp
					</Link>
				</ul>

				{/* MOBILE MENU LIST  */}
				<ul className="mobile-menu-list">
					<li>
						<FaSearch color="#252525" size={'2rem'} />
					</li>
					<Link to={"/cartPage"} className="cart-icon" data-count={cartQuantity}>
						<BsFillCartFill color="#252525" size={'2rem'} />
					</Link>
					<li className="wishlist" data-count="0">
						<BsFillHeartFill color="#252525" size={'1.8rem'} />
					</li>
					{isLoginTrue ? (
						<li>
							<FaUserCircle color="#252525" size={'1.8rem'} />
						</li>
					) : (
						<li>
							<FaUserCircle color="#252525" size={'1.8rem'} />
						</li>
					)}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
