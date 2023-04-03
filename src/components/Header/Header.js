import React from "react";
import './Header.css';
import {Link} from "react-router-dom";

export default function Header() {
	return (
		<header className="header">
			<div className="header__container header__container-1">
				<button className="header__burger"/>
				<Link className="header__link-main" to="/">SPINLATE</Link>
				<Link className="header__links header__links_left" to="/">Popular</Link>
				<Link className="header__links header__links_left" to="/">New Items</Link>
				<Link className="header__links header__links_left" to="/">Sale</Link>
			</div>
			<div className="header__container header__container-2">
				<Link className="header__links header__links_info" to="/">Info</Link>
				<Link className="header__links" to="/">Cart (0)</Link>
				<button type="submit" className="header__button header__links">
					<div className="header__button_img"></div>
					Search
				</button>
			</div>
		</header>
	)
}