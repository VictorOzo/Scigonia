import './landing.css';
import Card from '../../card/Card';
import sdg4 from '../../../images/sdg4.jpg';
import logo from '../../../images/logo.png';
import { useEffect, useState } from 'react';
import Data from '../../card/desc';
import { login, reset } from '../../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

export const Landing = () => {
	const { register, handleSubmit } = useForm();
	const [active, setActive] = useState('student');
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
			navigate('dashboard');
		}
		dispatch(reset());
	}, [navigate, user, success]);

	const submitForm = (data) => {
		console.log(data);
		dispatch(login(data));
	};

	return (
		<div className='landing'>
			<div className='heroSection '>
				<div className='nav-items'>
					<div className='nav flex justify-between items-center w-[80%] mt-4 bg-transparent '>
						<div className='nav-logo bg-transparent'>
							<img
								src={logo}
								alt=''
								className='w-[200px] bg-transparent'
							/>
						</div>
						<div className='navlinks bg-transparent'>
							<a
								className='text-decoration-none text-white  text-2xl font-bold  mr-10 bg-transparent'
								href=''>
								Sign In
							</a>
							<a
								className='text-decoration-none text-white border-white border-2 rounded py-2 px-2 bg-transparent'
								href='signup'>
								Create Account
							</a>
						</div>
					</div>
				</div>
				<div className='hero bg-transparent'>
					<div className='circleimg bg-transparent'>
						<div className='circle1 w-[500px] h-[500px] rounded-full bg-blue-700'></div>
						<div className='circle2 w-[500px] h-[500px] rounded-full bg-blue-700'></div>
						<p className='text-white text-2xl bg-transparent'>
							Connect, Share Knowledge,
							<br />
							Share Experience, Gain Knowledge,
							<br />
							Build Friendship, Share Encourage,
							<br /> and earn income with Scigonia,
						</p>
					</div>
					<div className='heroform bg-transparent '>
						<form
							onSubmit={handleSubmit(submitForm)}
							className='bg-transparent'>
							<input
								type='text'
								placeholder='Email Address'
								className='px-3'
								{...register('email', { required: true })}
							/>
							<br />
							<input
								type='password'
								placeholder='Password'
								className='mt-[30px] px-3'
								{...register('password', { required: true })}
							/>
							<br />
							<input
								type='submit'
								value='Sign In'
								className='bg-blue-600 rounded text-white text-decoration-none h-[0px] mt-3 w-[400px] px-[160px]'
							/>
						</form>
					</div>
				</div>
			</div>

			<div className='aboutScigonia bg-white '>
				<div className='aboutSciText bg-transparent w-[80%]'>
					<h2 className='bg-transparent font-bold text-[40px]'>
						More About Scigonia
					</h2>
					<p className='bg-transparent text-[24px] '>
						The name Scigonia is derived from the words: "Scientia" and
						"Gonia". Scientia is a latin word, the languagae from the
						ancient romans from which the modern English word "Science" is
						derived. It means "Knowledge". Gonia is an ancient greek word
						which means "Creating" from which the ending of the modern
						English word "Cosmogony" (The study of the origin of the
						universe) is derived.
					</p>
				</div>
			</div>
			<div className='experience bg-gray-400 p-7 '>
				<div className='exText bg-transparent w-[80%]'>
					<div className='eheader bg-transparent'>
						<div className='headertext bg-transparent'>
							<h2 className='bg-transparent'>The Experience Scigonia</h2>
							<button
								onClick={() => setActive('student')}
								className='px-3 py-2 text-decoration-none rounded '>
								Student
							</button>
							<button
								onClick={() => setActive('teacher')}
								className='px-3 py-2 text-decoration-none rounded '>
								Teachers
							</button>
							<button
								onClick={() => setActive('parent')}
								className='px-3 py-2 text-decoration-none rounded '>
								Parents
							</button>
							<button
								onClick={() => setActive('professional')}
								className='px-3 py-2 text-decoration-none rounded '>
								Professionals
							</button>
							<button
								onClick={() => setActive('others')}
								className='px-3 py-2 text-decoration-none rounded '>
								Others
							</button>
						</div>
					</div>
					<hr />
					{active === 'student' && <Card cardIndex={0} data={Data} />}
					{active === 'teacher' && <Card cardIndex={1} data={Data} />}
					{active === 'parent' && <Card cardIndex={2} data={Data} />}
					{active === 'professional' && <Card cardIndex={3} data={Data} />}
					{active === 'others' && <Card cardIndex={4} data={Data} />}
				</div>
			</div>
			<div className='ucbiSection bg-white'>
				<div className='ucbiText bg-transparent w-[80%] '>
					<div className='ucbiImage bg-transparent '>
						<img src={sdg4} />
					</div>
					<div className='bg-transparent'>
						<div className='ucbiheader bg-transparent'>
							<h3 className='bg-transparent'>
								Universal Conditional Basic Income
							</h3>
							<p className='bg-transparent'>
								Through a Universal Conditional Basic Income framework,
								Scigonia provides teachers, especially in low income
								countries with a means of increasing their earnings so
								as to reduce their personal financial anxieties which
								may and often do affect their commitment to their
								important job. This is one 17 target sub-goals on a
								United Nations SDG4 program on quality education,
								adopted by government, that Scigonia was purpose
								designed for one of its tool components. We also provide
								all income opportunity to all parents with children in
								school and students above 12 years old.
							</p>
						</div>
					</div>
				</div>
			</div>
			<footer>
				<div className='footer bg-transparent'>
					<p className='bg-transparent'>
						&#169;2020. Scigonia is a unit of Kungliga Utvecklingsbolag i
						Eddalands och Skandinavien
					</p>
					<div className='footerlinks bg-transparent'>
						<ul>
							<li>
								<a href=''>Terms of use</a>
							</li>
							<li>
								<a href=''>Privacy Policy</a>
							</li>
							<li>
								<a href=''>Community Rules</a>
							</li>
							<li>
								<a href=''>UN SDG4</a>
							</li>
							<li>
								<a href=''>HyperClass</a>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</div>
	);
};
