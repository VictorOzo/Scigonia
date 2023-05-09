import { Sidebar } from '../../Layouts/sidebar/Sidebar';
import profileimg from '../../../images/profileimg.jpg';
import vaultimg from '../../../images/vaultimg.jpg';
import infoimg from '../../../images/infoimg.jpg';
import './vault.css';

export const Vault = () => {
	return (
		<div className='vault'>
			<Sidebar />
			<div className='vaultSection'>
				<div className='vaultBox'>
					<div className='vaultBody bg-transparent'>
						<div className='vaultLinks bg-transparent'>
							<div className='links bg-transparent rounded py-1 px-1 flex'>
								<a
									href=''
									className='bg-blue-500 text-white text-decoration-none text-[12px] mr-3 py-2 px-3 rounded'>
									Vault
								</a>
								<a
									href='./account'
									className='bg-transparent text-decoration-none text-[10px] text-black py-2 px-3'>
									Account
								</a>
							</div>
						</div>
						<hr />
						<div className='vaultimg bg-transparent'>
							<img src={vaultimg} alt='' />
							<div className='imgtext bg-transparent'>
								<p className='bg-transparent text-2xl'>You have:</p>
								<p className='bg-transparent text-9xl'>$0</p>
							</div>
						</div>
						<div className='aboutVaultBox bg-transparent'>
							<div className='aboutVaultHeader bg-transparent ml-[15px]'>
								<p className='font-bold bg-transparent'>
									About Scicoins, $
								</p>
							</div>
							<div className='aboutVaultText bg-transparent flex justify-center'>
								<div className='aboutVault bg-transparent '>
									<p className='bg-transparent'>
										Scicoin is a virtual currency pegged with US
										Dollars and price of gold of the quantity of gold
										1USD can purchase in all currencies. You can
										directly withdraw Scicoins from your Scigonian
										vault in real money into your local bank account
										or your stable coin wallet.
									</p>
								</div>
							</div>
							<div className='aboutVaultLink bg-transparent flex justify-end mt-3 mr-3'>
								<a
									className='text-decoration-none bg-transparent text-black'
									href=''>
									Withdraw
									<i className='ml-2 fa-solid fa-forward bg-transparent'></i>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className='infoContainer'>
					<div className='inviteinfoimg'>
						<img src={infoimg} alt='' />
					</div>
					<div className='vaultMessageContainer'>
						<div className='img bg-transparent'>
							<img src={profileimg} alt='' />
						</div>
						<div className='infotext bg-transparent'>
							<p className='bg-transparent'>
								As a Scigonia, you are a member of a global community of
								shared prosperity.You have now in your hand an
								opportunity to earning incoming through our Universal
								Conditional Basic Income opportunity supported by
								Scigonia Mint©
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
