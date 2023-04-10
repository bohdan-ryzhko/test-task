import axios from "axios";

axios.defaults.baseURL = "https://frontend-test-assignment-api.abz.agency/api/v1/users";

export const fetchResponse = async (page, signal) => {
	const response = await axios.get(`?page=${page}`, {
		params: {
			count: 6
		},
		signal
	});

	return response;
}