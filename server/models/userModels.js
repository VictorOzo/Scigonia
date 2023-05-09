const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
	{
		firstname: {
			type: 'string',
			required: [true, 'Please add your First Name'],
		},
		surname: {
			type: 'string',
			required: [true, 'Please add your Surame'],
		},
		gender: {
			type: 'string',
			required: [true, 'Please add your gender'],
		},
		email: {
			type: 'string',
			required: [true, 'Please add your email address'],
		},
		date: {
			type: 'string',
			// required: [true, 'Please add your date of birth'],
		},
		userclass: {
			type: 'string',
			// required: [true, 'Please achoose a user class'],
		},
		password: {
			type: 'string',
			required: [true, 'Please add a password'],
		},
		
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('User', userSchema);
