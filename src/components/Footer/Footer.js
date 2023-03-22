import React from "react";
import './Footer.css';
import {Link} from "react-router-dom";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer__subscribe">
				<Link className="footer__subscribe_logo header__link-main" to="/">SPINLATE</Link>
				<p className="footer__subscribe_info">Stay informed of our newest arrivals, trends, and promotions.</p>
				<form className="footer__subscribe_mailing">
					<input
						id="email"
						name="email"
						type="email"
						required
						minLength="1"
						placeholder="E-mail"
						className="footer__subscribe_mailing-input"
						pattern="^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$"
					/>
					<button type="submit" className="footer__subscribe_mailing-btn">
						Subscribe
					</button>
				</form>
			</div>
			<nav className="footer__nav">
				<Link className="footer__nav_link" to="/">New In Vinyl</Link>
				<Link className="footer__nav_link" to="/">About</Link>
				<Link className="footer__nav_link" to="/">Instagram</Link>
				<Link className="footer__nav_link" to="/">Exclusive Vinyl</Link>
				<Link className="footer__nav_link" to="/">Contact us</Link>
				<Link className="footer__nav_link" to="/">Telegram</Link>
				<Link className="footer__nav_link" to="/">Colour Vinyl</Link>
				<Link className="footer__nav_link" to="/">Shop</Link>
				<Link className="footer__nav_link" to="/">Shop</Link>
				<Link className="footer__nav_link" to="/">Pre-orders</Link>
				<Link className="footer__nav_link" to="/">Terms & Conditions</Link>
			</nav>
		</footer>
	)
}