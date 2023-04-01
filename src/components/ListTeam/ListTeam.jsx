import sass from "./ListTeam.module.scss";
import { SectionTitle } from "components/SectionTitle/SectionTitle";
import { Participant } from "components/Participant/Participant";
import { Button } from "components/Button/Button";
import { useEffect, useState } from "react";
import { Puff } from 'react-loader-spinner';
// import { fetchUsers } from "services/fetchUsers";

const baseUrl = "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6";

export const ListTeam = () => {

	const [fetchUsers, setFetchUsers] = useState([]);

	useEffect(() => {
		fetch(baseUrl)
			.then(res => res.json())
			.then(({ users }) => setFetchUsers(users));
	}, []);

	return (
		<section className={sass.section__team}>
			<div className="container">
				<div className={sass.team__inner}>
					<SectionTitle title="Working with GET request" />
					<ul className={sass.team__list}>
						{
							fetchUsers.length === 0
								? <Puff
									height="100"
									width="100"
									color="#d6c439"
									wrapperStyle={{ margin: "0 auto" }}
								/>
								: fetchUsers.map(user => <Participant key={user.id} user={user} />)
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