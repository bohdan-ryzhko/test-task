import sass from "./MyForm.module.scss";
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import { initialValues } from "services/initialValues";
import { validationSchema } from "services/validationSchema";
import { Button } from "components/Button/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import succesImage from "../../images/success-image.svg";
// import { ToastContainer, toast } from 'react-toastify';

export const MyForm = () => {
	const [isLoadPhoto, setLoadPhoto] = useState("");
	const [checkedBoxes, setCheckedBoxes] = useState([]);
	const [token, setToken] = useState("");
	const [errors, setError] = useState(null);
	const [successRegistered, setSuccessRegistered] = useState(null);

	const errorsArray = [];

	if (errors) {
		for (let key in errors.fails) {
			errorsArray.push(errors.fails[key]);
		}
	}

	useEffect(() => {
		axios.get("https://frontend-test-assignment-api.abz.agency/api/v1/token")
			.then(({ data: { token } }) => setToken(token));
	}, []);

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: async () => {
			const postUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1/users';
			try {
				const formData = new FormData();
				const { name, email, phone, position, userPhoto } = formik.values;
				formData.append("position_id", Number(position));
				formData.append("name", name);
				formData.append("email", email);
				formData.append("photo", userPhoto);
				formData.append("phone", phone);

				const options = {
					method: "POST",
					headers: {
						'Token': token
					},
					body: formData
				}

				fetch(postUrl, options)
					.then(res => res.json())
					.then(data => {
						if (!data.success) {
							return Promise.reject(data);
						}
						setSuccessRegistered(data);
						console.log(data);
					})
					.catch(error => setError(error));
			} catch (error) {
				console.log(error);
			}
		}
	});

	useEffect(() => {
		axios.get("https://frontend-test-assignment-api.abz.agency/api/v1/positions")
			.then(({ data: { positions } }) => setCheckedBoxes(positions));
	}, []);

	const handlePhoto = ({ target }) => {
		formik.setFieldValue("userPhoto", target.files[0]);
		if (target.value) {
			setLoadPhoto(target.value);
		} else {
			setLoadPhoto("");
		}
	}

	return (
			<form onSubmit={formik.handleSubmit} className={sass.form}>
				<div className={sass.formTop}>
					<label htmlFor="name">
						<input
							onChange={formik.handleChange}
							id="name"
							className={sass.formInput}
							name="name"
							autoComplete="off"
							autoFocus
							type="text"
							placeholder="Your name"
						/>
					</label>
					<label htmlFor="email">
						<input
							onChange={formik.handleChange}
							id="email"
							className={sass.formInput}
							name="email"
							autoComplete="off"
							autoFocus
							type="email"
							placeholder="Email"
						/>
					</label>
					<label htmlFor="phone">
					<input
						onChange={formik.handleChange}
						id="phone"
						className={sass.formInput}
						name="phone"
						autoComplete="off"
						autoFocus
						type="phone"
						placeholder="Phone"
					/>
						<p className={sass.formPhone}>+38 (XXX) XXX - XX - XX</p>
					</label>
			</div>
						<p className={sass.positionTitle}>Select your position</p>
						<div className={sass.formPositions}>
						{
							checkedBoxes.length > 0 &&
							checkedBoxes.map(({ name, id }) => (
								<label key={id} htmlFor={name}>
									<input onChange={formik.handleChange} id={name} type="radio" name="position" value={Number(id)} />
									<span className={sass.customCheckbox} />
									{name}
								</label>
							))
						}
					</div>
				<label className={isLoadPhoto ? sass.user__photoLabelActive : sass.user__photoLabel} htmlFor="userPhoto">
					<input
						onChange={handlePhoto}
						id="userPhoto"
						accept=".jpg"
						type="file"
						name="userPhoto"
				/>
				{isLoadPhoto ? isLoadPhoto : "Upload your photo"}
			</label>
			{
				errors &&
				(<>
					<h4 className={sass.errorTitle}>{errors.message}</h4>
					<ul className={sass.errorList}>
						{errorsArray.map(error => <li className={sass.errorItem} key={error}>{error}</li>)}
					</ul>
				</>
				)
			}
			{
				successRegistered &&
				(
					<>
						<h4 className={sass.successTitle}>{successRegistered.message}</h4>
						<img className={sass.successImg} src={succesImage} alt="User successfully registered" />
					</>
				)
			}
				<Button text="Sign up" type="submit" disabled={false} />
			</form>
	)
}