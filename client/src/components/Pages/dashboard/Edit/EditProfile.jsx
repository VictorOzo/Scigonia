import './edit.css';
import { Sidebar } from '../../../Layouts/sidebar/Sidebar';
import { useForm } from 'react-hook-form';

export const EditProfile = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<div className='edit'>
			<Sidebar />
			<div className='editContainer'>
				<div className='flex justify-center items-center h-auto '>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className=' shadow-lg rounded-lg justify-center p-10 bg-white'>
						<div className='h-20 flex justify-start items-center bg-white'>
							<h2 className='text-3xl font-bold bg-white'>
								Update Your Profile
							</h2>
						</div>
						<input
							type='text'
							placeholder='School Name'
							{...register('school', { required: true })}
							className='shadow rounded-lg w-96 mr-5 border-2 border-gray-500 h-12 mb-3 bg-white'
						/>
						<input
							type='text'
							placeholder='Class'
							{...register('class', { required: true })}
							className='w-30 shadow rounded-lg border-2 border-gray-500 h-12  mb-3 bg-white'
						/>
						<br />
						<input
							type='text'
							placeholder='Country'
							{...register('country ', { required: true })}
							className='w-50 shadow rounded-lg border-2 mr-5 border-gray-500 h-12 w-96 mb-3 bg-white'
						/>
						<input
							type='text'
							placeholder='State/Province'
							{...register('state/province', { required: true })}
							className='w-30 shadow rounded-lg border-2 border-gray-500 h-12  mb-3 bg-white'
						/>
						<br />
						<input
							type='text'
							placeholder='City'
							{...register('city', { required: true })}
							className='w-30 shadow mr-5 rounded-lg border-2 border-gray-500 h-12  mb-3 bg-white'
						/>
						<input
							type='text'
							placeholder='Neighbourhood (optional)'
							{...register('neighbourhood', { required: true })}
							className='w-30 shadow rounded-lg border-2 border-gray-500 h-12  mb-3 bg-white'
						/>
						<br/>
						<input
							type='text'
							placeholder='Education and Career Interest'
							{...register('city', { required: true })}
							className='w-96  mr-5 shadow rounded-lg border-2 border-gray-500 h-12  mb-3 bg-white'
						/>
						
						<input
							className='w-30 bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded'
							type='submit'
							value='Save Changes'
						/>
					</form>
				</div>
			</div>
		</div>
	);
};
