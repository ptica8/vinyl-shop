import React from "react";
import './Main.css';
import Promo from "./Promo/Promo";
import PreOrders from "./PreOrders/PreOrders";

export default function Main() {
	return (
		<main className="main">
			<Promo></Promo>
			<PreOrders></PreOrders>
		</main>
	)
}