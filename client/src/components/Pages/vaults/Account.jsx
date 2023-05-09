import './account.css';
import profileimg from '../../../images/profileimg.jpg';
import bankimg from '../../../images/bankimg.png';
import infoimg from '../../../images/infoimg.jpg';
import { Sidebar } from '../../Layouts/sidebar/Sidebar';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export const Account = () => {
	const [bank, setBank] = useState(false);
	function renderBank() {
		setBank(true);
		setVault(false);
	}
	const [vault, setVault] = useState(false);
	function renderVault() {
		setVault(true);
		setBank(false);
	}

	const { register, handleSubmit } = useForm();
	return (
		<div className='account'>
			<Sidebar />
			<div className='accountSection'>
				<div className='accountBox'>
					<div className='accountLinks bg-transparent'>
						<div className='links bg-transparent rounded py-1 px-1 flex'>
							<a
								href='/dashboard/vault'
								className='bg-transparent text-decoration-none text-[10px] text-black py-2 px-3'>
								Vault
							</a>
							<a
								href='./account'
								className='bg-blue-500 text-white text-decoration-none text-[12px] mr-3 py-2 px-3 rounded'>
								Account
							</a>
						</div>
					</div>
					<hr />
					<div className='accountBody'>
						<div className='accountimg bg-transparent'>
							<img classname='bg-transparent' src={bankimg} alt='' />
						</div>
						<div className='accountSelect bg-transparent'>
							<select
								className='bg-white'
								{...register('AccountType', { required: true })}>
								<option value=''>--Choose Method--</option>
								<option onClick={renderBank} value='localbank '>
									Local Bank
								</option>
								<option onClick={renderVault} value='usdt'>
									USDT Wallet
								</option>
							</select>
							<br />
							{bank ? (
								<div className='bankdetails bg-transparent'>
									<input
										className='mb-2 mt-2'
										type='text'
										placeholder='Bank Name'
									/>
									<br />
									<input
										className='mb-3'
										type='text'
										placeholder='Account Number'
									/>
									<br />
									<a
										href='dashboard/withdraw'
										className='bg-blue-500 text-white rounded py-2 px-2 text-decoration-none'>
										Add
									</a>
								</div>
							) : null}
							{vault ? (
								<div className='vaultdetails bg-transparent'>
									<input
										className='mb-2 mt-2'
										type='text'
										placeholder='Wallet Name'
									/>
									<br />
									<input
										className='mb-3'
										type='text'
										placeholder='Address'
									/>
									<br />
									<a
										href='dashboard/withdraw'
										className='bg-blue-500 text-white rounded py-2 px-2 text-decoration-none'>
										Add
									</a>
								</div>
							) : null}
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
