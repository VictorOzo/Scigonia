import logo from '../../../images/logo.png';
import profileimg from '../../../images/profileimg.jpg';
import './navbar.css';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../../../features/auth/authSlice';

export const Navbar = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);

	const onLogout = () => {
		dispatch(logout());
		navigate('/');
	};
	
	return (
		<nav className='h-24 w-full bg-great-blue  '>
			<div className='navitems'>
				<div className=' bg-great-blue '>
					<img className='w-[100px] bg-transparent' src={logo} alt='' />
				</div>

				<div className='navlinks bg-transparent flex justify-center items-center'>
					<ul className='flex bg-transparent'>
						<li>
							<a href='/'>Home</a>
						</li>
						<li>
							<a href='/'>Scigonia Gray</a>
						</li>
						<li>
							<div className='navdropdown bg-transparent'>
								<a href='/'>Menu</a>
								<div className='navdropDownContent'>
									<a href='mint'>Escape</a>
									<a href='hail'>Hail</a>
									<a href='withdraw'>Withdraw</a>
									{user ? <a onClick={onLogout}>Logout</a> : null}
								</div>
							</div>
						</li>
						<li>
							<a href='/'>
								<i className='fa-sharp fa-solid fa-bell bg-transparent '></i>
							</a>
						</li>
					</ul>
					<div className='profileimg bg-transparent'>
						<img src={profileimg} alt='' />
					</div>
				</div>
			</div>
		</nav>
	);
};
