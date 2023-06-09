import { MyForm } from "components/MyForm/MyForm";
import sass from "./FeedbackForm.module.scss";
import { SectionTitle } from "components/SectionTitle/SectionTitle";

export const FeedbackForm = () => {
	return (
		<section className={sass.feedback__section}>
			<div className="container">
				<div className="feedback__inner">
					<SectionTitle title="Create your FAKE user" />
					<div className="feedback__form">
						<MyForm />
					</div>
				</div>
			</div>
		</section>
	)
}