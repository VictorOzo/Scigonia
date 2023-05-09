import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Error from '../../Error';
import { registerUser, reset } from '../../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';


export const Signup = () => {
	const { register, handleSubmit } = useForm();
	const [customError, setCustomError] = useState(null);
	const { user, loading, success, message, error } = useSelector(
		(state) => state.auth
	);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (error) {
			console.log(error);
		}
		// redirect if successful
		if (success || user) {
			navigate('/dashboard');
		}
		dispatch(reset());
	}, [navigate, user, success]);

	const submitForm = (data) => {
		console.log(data);
		dispatch(registerUser(data));
	};

	return (
		<div className='flex justify-center items-center h-auto '>
			<form
				onSubmit={handleSubmit(submitForm)}
				className='w-4/6 shadow-lg rounded-lg justify-center p-10 bg-white'>
				{error && <Error>{error}</Error>}
				{customError && <Error>{customError}</Error>}

				<div className='h-20 flex justify-center items-center bg-white'>
					<h2 className='text-3xl font-bold bg-white'>
						Sign up to Scigonia
					</h2>
				</div>
				<input
					type='text'
					placeholder='First Name'
					{...register('firstname', { required: true })}
					className='shadow rounded-lg mr-5 border-2 border-gray-500 h-12 w-96 mb-3 bg-white'
				/>
				<input
					type='text'
					placeholder='SurName'
					{...register('surname', { required: true })}
					className='w-50 shadow rounded-lg border-2 border-gray-500 h-12 w-96  mb-3 bg-white'
				/>
				<br />
				<div className='flex justify-start items-center bg-white'>
					<label className='font-bold mr-16 text-2xl bg-white'>
						Gender:
					</label>
					<input
						{...register('gender')}
						type='radio'
						id='male'
						name='gender'
						value='male'
						className='mr-3'
					/>
					<label htmlFor='male' className='mr-3 font-bold bg-white'>
						Male
					</label>
					<input
						{...register('gender')}
						type='radio'
						id='female'
						name='gender'
						value='female'
						className='mr-3 bg-white'
					/>
					<label htmlFor='female' className='font-bold bg-white'>
						Female
					</label>
				</div>
				<br />
				<div className='flex justify-start items-center bg-white'>
					<label
						htmlFor='date'
						className='font-bold text-2xl mr-16 bg-white'>
						Date of Birth:
					</label>
					<input
						{...register('date', { required: true })}
						type='date'
						className='
						bg-white
						w-50
						shadow
						rounded-lg
						border-2
						border-gray-500
						h-12
						w-96'
					/>
				</div>

				<br />
				<div className='bg-white'>
					<label
						htmlFor='userClass'
						className='font-bold text-2xl mr-16 bg-white'>
						User Class:
					</label>
					<select
						className='bg-white'
						{...register('userclass', { required: true })}>
						<option value=''>--Please choose an option--</option>
						<option value='parent'>Parent</option>
						<option value='student'>Student</option>
						<option value='teacher'>Teacher</option>
						<option value='Parent-Teacher'>Parent-Teacher</option>
						<option value='other'>Other</option>
					</select>
				</div>
				<br />
				<input
					type='email'
					placeholder='Email'
					{...register('email', { required: true })}
					className=' shadow rounded-lg border-2 border-gray-500 h-12 w-full mb-3 bg-white'
				/>
				<br />
				<input
					type='Password'
					placeholder='Password'
					{...register('password', { required: true })}
					className=' shadow rounded-lg border-2 border-gray-500 h-12 w-full  mb-3 bg-white'
				/>
				<br />
				{/* <input
					type='Password'
					placeholder='Confirm Password'
					{...register('confirmpassword', { required: true })}
					className='w-full shadow rounded-lg border-2 border-gray-500 h-12  mb-3 bg-white'
				/> */}
				<br />
				<input
					className='w-full bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded'
					type='submit'
					value='Create Account'
				/>
			</form>
		</div>
	);
};
