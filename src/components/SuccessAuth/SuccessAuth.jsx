import sass from "./SuccessAuth.module.scss";

export const SuccessAuth = ({ photo, email, name }) => {
	return (
		<div className={sass.successWrapper}>
			<img width={50} height={50} className={sass.userPhoto} src={photo} alt="Avatar" />
			<p>{email}</p>
			<p>{name}</p>
		</div>
	)
}