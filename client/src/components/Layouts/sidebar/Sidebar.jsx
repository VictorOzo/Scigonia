import './sidebar.css';
import profileimg from '../../../images/profileimg.jpg';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setCredentials } from '../../../features/auth/authSlice';

export const Sidebar = () => {
	const { user } = useSelector((state) => state.auth);
	// console.log(user);
	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	if (user) dispatch(setCredentials(user));
	// }, [user, dispatch]);

	return (
		<div className='sidebar'>
			<div className='userInfo'>
				<div className='img'>
					<img src={profileimg} alt='img' />
				</div>
				<div className='userinfotext bg-transparent'>
					<h3 className='name bg-transparent'>{user.name}</h3>
					<p className='userClass bg-transparent '>{user.userclass}</p>
				</div>
			</div>
			<div className='profile'>
				<ul className='bg-transparent'>
					<li>
						<a href='/dashboard' className='text-decoration-none'>
							Home
						</a>
					</li>
					<li>
						<a href='/edit' className='text-decoration-none'>
							Profile
						</a>
					</li>
					<li>
						<a href='/friends' className='text-decoration-none'>
							Friends
						</a>
					</li>
					<li>
						<a href='/invite' className='text-decoration-none'>
							Invites
						</a>
					</li>
					<li>
						<div className='dropdown bg-transparent'>
							<div
								href=''
								className='text-decoration-none bg-transparent'>
								More
								<i className='fa-solid fa-caret-down bg-transparent ml-2'></i>
								<div className='dropdown-content'>
									<a href='/vault'>Vault</a>
									<a href='/version'>Version</a>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};
