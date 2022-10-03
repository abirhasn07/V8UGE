import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css'
const Navbar = () => {
	return (
		<nav>
			<div className="container">
				<div className="logo">
					<img
						src="https://ik.imagekit.io/abirhasan/Logo_yAZA_BVl7.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664533251302
          "
						alt="v8uge store logo"
            className="company-logo"
            width={"100px"}
          />
				</div>
          <ul className="nav-list">
            <Link to="/"  className="list-item">Home</Link>
            <Link to="/blog" className="list-item">Fashion Tips</Link>
           
            {/* <Link to="/login"  className="list-item">Login</Link> */}
            <Link to="/contact"  className="list-item">Helpline 24/7</Link>
            <Link to="/signUp"  className="list-item">SignUp</Link>
            <Link  className="list-item">Cart <span>(0)</span></Link>

          </ul>
      </div>
      

      <div className="mobile-menu-icons">
        <span className="open-menu">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><line x1="40" y1="64" x2="216" y2="64" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><line x1="40" y1="192" x2="216" y2="192" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line></svg>
        </span>
        <span className="close-menu">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="160" y1="96" x2="96" y2="160" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><line x1="160" y1="160" x2="96" y2="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><rect x="40" y="40" width="176" height="176" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></rect></svg>
        </span>
      </div>
		</nav>
	);
};

export default Navbar;
