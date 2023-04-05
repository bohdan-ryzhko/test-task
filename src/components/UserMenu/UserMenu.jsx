import sass from "./UserMenu.module.scss";
import { AuthProvider } from "components/AuthProvider/AuthProvider";
import { CgClose } from 'react-icons/cg';

export const UserMenu = ({ user, setUser, onSignUp, setOnSignUp, toggleMenu, setToggleMenu }) => {
	return (
		<>
			<div onClick={() => setToggleMenu(prev => !prev)} className={toggleMenu ? `${sass.backdropActive}` : `${sass.backdrop}`}></div>
				<div className={toggleMenu ? `${sass.menuActive}`: `${sass.menu}`}>
					<button className={sass.buttonClose} onClick={() => setToggleMenu(prev => !prev)}>
						<CgClose size={25} />
					</button>
				<AuthProvider user={user} setUser={setUser} onSignUp={onSignUp} setOnSignUp={setOnSignUp} />
			</div>
		</>
	)
}