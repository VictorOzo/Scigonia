import { Sidebar } from '../../Layouts/sidebar/Sidebar';
import profileimg from '../../../images/profileimg.jpg';
import infoimg from '../../../images/infoimg.jpg';
import './invite.css';

export const Invites = () => {
	return (
		<div className='invite'>
			<Sidebar />
			<div className='inviteContainer'>
				<div className='invitebox p-[15px]'>
					<div className='inviteboxheader bg-transparent'>
						<h2 className='bg-transparent font-bold'>Invites</h2>
					</div>
					<hr />
					<div className='inviteboxtext bg-transparent'>
						<p className='bg-transparent'>
							Yoou will be accomplishing much good by simpliy inviting
							your clasmates,your parents,your teachers,your students,
							your student's parents, your workmates and your neighbours
							to join scigonia.
						</p>
					</div>
					<hr />
					<div className='invitelinks bg-transparent'>
						<button className=' bg-blue-500 hover:bg-blue-700 text-white ml-[50px] py-2 px-4 rounded w-96'>
							Send Invitations
						</button>
						<a
							href=''
							className='ml-[10px] bg-transparent text-decoration-none'>
							Copy Invite Link
						</a>
					</div>
					<hr />
					<div className='inviteboxmessage bg-transparent'>
						<p className='bg-transparent'>
							By helping others come on board Scigonia, You won;t only be
							ushering them into an exciting knowledge sharing
							experience, but you will also be creating an exciting
							digital dimension to your own real life knowledge gain
							experience. For contributing to the expansion of the novel
							goals for which Scigonia has been created by as a tool
							component of UN SDG No.4 for countries simply by inviting
							others, you would also be rewarded with S2 or S4 (Scicoin,
							S is a virtual currency of scigonia pegged at par with the
							value of US dollar ). If you are a teacher for everyone
							that signs up on your invitation and chooses to escape
							their account from its default version. That is an option
							that demands, of course, on your account type. It's how we
							implemented the BWP Universal Conditional Income
							Opportunity.
						</p>
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
								Escape your accounts to Scigonia Mint and start working
								on new accounts created on your invite. This is how we
								implement our Universal Conditional Basic Income
								Opportunity. We providing every Scigonia an opportunity
								to earn income.
							</p>
						</div>
						<button className=' bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded w-[250px]'>
							Esacape Account
                        </button>
                       
                    </div>
                    <p className='mt-[10px] w-[230px] text-[10px]'>Created with love from Eddaland to the world 2014. Scigonia is a brand of BWP Utvecklingsbolag</p>
                    <p className='text-[8px]'>UCBI. SDG 4. Policy and Privacy</p>
				</div>
			</div>
		</div>
	);
};
