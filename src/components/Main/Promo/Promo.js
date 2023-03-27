import './Promo.css';
import React from "react";
import pic1 from '../../../images/promo-pic-1.jpg';
import pic2 from '../../../images/promo-pic-2.png';
import pic3 from '../../../images/promo-pic-3.png';
import pic4 from '../../../images/promo-pic-4.jpg';
import pic5 from '../../../images/promo-pic-5.jpg';
export default function Promo() {
	return (
		<section className="promo">
			<div className="promo__item">
				<p className="promo__item_text">New In Vinyl</p>
				<img src={pic1} className="promo__item_img" alt="New In Vinyl"/>
			</div>
			<div className="promo__item">
				<p className="promo__item_text-half promo__item_text-top">The 50 Greatest Dance Albums of All Time</p>
				<img src={pic2} className="promo__item_img-half promo__item_img-half-first" alt="The 50 Greatest Dance Albums of All Time"/>
				<img src={pic3} className="promo__item_img-half promo__item_img-half-second" alt="11 Essential Post-Punk and Revival Albums"/>
				<p className="promo__item_text-half promo__item_text-bottom">11 Essential Post-Punk and Revival Albums</p>
			</div>
			<div className="promo__item">
				<p className="promo__item_text">Colour Vinyl</p>
				<img src={pic4} className="promo__item_img" alt="Colour Vinyl"/>
			</div>
			<div className="promo__item">
				<p className="promo__item_text">Exsclusive Vinyl</p>
				<img src={pic5} className="promo__item_img" alt="Exsclusive Vinyl"/>
			</div>
		</section>
	)
}