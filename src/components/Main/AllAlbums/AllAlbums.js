import './AllAlbums.css';

export default function AllAlbums() {
	return (
		<section className="allAlbums">
			<div className="allAlbums__pic">
				<h2 className="allAlbums__pic_title">Sell your records</h2>
			</div>
			<div className="allAlbums__description">
				<p className="allAlbums__pic_subtitle">
					We will buy your old albums – If you are looking to trade, or sell your old Vinyl collection, look no further!
				</p>
				<p className="allAlbums__pic_subtitle">
					We love to buy and sell records in New York City and the San Francisco Bay Area.
				</p>
				<p className="allAlbums__pic_subtitle">
					If you are interested in selling your collection, please give us a call or email us.
				</p>
				<button type="button" className="allAlbums__description_btn">View all albums</button>
			</div>
		</section>
	)
}