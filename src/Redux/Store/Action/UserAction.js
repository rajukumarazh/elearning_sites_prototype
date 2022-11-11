import { GET_USERS, USERS_ERROR } from '../types';
import axios from 'axios';
export const getUsers = () => async (dispatch) => {
	try {
		const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
		console.log('res', res);
		dispatch({
			type: GET_USERS,
			payload: res.data,
		});
	} catch (error) {
		dispatch({
			type: USERS_ERROR,
			payload: error,
		});
	}
};
