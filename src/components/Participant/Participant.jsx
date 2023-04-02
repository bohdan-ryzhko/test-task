import sass from "./Participant.module.scss";

export const Participant = ({ user: { photo, email, name, phone, position } }) => {
	return (
		<li className={sass.team__item}>
			<div className={sass.team__avatar}>
				<img width={70} height={70} src={photo} alt={name} />
			</div>
			<div className={sass.team__description}>
				<h3 className={sass.team__name}>{name}</h3>
				<p className={sass.team__descr}>{position}</p>
				<p className={sass.team__descr}>{
					email.length === 20
						? email
						: email.slice(0, 20)+"..."
				}</p>
				<p className={sass.team__descr}>{phone}</p>
			</div>
		</li>
	)
}