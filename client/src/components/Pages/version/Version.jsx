import { Sidebar } from '../../Layouts/sidebar/Sidebar';
import profileimg from '../../../images/profileimg.jpg';
import infoimg from '../../../images/infoimg.jpg';
import './version.css';

export const Version = () => {
	return (
		<div className='version'>
			<Sidebar />
			<div className='versionSection'>
				<div className='versionBox'>
					<div className='versionHeader bg-transparent'>
						<div className='versionhead bg-transparent'>
							<h2 className='bg-transparent text-3xl font-bold'>
								Versions
							</h2>
						</div>
						<div className='versionlink bg-transparent'>
							<div className='links bg-transparent rounded py-1 px-1 flex'>
								<a
									href=''
									className='bg-blue-500 text-white text-decoration-none text-[12px] mr-3 py-2 px-3 rounded'>
									Gray
								</a>
								<a
									href='./mint'
									className='bg-transparent text-decoration-none text-[10px] text-black py-2 px-3'>
									Mint
								</a>
							</div>
						</div>
					</div>
					<hr />
					<div className='versionBody bg-transparent'>
						<div className='versionBodyText bg-transparent'>
							<p className='bg-transparent'>
								Scigonia Gray is your default version of Scigonia. By
								default, Scigonia is free and offers you premium
								experience in conectiong with those relevant to your
								knowledge environment beyond the limits of space and
								time.
								<br />
								<br />
								You can escape your Scigonia Gray Account to thea
								non-default version that uses a virtual currency pegged
								at par with the value of $1 worth of Gold in real world
								of currencies to provide means of earning income and
								encourage individuals to support functional education
								that meets knowledge and skills needs for addressing
								present world concerns, inline with United Nations
								Sustainable Development goal no.4 for countries. That is
								quality education.
							</p>
							<hr />
							<div className='withdrawlink bg-transparent'>
								<p className='bg-transparent mr-3'>Withdraw</p>
								<i className='fa-solid fa-forward bg-transparent'></i>
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
								Choices are what shape our ends. They are the building bricks of all human destinies. Your choice of Scigonia type or version makes only some differences between ends. But whatever you choose is a choice between two goods. Not so often to have the luxuy of choosing between good and good.
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
