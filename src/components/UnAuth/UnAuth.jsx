import sass from "./UnAuth.module.scss";
import logo from "../../images/logo.svg";

export const UnAuth = () => {
	return (
		<div className={sass.unAuth}>
			<img src={logo} alt="Logo" />
			<p>To see your name - click "Sign up"</p>
		</div>
	)
}