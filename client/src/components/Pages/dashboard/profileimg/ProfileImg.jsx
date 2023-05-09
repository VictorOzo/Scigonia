import { Sidebar } from '../../../Layouts/sidebar/Sidebar';
import './profile.css';

export const ProfileImg = () => {
	return (
		<div className='profileImg'>
			<Sidebar />
			<div className='profileContainer'>
				<div className='updateheader '>
					<h2 className='font-bold text-2xl bg-white ml-5'>
						Update Your Profile
					</h2>
				</div>
				<div className='updateimg flex'>
					<div className='imgbox w-50 h-50 bg-white'>
						<img src='' alt='Profile' />
					</div>
					<div className='imgbtn bg-white '>
						<div className='btn bg-white'>
							<input
								className='w-30 bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded'
								type='submit'
								value='Upload Profile'
							/>
							<br />

							<input
								className='w-30 mt-10  bg-gray-500 hover:bg-blue-700 text-white  py-2 px-4 rounded'
								type='submit'
								value='Save Changes'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
