import { Sidebar } from '../../Layouts/sidebar/Sidebar';
import infoimg from '../../../images/infoimg.jpg';
import profileimg from '../../../images/profileimg.jpg';
import './friends.css';

export const Friends = () => {
	return (
		<div className='Friends'>
			<Sidebar />
			<div className='friendSection'>
				<div className='friendsBody'>
					<div className='friendLinks bg-transparent'>
						<div className='links bg-transparent rounded py-1 px-1 flex'>
							<a
								href=''
								className='bg-blue-500 text-white text-decoration-none text-[10px] mr-3 py-1 px-1 rounded'>
								View Friends
							</a>
							<a
								href=''
								className='bg-transparent text-decoration-none text-[10px] text-black py-1 px-1'>
								Find Friends
							</a>
						</div>
					</div>
					<hr />
					<div className='friendsBox bg-transparent'>
						<div className='viewFriends '>
							<div className='friendsHeader bg-transparent'>
								<h2 className='bg-transparent text-[20px] font-bold'>
									Friends
								</h2>
								<p className='bg-transparent text-[12px]'>
									Only your friends can send you a direct message
								</p>
							</div>
							<hr />
							<div className='friendList'>
								<div className='friendsItem'>
									<img src={profileimg} alt='' />
									<p>City,State</p>
									<a
										href=''
										className=' text-decoration-none text-[10px] bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded'>
										Defriend
									</a>
								</div>
								<div className='friendsItem'>
									<img src={profileimg} alt='' />
									<p>City,State</p>
									<a
										href=''
										className=' text-decoration-none text-[10px] bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded'>
										Defriend
									</a>
								</div>
								<div className='friendsItem'>
									<img src={profileimg} alt='' />
									<p>City,State</p>
									<a
										href=''
										className=' text-decoration-none text-[10px] bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded'>
										Defriend
									</a>
								</div>
								<div className='friendsItem'>
									<img src={profileimg} alt='' />
									<p>City,State</p>
									<a
										href=''
										className=' text-decoration-none text-[10px] bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded'>
										Defriend
									</a>
								</div>
								<div className='friendsItem'>
									<img src={profileimg} alt='' />
									<p>City,State</p>
									<a
										href=''
										className=' text-decoration-none text-[10px] bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded'>
										Defriend
									</a>
								</div>
								<div className='friendsItem'>
									<img src={profileimg} alt='' />
									<p>City,State</p>
									<a
										href=''
										className=' text-decoration-none text-[10px] bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded'>
										Defriend
									</a>
								</div>
							</div>
							<hr />
							<div className='friendsNav flex justify-between bg-transparent'>
								<div className='prev bg-transparent'>
									<i className='fa-solid fa-arrow-left bg-transparent mr-1'></i>
									Back
								</div>
								<div className='next bg-transparent'>
									More
									<i className='fa-solid fa-arrow-right bg-transparent ml-1'></i>
								</div>
							</div>
						</div>
					</div>
					<div className='connectionBox bg-transparent'>
						<div className='viewConnections'>
							<div className='friendsHeader bg-transparent'>
								<h2 className='bg-transparent text-[20px] font-bold'>
									Connections
								</h2>
								<p className='bg-transparent text-[12px]'>
									You share thoughts, knowledge and ideas with your
									connections in open common spaces
								</p>
							</div>
							<hr />
							<div className='connectionList'>
								<div className='connectionItem'>
									<img src={profileimg} alt='' />
									<p>City,State</p>
									<a
										href=''
										className=' text-decoration-none text-[10px] bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded'>
										Disconnect
									</a>
								</div>
								<div className='connectionItem'>
									<img src={profileimg} alt='' />
									<p>City,State</p>
									<a
										href=''
										className=' text-decoration-none text-[10px] bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded'>
										Disconnect
									</a>
								</div>
								<div className='connectionItem'>
									<img src={profileimg} alt='' />
									<p>City,State</p>
									<a
										href=''
										className=' text-decoration-none text-[10px] bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded'>
										Disconnect
									</a>
								</div>
								<div className='connectionItem'>
									<img src={profileimg} alt='' />
									<p>City,State</p>
									<a
										href=''
										className=' text-decoration-none text-[10px] bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded'>
										Disconnect
									</a>
								</div>
								<div className='connectionItem'>
									<img src={profileimg} alt='' />
									<p>City,State</p>
									<a
										href=''
										className=' text-decoration-none text-[10px] bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded'>
										Disconnect
									</a>
								</div>
								<div className='connectionItem'>
									<img src={profileimg} alt='' />
									<p>City,State</p>
									<a
										href=''
										className=' text-decoration-none text-[10px] bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded'>
										Disconnect
									</a>
								</div>
							</div>
							<hr />
							<div className='friendsNav flex justify-between bg-transparent'>
								<div className='prev bg-transparent'>
									<i className='fa-solid fa-arrow-left bg-transparent mr-1'></i>
									Back
								</div>
								<div className='next bg-transparent'>
									More
									<i className='fa-solid fa-arrow-right bg-transparent ml-1'></i>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='friendsInfoContainer'>
					<div className='infoimg'>
						<img src={infoimg} alt='' />
					</div>
					<div className='friendsContainer'>
						<div className='friendsheader bg-transparent'>
							<p className='bg-transparent font-bold text-[12px]'>
								Who is Online: friends: 20 | mentees: 20
							</p>
						</div>
						<hr />
						<div className='friendslist bg-transparent'>
							<div className='friends bg-transparent h-[20px]'>
								<img className='mr-[15px]' src={profileimg} alt='' />
								<p className='bg-transparent'>Steve Rogers</p>
							</div>
							<hr />
							<div className='friends bg-transparent h-[20px]'>
								<img className='mr-[15px]' src={profileimg} alt='' />
								<p className='bg-transparent'>Tony Stark</p>
							</div>
							<hr />
							<div className='friends bg-transparent h-[20px]'>
								<img className='mr-[15px]' src={profileimg} alt='' />
								<p className='bg-transparent'>Bruce Banner</p>
							</div>
							<hr />
							<div className='friends bg-transparent h-[20px]'>
								<img className='mr-[15px]' src={profileimg} alt='' />
								<p className='bg-transparent'>Scarlet Witch</p>
							</div>
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
