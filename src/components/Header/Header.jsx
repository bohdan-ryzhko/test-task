import sass from "./Header.module.scss";
import logo from "../../images/logo.svg";

export const Header = () => {
	return (
		<header className={sass.header}>
			<div className="container">
				<div className={sass.header__inner}>
					<div className={sass.logo}>
						<a href="/" className="logo-link">
							<img className={sass.logoImg} src={logo} alt="Logo" />
							<p className={sass.logoText}>TESTTASK</p>
						</a>
					</div>
					<div className={sass.header__authorization}>
						<button className={sass.button__authorization}>Users</button>
						<button className={sass.button__authorization}>Sign up</button>
					</div>
				</div>
			</div>
		</header>
	)
}