import React from "react";
import './Header.css';
import {Link} from "react-router-dom";

export default function Header() {
	return (
		<header className="header">
			<div className="header__container header__container-1">
				<Link className="header__link-main" to="/">SPINLATE</Link>
				<Link className="header__links" to="/">Popular</Link>
				<Link className="header__links" to="/">New Items</Link>
				<Link className="header__links" to="/">Sale</Link>
			</div>
			<div className="header__container header__container-2">
				<Link className="header__links" to="/">Info</Link>
				<Link className="header__links" to="/">Cart (0)</Link>
				<button type="submit" className="header__button header__links">
					Search
				</button>
			</div>
		</header>
	)
}