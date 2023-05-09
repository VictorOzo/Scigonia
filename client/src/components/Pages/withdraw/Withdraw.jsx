import './withdraw.css';
import infoimg from '../../../images/infoimg.jpg';
import vaultimg from '../../../images/vaultimg.jpg';
import { Sidebar } from '../../Layouts/sidebar/Sidebar';

export const Withdraw = () => {
	return (
		<div className='withdraw'>
			<Sidebar />
			<div className='withdrawContainer'>
				<div className='withdrawBox'>
					<div className='withdrawHeader bg-transparent'>
						<h2 className='bg-transparent'>Withdraw</h2>
					</div>
					<hr />
					<div className='withdrawimg bg-transparent'>
						<img src={vaultimg} alt='' />
						<div className='imgtext bg-transparent'>
							<p className='bg-transparent text-2xl'>Vault Balance:</p>
							<p className='bg-transparent text-7xl'>$100</p>
						</div>
					</div>
					<div className='withdrawForm bg-transparent'>
						<div className='form'>
							<input
								type='text'
								className='bg-transparent'
								placeholder='Withdraw Options'
							/>
							<br />
							<input
								className='mt-3 bg-transparent'
								type='text'
								placeholder='Amount (in unit of $10)'
							/>
						</div>

						<div className='withdrawbtn bg-transparent'>
							<button className='mt-3 bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded'>
								Send Request
							</button>
						</div>
					</div>
				</div>
				<div className='infoContainer'>
					<div className='withdrawinfoimg'>
						<img src={infoimg} alt='' />
					</div>
					<div className='withdrawMessageContainer'>
						<div className='withdrawinfotext bg-transparent'>
							<p className='bg-transparent'>
								Choices are what shapes our ends. They are the building bricks of all human destinies. Your Choice of Scigonia type or version makes only some differences between ends. But whichever you choose is a choice between two goods. Not so often to have the luxury of choosing between good and good.
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
