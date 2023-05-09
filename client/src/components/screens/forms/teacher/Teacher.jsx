import './teacher.css';
import { useForm } from 'react-hook-form';

export const Teacher = () => {
    const { register, handleSubmit } = useForm();
    	
	return (
		<div className='teacherFormContainer'>
			<div className='flex justify-center items-center h-auto '>
				<form
					onSubmit={handleSubmit()}
					className=' shadow-lg rounded-lg justify-center p-10 bg-white'>
					<div className='h-20 flex justify-start items-center bg-white'>
						<h2 className='text-3xl font-bold bg-white'>
							Update Your Profile(teacher)
						</h2>
					</div>
					<input
						type='text'
						placeholder='Email Address'
						{...register('email', { required: true })}
						className='shadow rounded-lg w-full mr-5 border-2 border-gray-500 h-12 mb-3 bg-white'
					/><br/>
					<input
						type='text'
						placeholder='School Name'
						{...register('school', { required: true })}
						className='shadow rounded-lg w-4/6 mr-5 border-2 border-gray-500 h-12 mb-3 bg-white'
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
						placeholder='Subjects'
						{...register('subjects', { required: true })}
						className='shadow rounded-lg w-96 mr-5 border-2 border-gray-500 h-12 mb-3 bg-white'
					/>
					<input
						type='text'
						placeholder='Date of Birth'
						{...register('date', { required: true })}
						className='w-30 shadow rounded-lg border-2 border-gray-500 h-12  mb-3 bg-white'
					/>
					<br />
					<input
						type='text'
						placeholder='Country'
						{...register('country', { required: true })}
						className='shadow rounded-lg w-96 mr-5 border-2 border-gray-500 h-12 mb-3 bg-white'
					/>
					<input
						type='text'
						placeholder='Neighbourhood (Optional)'
						{...register('subjects', { required: true })}
						className='shadow rounded-lg w-30 mr-5 border-2 border-gray-500 h-12 mb-3 bg-white'
					/>
					<br />
					<input
						type='text'
						placeholder='State/Province'
						{...register('state', { required: true })}
						className='shadow rounded-lg w-30 mr-5 border-2 border-gray-500 h-12 mb-3 bg-white'
					/>
					<input
						type='text'
						placeholder='City'
						{...register('city', { required: true })}
						className='shadow rounded-lg w-30 mr-5 border-2 border-gray-500 h-12 mb-3 bg-white'
					/>
					<input
						type='text'
						placeholder='Qualifications'
						{...register('qualification', { required: true })}
						className='shadow rounded-lg w-30 mr-5 border-2 border-gray-500 h-12 mb-3 bg-white'
					/>
					<input
						type='text'
						placeholder='Education'
						{...register('education', { required: true })}
						className='shadow rounded-lg w-96 mr-5 border-2 border-gray-500 h-12 mb-3 bg-white'
					/>
					<input
						className='w-30 bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded'
						type='submit'
						value='Save Changes'
					/>
				</form>
			</div>
		</div>
	);
};
