import './Contact.css';

export default function Contact() {
	return (
		<section className="contact">
			<ul className="contact__addresses">
				<li className="contact__addresses_item">
					<p className="contact__addresses_item-text">
						Stranded SF<br/>
						1345 Valencia Street<br/>
						San Francisco, CA 94650<br/>
						430-647-7862<br/>
						Hours: 12 to 6pm (every day)
					</p>
				</li>
				<li className="contact__addresses_item">
					<p className="contact__addresses_item-text">
						Stranded NYC<br/>
						256 East 8th Street<br/>
						New York, NY 16793<br/>
						244-529-2691<br/>
						Hours: 12 to 6pm (every day)
					</p>
				</li>
				<li className="contact__addresses_item">
					<p className="contact__addresses_item-text">
						Stranded Oakland<br/>
						15 Glen Avenue<br/>
						Oakland, CA 946781<br/>
						789-868-5505<br/>
						Hours: 12 to 6pm (every day)
					</p>
				</li>
			</ul>
			<div className="contact__pic"></div>
		</section>
	)
}