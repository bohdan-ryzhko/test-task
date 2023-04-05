import sass from "./Header.module.scss";
import logo from "../../images/logo.svg";
import { Button } from "components/Button/Button";

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
						<a className={sass.headerAnchor} href="#users">Users</a>
						<Button text="Sign up" type="button" disabled={false} />
					</div>
				</div>
			</div>
		</header>
	)
}