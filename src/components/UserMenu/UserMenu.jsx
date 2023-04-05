import sass from "./UserMenu.module.scss";
import { AuthProvider } from "components/AuthProvider/AuthProvider";

import { CgClose } from 'react-icons/cg';

export const UserMenu = ({ onSignUp, setOnSignUp, toggleMenu, setToggleMenu }) => {

	return (
		<>
			<div className={toggleMenu ? `${sass.backdropActive}` : `${sass.backdrop}`}></div>
			<div className={toggleMenu ? `${sass.menuActive}`: `${sass.menu}`}>
				<button className={sass.buttonClose} onClick={() => setToggleMenu(prev => !prev)}>
					<CgClose size={25} />
				</button>
				<AuthProvider onSignUp={onSignUp} setOnSignUp={setOnSignUp} />
			</div>
		</>
	)
}