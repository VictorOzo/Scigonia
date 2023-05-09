const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModels');

// @description  Register a new user
// @route  /api/users
// @access  public
const registerUser = asyncHandler(async (req, res) => {
	console.log(req.body);
	const { firstname, surname, gender, email, date, userclass, password } =
		req.body;

	// Validation
	if (
		!firstname ||
		!surname ||
		!gender ||
		!email ||
		!date ||
		!userclass ||
		!password
	) {
		return res.status(400).json({ message: 'Include all fields' });
	}
	// Find if user already exists
	const userExists = await User.findOne({ email });
	if (userExists) {
		throw new Error(`User ${email} already exists`);
	}
	// Hash Password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	// Create User
	const user = await User.create({
		firstname,
		surname,
		gender,
		email,
		date,
		userclass,
		password: hashedPassword,
	});

	if (user) {
		res.status(201).json({
			_id: user._id,
			name: user.firstname + ' ' + user.surname,
			userclass: user.userclass,
			gender: user.gender,
			date: user.date,
			email: user.email,
			token: generateToken(user._id),
		});
	} else {
		res.status(404);
		throw new Error('invalid user data');
	}
});

// @description  login user
// @route  /api/users/login
// @access  public
const loginUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });

	if (user && (await bcrypt.compare(password, user.password))) {
		res.status(200).json({
			_id: user._id,
			name: user.firstname,
			email: user.email,
			userclass: user.userclass,
			token: generateToken(user._id),
		});
	} else {
		res.status(401);
		throw new Error('Invalid User Credentials');
	}
});

// @description  update user
// @route  PUT /api/users/update
// @access  private
const updateUser = asyncHandler(async (req, res) => {
	const { name } = req.body;

	try {
		const user = await User.findByIdAndUpdate(
			{ _id: req.user._id },
			{ name },
			{ new: true }
		);
		res.status(200).json(user);
	} catch (error) {
		console.log(error);
		res.status(400).json({ message: 'Error updating user data' });
	}
});

// @description  Get current user
// @route  /api/users/me
// @access  private
const getMe = asyncHandler(async (req, res) => {
	const user = {
		id: req.user._id,
		email: req.user.email,
	};
	res.status(200).json(user);
});


// Generate a token
const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: '30d',
	});
};

module.exports = {
	registerUser,
	loginUser,
	updateUser,
	getMe,
};
