import React from "react";
import './Main.css';
import Promo from "./Promo/Promo";
import PreOrders from "./PreOrders/PreOrders";
import About from "./About/About";
import AllAlbums from "./AllAlbums/AllAlbums";

export default function Main() {
	return (
		<main className="main">
			<Promo></Promo>
			<PreOrders></PreOrders>
			<About></About>
			<AllAlbums></AllAlbums>
		</main>
	)
}