import { Sidebar } from '../../Layouts/sidebar/Sidebar';
import profileimg from '../../../images/profileimg.jpg';
import infoimg from '../../../images/infoimg.jpg';
import './mint.css';
import { useForm } from 'react-hook-form';

export const Mint = () => {
	const { register, handleSubmit } = useForm();
	return (
		<div className='mint'>
			<Sidebar />
			<div className='mintSection'>
				<div className='mintBox'>
					<div className='mintHeader bg-transparent'>
						<div className='minthead bg-transparent'>
							<h2 className='bg-transparent text-3xl font-bold'>
								Versions
							</h2>
						</div>
						<div className='mintlink bg-transparent'>
							<div className='links bg-transparent rounded py-1 px-1 flex'>
								<a
									href='./version'
									className='bg-transparent text-decoration-none text-[10px] text-black py-2 px-3'>
									Gray
								</a>
								<a
									href='./mint'
									className='bg-blue-500 text-white text-decoration-none text-[12px] mr-3 py-2 px-3 rounded'>
									Mint
								</a>
							</div>
						</div>
					</div>
					<hr />
					<div className='mintBody bg-transparent'>
						<div className='mintBodyText bg-transparent'>
							<p className='bg-transparent'>
								Scigonia Gray is your default version of Scigonia. By
								default, Scigonia is free and offers you premium
								experience in conectiong with those relevant to your
								knowledge environment beyond the limits of space and
								time.
								<br />
								<br />
								This Version of Scigonia is designed to fullfill a
								Universal Conditional Basic Income opportunity to
								individuals, with greater consideration for teachers as
								a means of increasing their income so as to reduce
								financial anxiety that may affect their commitment ti
								their jobs. It serves as a means of providing a side
								income to parents, especially in education of their
								children and to young people as a means of addressing
								child poverty. If you are not a student, teacher or
								parent, this version of Scigonia still provides you a
								means of earning side income to help you care better for
								ypur personal developmeneet needs.
								<br />
								<br />
								You can escape your account to a Scigonis Mint
								sub-package for a period of your choosing at a cost in
								your local eguivalent of Scicoins and start earning
								Scicoins into your vault. Your Scigonia accounr would
								revert to default Scigonia Gray at the end of your
								chosen period.
							</p>
							<hr />
							<div className='periodSection bg-transparent'>
								<div className='periodSelect bg-transparent'>
									<select
										className='bg-white'
										{...register('period', { required: true })}>
										<option value=''>Mint Options</option>
										<option value='localbank '>
											Mantalig (1month)
										</option>
										<option value='usdt'>Quaterly (3months)</option>
										<option value='usdt'>
											Vartannatar (6months)
										</option>
										<option value='usdt'>Arlig (12months)</option>
									</select>
								</div>
								<div className='bg-transparent'>
									<p className='bg-transparent mr-3'>
										Escape{' '}
										<i className='fa-solid fa-forward bg-transparent'></i>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='infoContainer'>
					<div className='inviteinfoimg'>
						<img src={infoimg} alt='' />
					</div>
					<div className='messageContainer'>
						<div className='img bg-transparent'>
							<img src={profileimg} alt='' />
						</div>
						<div className='infotext bg-transparent'>
							<p className='bg-transparent'>
								You receive S2 for each new accounr created on your invitation that escapes to mint as a parent and S4 if you are a  teacher. You receive credit to hail education quality and functional advisors to visit your school and deliver centrally developed school based workshop and seminars with experts from World Bank, UNESCO, UNICEF, OCED, to teachers and students.
							</p>
						</div>
					</div>
					<p className='mt-[10px] w-[230px] text-[10px]'>
						Created with love from Eddaland to the world 2014. Scigonia is
						a brand of BWP Utvecklingsbolag
					</p>
					<p className='text-[8px]'>UCBI. SDG 4. Policy and Privacy</p>
				</div>
			</div>
		</div>
	);
};
