import { useEffect } from "react";
import { getAuth, signInWithPopup } from "firebase/auth";
import { app, googleAuthProvider } from "../../firebase/firebase";
import { UnAuth } from "components/UnAuth/UnAuth";
import { SuccessAuth } from "components/SuccessAuth/SuccessAuth";

export const AuthProvider = ({ user, setUser, onSignUp }) => {
	const auth = getAuth(app);

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

	}, [onSignUp, auth, setUser]);

	return (
		user !== undefined
			?(
				<>
					<SuccessAuth photo={user && user.photoURL} email={user && user.email} name={user && user.displayName} />
				</>
			)
			: <UnAuth />
	)
}