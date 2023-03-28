import './About.css'

export default function About() {
	return (
		<section className="about">
			<div className="about__intro">
				<h2 className="about__intro_title">About Spinlate</h2>
				<p className="about__intro_subtitle">We love to buy and sell records in NYC and the SF Bay Area.</p>
			</div>
			<div className="about__description">
				<p className="about__description_subtitle">
					Stranded is the retail arm of archival label Superior Viaduct with locations in San Francisco, Oakland and New York.
				</p>
				<p className="about__description_subtitle">
					We have even more new and used vinyl available in our brick-and-mortar stores.
				</p>
			</div>
		</section>
	)
}