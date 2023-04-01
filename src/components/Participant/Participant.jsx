import sass from "./Participant.module.scss";

export const Participant = ({ item: { avatar, email, name, phone, postion } }) => {
	return (
		<li className={sass.team__item}>
			<div className={sass.team__avatar}>
				<img width={70} height={70} src={avatar} alt={name} />
			</div>
			<div className={sass.team__description}>
				<h3 className={sass.team__name}>{name}</h3>
				<p className={sass.team__descr}>{postion}</p>
				<p className={sass.team__descr}>{email}</p>
				<p className={sass.team__descr}>{phone}</p>
			</div>
		</li>
	)
}