import sass from "./Hero.module.scss";
import { Button } from "components/Button/Button";

export const Hero = ({ heroData: { title, text } }) => {
	return (
		<section className={sass.hero__section}>
			<div className="container">
				<div className={sass.section__inner}>
					<h1 className={sass.heroTitle}>{title}</h1>
					<p className={sass.heroText}>{text}</p>
					<Button text="Sign up" type="button" disabled={false} />
				</div>
			</div>
		</section>
	)
}