import sass from "./MyForm.module.scss";
import { useFormik } from 'formik';
import { initialValues } from "services/initialValues";
import { validationSchema } from "services/validationSchema";
import { Button } from "components/Button/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import succesImage from "../../images/success-image.svg";

export const MyForm = () => {
	const [isLoadPhoto, setLoadPhoto] = useState(null);
	const [checkedRadios, setCheckedRadios] = useState([]);
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

	useEffect(() => {
		axios.get("https://frontend-test-assignment-api.abz.agency/api/v1/positions")
			.then(({ data: { positions } }) => setCheckedRadios(positions));
	}, []);

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: async () => {
			const postUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1/users';
			try {
				const formData = new FormData();
				const { name, email, phone, position, userPhoto } = formik.values;

				console.log(formik.values);

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
						setTimeout(() => setSuccessRegistered(null), 7000);
						console.log(data);
					})
					.catch(error => {
						setError(error)
						setTimeout(() => setError(null), 7000);
					});
			} catch (error) {
				console.log(error);
			}
		}
	});

	const handlePhoto = ({ target }) => {
		formik.setFieldValue("userPhoto", target.files[0]);
		if (target.value) {
			setLoadPhoto(target.value);
		} else {
			setLoadPhoto(null);
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
						type="text"
						placeholder="Your name"
					/>
					{
					formik.errors.name && (
						<p style={{fontSize: 20, color: "#7c4242"}} >{formik.errors.name}</p>
						)
					}
				</label>
				<label htmlFor="email">
					<input
						onChange={formik.handleChange}
						id="email"
						className={sass.formInput}
						name="email"
						autoComplete="off"
						type="email"
						placeholder="Email"
					/>
					{
					formik.errors.email && (
						<p style={{fontSize: 20, color: "#7c4242"}} >{formik.errors.email}</p>
						)
					}
				</label>
				<label htmlFor="phone">
					<input
						onChange={formik.handleChange}
						id="phone"
						className={sass.formInput}
						name="phone"
						autoComplete="off"
						type="phone"
						placeholder="Phone"
					/>
						<p className={sass.formPhone}>+38 (XXX) XXX - XX - XX</p>
					{
					formik.errors.phone && (
						<p style={{fontSize: 20, color: "#7c4242"}} >{formik.errors.phone}</p>
						)
					}
				</label>
			</div>
				<p className={sass.positionTitle}>Select your position</p>
				<div className={sass.formPositions}>
					{
						checkedRadios.length > 0 &&
						checkedRadios.map(({ name, id }) => (
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
					formik.errors.userPhoto && (
						<p style={{fontSize: 20, color: "#7c4242"}} >{formik.errors.userPhoto}</p>
					)
				}
				{
					errors &&
					<>
						<h4 className={sass.errorTitle}>{errors.message}</h4>
						<ul className={sass.errorList}>
							{errorsArray.map(error => <li className={sass.errorItem} key={error}>{error}</li>)}
						</ul>
					</>
				}
				{
					successRegistered &&
					<>
						<h4 className={sass.successTitle}>{successRegistered.message}</h4>
						<img className={sass.successImg} src={succesImage} alt="User successfully registered" />
					</>
				}
			<Button text="Submit" type="submit" disabled={false} />
		</form>
	)
}