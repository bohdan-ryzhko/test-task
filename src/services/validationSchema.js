import * as yup from 'yup';

const regexEmail = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[x01-x08x0bx0cx0e-x1fx21x23-x5bx5d-x7f]|\\[x01-x09x0bx0cx0e-x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[x01-x08x0bx0cx0e-x1fx21-x5ax53-x7f]|\\[x01-x09x0bx0cx0e-x7f])+)\])/;

export const validationSchema = yup.object().shape({
	name: yup.string().min(2).max(60).required()
		.test(
			"Invalid-name",
			'',
			(value) => value && (value.length > 2 && value.length < 60)
		),
	email: yup.string().min(2).max(100).required()
		.test(
			"Invalid-email",
			'Prompt: "test@example.com"',
			(value) => value && value.match(regexEmail)
		),
	phone: yup.string().required()
		.test(
			"Invalid-phone",
			"Please, enter valid phone",
			(value) => value && value.match(/^[+]{0,1}380([0-9]{9})/)
		),
	position: yup.number(),
	userPhoto: yup.mixed().required()
		.test("FILE_SIZE", "Less than 5MB", (value) => value && value.size < 5e+6)
});
