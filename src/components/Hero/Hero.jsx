import sass from "./Hero.module.scss";

export const Hero = ({ heroData: { title, text } }) => {
	return (
		<section className={sass.hero__section}>
			<div className="container">
				<div className={sass.section__inner}>
					<h1 className={sass.heroTitle}>{title}</h1>
					<p className={sass.heroText}>{text}</p>
				</div>
			</div>
		</section>
	)
}