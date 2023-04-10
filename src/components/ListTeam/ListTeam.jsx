import sass from "./ListTeam.module.scss";
import { SectionTitle } from "components/SectionTitle/SectionTitle";
import { Participant } from "components/Participant/Participant";
import { Button } from "components/Button/Button";
import { useEffect, useState } from "react";
import { Puff } from 'react-loader-spinner';
import { fetchResponse } from "services/fetchResponse";

export const ListTeam = () => {
	const [isHiddenLoadMore, setHiddenLoadMore] = useState(false);
	const [fetchUsers, setFetchUsers] = useState([]);
	const [page, setPage] = useState(1);
	const [isLoad, setIsLoad] = useState(false);

	useEffect(() => {
		const controller = new AbortController();
		setIsLoad(true);
			fetchResponse(page, controller.signal)
			.then(({ data }) => {
				if (!data.success) {
					Promise.reject(data);
				}
				if (page === data.total_pages) {
					setHiddenLoadMore(true)
				}
				setFetchUsers(prevData => [...prevData, ...data.users]);
				setIsLoad(false);
			}).catch(error => {
				console.log(error.message)
			});
		return () => {
			controller.abort();
		}
	}, [page]);

	return (
		<section className={sass.section__team}>
			<div className="container">
				<div className={sass.team__inner}>
					<SectionTitle title="Section with users" />
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
							<Button onClick={() => setPage(prevPage => prevPage + 1)} type="button" text="Show more" />
						}
					</div>
				</div>
			</div>
		</section>
	)
}