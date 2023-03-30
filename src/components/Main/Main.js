import React from "react";
import './Main.css';
import Promo from "./Promo/Promo";
import PreOrders from "./PreOrders/PreOrders";
import About from "./About/About";
import AllAlbums from "./AllAlbums/AllAlbums";
import Contact from "./Contact/Contact";

export default function Main() {
	return (
		<main className="main">
			<Promo/>
			<PreOrders/>
			<About/>
			<AllAlbums/>
			<Contact/>
		</main>
	)
}