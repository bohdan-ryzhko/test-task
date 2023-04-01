import sass from "./MyForm.module.scss";
import { Formik, Field, Form } from 'formik';
import { initialValues } from "services/initialValues";
import { validationSchema } from "services/validationSchema";

export const MyForm = () => {

	const submitForm = (values, { resetForm }) => {
		console.log(values);
		resetForm();
	}

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={submitForm}
		>
			<Form className={sass.form}>
				<label htmlFor="userName">
					<Field
						id="userName"
						className="SearchForm-input"
						name="userName"
						autoComplete="off"
						autoFocus
						type="text"
						placeholder="Your name"
					/>
				</label>
				<label htmlFor="email">
					<Field
						id="email"
						className="SearchForm-input"
						name="email"
						autoComplete="off"
						autoFocus
						type="email"
						placeholder="Email"
					/>
				</label>
				<label htmlFor="phone">
					<Field
						id="phone"
						className="SearchForm-input"
						name="phone"
						autoComplete="off"
						autoFocus
						type="phone"
						placeholder="Phone"
					/>
				</label>
				<p className="position">Select your position</p>
				<label htmlFor="frontend">
					<Field id="frontend" type="checkbox" name="checked" value="Frontend developer" />
					Frontend developer
				</label>
				<label htmlFor="backend">
					<Field id="backend" type="checkbox" name="checked" value="Backend developer" />
					Backend developer
				</label>
				<label htmlFor="designer">
					<Field id="designer" type="checkbox" name="checked" value="Designer" />
					Designer
				</label>
				<label htmlFor="QA">
					<Field id="QA" type="checkbox" name="checked" value="QA" />
					QA
				</label>
				<label htmlFor="userPhoto">
					<Field id="userPhoto" accept=".jpg" type="file" name="userPhoto" />
				</label>
				<button className="submitBtn" type="submit">Sign up</button>
			</Form>
		</Formik>
	)
}