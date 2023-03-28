import './PreOrders.css';
import pic1 from '../../../images/preorders-pic-1.png';
import pic2 from '../../../images/preorders-pic-2.png';
import pic3 from '../../../images/preorders-pic-3.png';
import pic4 from '../../../images/preorders-pic-4.png';

export default function PreOrders() {
	return (
		<section className="preorders">
			<h2 className="preorders__title">Recommended pre-orders & The latest exclusives</h2>
			<ul className="preorders__list">
				<li className="preorders__item">
					<div className="preorders__item_info">
						<div className="preorders__item_info-container">
							<h3 className="preorders__item_info-name">Gun Outfit</h3>
							<p className="preorders__item_info-title">Out Of Range</p>
						</div>
						<p className="preorders__item_info-price">$18.99</p>
					</div>
					<img src={pic1} className="preorders__item-img"/>
				</li>
				<li className="preorders__item">
					<div className="preorders__item_info">
						<div className="preorders__item_info-container">
							<h3 className="preorders__item_info-name">Saint Etienne</h3>
							<p className="preorders__item_info-title">Sound Of Water</p>
						</div>
						<p className="preorders__item_info-price">$18.99</p>
					</div>
					<img src={pic2} className="preorders__item-img"/>
				</li>
				<li className="preorders__item">
					<div className="preorders__item_info">
						<div className="preorders__item_info-container">
							<h3 className="preorders__item_info-name">Crumb</h3>
							<p className="preorders__item_info-title">Jinx</p>
						</div>
						<p className="preorders__item_info-price">$16.99</p>
					</div>
					<img src={pic3} className="preorders__item-img"/>
				</li>
				<li className="preorders__item">
					<div className="preorders__item_info">
						<div className="preorders__item_info-container">
							<h3 className="preorders__item_info-name">Penguin Cafe</h3>
							<p className="preorders__item_info-title">Handfuls Of Night</p>
						</div>
						<p className="preorders__item_info-price">$16.99</p>
					</div>
					<img src={pic4} className="preorders__item-img"/>
				</li>
			</ul>
			<button type="button" className="preorders__button">View all pre-orders</button>
		</section>
	)
}