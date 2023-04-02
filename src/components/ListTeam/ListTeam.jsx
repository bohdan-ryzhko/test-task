import sass from "./ListTeam.module.scss";
import { SectionTitle } from "components/SectionTitle/SectionTitle";
import { Participant } from "components/Participant/Participant";
import { Button } from "components/Button/Button";
import { useEffect, useState } from "react";
import { Puff } from 'react-loader-spinner';
import axios from "axios";

export const ListTeam = () => {
	const [isHiddenLoadMore, setHiddenLoadMore] = useState(false);
	const [fetchUsers, setFetchUsers] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const [isLoad, setIsLoad] = useState(false);

	useEffect(() => {
		axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6`)
			.then(({ data: { total_pages, users } }) => {
				setFetchUsers(users);
				setTotalPages(total_pages);
			})
	}, []);

	useEffect(() => {
		if (page > 1) {
			setIsLoad(true);
			axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`)
				.then(({ data: { users } }) => {
					if (page === totalPages) {
						setHiddenLoadMore(true);
						setIsLoad(false);
						return setFetchUsers(prev => [...prev, ...users]);
					}
					setIsLoad(false);
					return setFetchUsers(prev => [...prev, ...users]);
				});
		}
	}, [page, totalPages]);

	const handleSetPage = () => {
		setPage(prevPage => prevPage + 1);
	}

	return (
		<section className={sass.section__team}>
			<div className="container">
				<div className={sass.team__inner}>
					<SectionTitle title="Working with GET request" />
					<ul className={sass.team__list}>
						{
							(fetchUsers.length > 0) &&
							fetchUsers.map(user => <Participant key={user.id} user={user} />)
						}
					</ul>
					<div className={sass.showMoreBtn}>
						{
							isLoad &&
							<Puff
								width={100}
								height={100}
								color="#d6c439"
								wrapperStyle={{ justifyContent: "center", marginBottom: 10 }}
							/>
						}
						{
							!isHiddenLoadMore &&
							<Button onClick={handleSetPage} type="button" text="Show more" />
						}
					</div>
				</div>
			</div>
		</section>
	)
}