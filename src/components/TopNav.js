import React from 'react';
import {NavLink} from 'react-router-dom';

export default function TopNav(props) {
    return (
        <div className="width-100 height-6 flex-column justify-content-center black-bg hide-on-medium-small" id="topNav">
		<div className="ul-inline white-text font-13 absolute right-0">
			<ul className="allerRg">
				<li className="padding-right-10">
					<NavLink to="/user/logout" className="white-text">Logout</NavLink>
				</li>
				<li className="padding-right-10"><NavLink to="/product/" className="white-text">View All Products</NavLink></li>
			</ul>
		</div>
		<div className="absolute padding-left-10 display-block">
			{props.children}
		</div>
	</div>
    )
}
