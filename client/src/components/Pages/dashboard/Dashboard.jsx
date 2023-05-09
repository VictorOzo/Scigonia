import './dashboard.css';
import { Sidebar } from '../../Layouts/sidebar/Sidebar';
import postimg from '../../../images/postimg.jpg';
import profileimg from '../../../images/profileimg.jpg';
import infoimg from '../../../images/infoimg.jpg';



const Dashboard = () => {
	return (
		<>
			
			<div className='dashboard'>
				<Sidebar />
				<div className='dashboardContainer'>
					<div className='postContainer'>
						<div className='makepost'>
							<div className=' bg-transparent'>
								<p className='bg-transparent text-xl'>
									Knowledge doesn't diminish when shared; it grows.
									Share Knowledge, your thoughts and feelings
								</p>
							</div>
							<hr />
							<div className='makepostcontainer bg-transparent'>
								<div className='header bg-transparent mb-[10px]'>
									<div className='postImg bg-transparent mr-[20px]'>
										<img src={profileimg} alt='' />
									</div>
									<p className='text-2xl bg-transparent'>
										Share with:
									</p>
								</div>
								<div className='ml-[15px] postbox bg-transparent'></div>
								<div className='postlinks bg-transparent mt-[20px]'>
									<div className='format bg-transparent'>
										<p
											className='bg-transparent mr-[10px]
									'>
											Add:
										</p>
										<a
											className=' text-decoration-none bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded'
											href=''>
											Video
										</a>
										<a
											className=' text-decoration-none bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded'
											href=''>
											Picture
										</a>
										<a
											className=' text-decoration-none bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded'
											href=''>
											Doc
										</a>
									</div>
									<a
										href=''
										className=' text-decoration-none bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded'>
										Post
									</a>
								</div>
							</div>
						</div>
						<div className='postitem bg-white'>
							<div className='header bg-white'>
								<div className='postImg bg-white mr-[25px]'>
									<img src={profileimg} alt='post' />
								</div>
								<h5 className=' bg-white mr-[400px]'>Clerk Brandon </h5>
								<i className='fa-solid fa-ellipsis-vertical text-2xl bg-transparent'></i>
							</div>
							<hr />
							<div className='post bg-transparent'>
								<img src={postimg} alt='post' />
								<hr />
								<p className=' bg-transparent'>
									We are delighted to welcome all teachers and Students
									all across the country to the annual back to scholl
									campaign flag and our 2022/2023 ball.
								</p>
							</div>
							<hr />
							<div className='commentSection bg-transparent'>
								<div className='comment bg-transparent'>
									<i className='fa-regular fa-comment text-2xl mr-[5px] bg-transparent'></i>
									Comments
								</div>
								<div className='reaction bg-transparent'>
									<i className='fa-regular fa-face-smile text-2xl mr-[5px] bg-transparent'></i>
									Reactions
								</div>
							</div>
						</div>
					</div>
					<div className='infoContainer'>
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
							Created with love from Eddaland to the world 2014. Scigonia
							is a brand of BWP Utvecklingsbolag
						</p>
						<p className='text-[8px]'>UCBI. SDG 4. Policy and Privacy</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
