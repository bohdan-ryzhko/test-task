import { array, object, string } from 'yup';

export const validationSchema = object().shape({
	userName: string().required(),
	email: string().required(),
	phone: string().required(),
	checked: array().of(string()),
	userPhoto: string().required()
})