import axios from 'axios';

// Register User
const register = async (data) => {
	const { firstname, surname, gender, date, email, password, userclass } =
		data;
	const response = await axios.post(`http://localhost:5000/api/users/`, {
		firstname,
		surname,
		gender,
		date,
		email,
		password,
		userclass,
	});

	if (response.data) {
		localStorage.setItem('user', JSON.stringify(response.data));
	}
	return response.data;
};

// login User
const login = async (data) => {
	const { email, password } = data;
	const response = await axios.post(`http://localhost:5000/api/users/login`, {
		email,
		password,
	});

	if (response.data) {
		localStorage.setItem('user', JSON.stringify(response.data));
	}
	return response.data;
};

//Logout
const logout = () => localStorage.removeItem('user');

const authService = {
	register,
	logout,
	login,
};

export default authService;
