import sass from "./MyForm.module.scss";
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import { initialValues } from "services/initialValues";
import { validationSchema } from "services/validationSchema";
import { Button } from "components/Button/Button";
import { useState } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from 'react-toastify';

export const MyForm = () => {

	let [isLoadPhoto, setLoadPhoto] = useState("");

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: async () => {
			// const postUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1/users/';
			// const { email, name, phone, checked, userPhoto } = formik.values;
			try {
				// const formData = new FormData();
				// formData.append("email", email);
				// formData.append("name", name);
				// formData.append("phone", phone);
				// formData.append("checked", checked);
				// formData.append("userPhoto", userPhoto);
				// formData.append("position_id", 2);
				// const res = await axios.post(postUrl, formData);

				// console.log(res);
				console.log(formik.values);
			} catch (error) {
				console.log(error);
			}
		}
	});

	const handlePhoto = ({ target }) => {
		formik.setFieldValue("userPhoto", target.files[0]);
		if (target.value) {
			setLoadPhoto(() => isLoadPhoto = target.value);
		} else {
			setLoadPhoto(() => isLoadPhoto = "");
		}
	}

	return (

			<form onReset={formik.resetForm} onSubmit={formik.handleSubmit} className={sass.form}>
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
						<label htmlFor="frontend">
							<input id="frontend" type="checkbox" name="checked" value="Frontend developer" />
							<span className={sass.customCheckbox} />
							Frontend developer
						</label>
						<label htmlFor="backend">
							<input onChange={formik.handleChange} id="backend" type="checkbox" name="checked" value="Backend developer" />
							<span className={sass.customCheckbox} />
							Backend developer
						</label>
						<label onChange={formik.handleChange} htmlFor="designer">
							<input id="designer" type="checkbox" name="checked" value="Designer" />
							<span className={sass.customCheckbox} />
							Designer
						</label>
						<label htmlFor="QA">
							<input onChange={formik.handleChange} id="QA" type="checkbox" name="checked" value="QA" />
							<span className={sass.customCheckbox} />
							QA
						</label>
					</div>
				<label className={isLoadPhoto ? sass.user__photoLabelActive : sass.user__photoLabel} htmlFor="userPhoto">
					<input
						onChange={handlePhoto}
						id="userPhoto"
						accept=".jpg"
						type="file"
						name="userPhoto"
				/>
				{isLoadPhoto ? isLoadPhoto : "Upload your photo" }
				</label>
				<Button text="Sign up" type="submit" disabled={false} />
			</form>
	)
}