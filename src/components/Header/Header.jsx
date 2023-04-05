import sass from "./Header.module.scss";
import logo from "../../images/logo.svg";
import { RxHamburgerMenu } from 'react-icons/rx';

export const Header = ({ onSignUp, setOnSignUp, setToggleMenu }) => {
	return (
		<header className={sass.header}>
			<div className="container">
				<div className={sass.header__inner}>
					<div className={sass.logo}>
						<button onClick={() => setToggleMenu(prev => !prev)} className={sass.burgerBtn}>
							<RxHamburgerMenu size={25} />
						</button>
						<a href="/" className="logo-link">
							<img className={sass.logoImg} src={logo} alt="Logo" />
						</a>
					</div>
					<div className={sass.header__authorization}>
						<button className={sass.signUp} onClick={() => setOnSignUp(true)}>
							{
								onSignUp
									? "Authorized"
									: "Sign up"
							}
						</button>
					</div>
				</div>
			</div>
		</header>
	)
}