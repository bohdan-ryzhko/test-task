import { useEffect, useState } from "react";
import { getAuth, signInWithPopup } from "firebase/auth";
import { app, googleAuthProvider } from "../../firebase/firebase";
import { UnAuth } from "components/UnAuth/UnAuth";
import { SuccessAuth } from "components/SuccessAuth/SuccessAuth";

export const AuthProvider = ({ onSignUp }) => {
	const auth = getAuth(app);
	const [user, setUser] = useState(auth.currentUser);
	console.log(user);

	useEffect(() => {
		if (onSignUp) {
			const unsub = auth.onAuthStateChanged(maybeUser => {
				if (maybeUser !== null) {
					return setUser(maybeUser);
				}

				signInWithPopup(auth, googleAuthProvider)
					.then(credentials => setUser(credentials.user))
					.catch(error => console.error(error));
			})
		return unsub;
		}

	}, [onSignUp, auth])

	return (
		user !== null
			?(
				<>
					<SuccessAuth photo={user && user.photoURL} email={user.email} name={user.displayName} />
					{/* <img width={100} height={100} className={sass.userPhoto} src={user && user.photoURL} alt="Avatar" />
					<p>{user.displayName}</p> */}
				</>
			)
			: <UnAuth />
	)
}