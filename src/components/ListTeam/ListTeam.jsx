import sass from "./ListTeam.module.scss";
import { SectionTitle } from "components/SectionTitle/SectionTitle";

import image01 from "../../images/avatar-01.png";
import image02 from "../../images/avatar-02.png";
import image03 from "../../images/avatar-03.png";
import image04 from "../../images/avatar-04.png";
import image05 from "../../images/avatar-05.png";
import image06 from "../../images/avatar-06.png";
import { Participant } from "components/Participant/Participant";
import { Button } from "components/Button/Button";

const images = [image01, image02, image03, image04, image05, image06];

export const ListTeam = ({ list }) => {
	const team = list.map((item, idx) => ({ ...item, avatar: images[idx] }));

	console.log(team);

	return (
		<section className={sass.section__team}>
			<div className="container">
				<div className={sass.team__inner}>
					<SectionTitle title="Working with GET request" />
					<ul className={sass.team__list}>
						{
							team.map(item => <Participant key={item.id} item={item} />)
						}
					</ul>
					<div className={sass.showMoreBtn}>
						<Button type="button" text="Show more" />
					</div>
				</div>
			</div>
		</section>
	)
}