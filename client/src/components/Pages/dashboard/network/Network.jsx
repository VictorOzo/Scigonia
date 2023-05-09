import './network.css';
import { Sidebar } from '../../../Layouts/sidebar/Sidebar';

export const Network = () => {
	return (
		<div className='network'>
			<Sidebar />
			<div className='networkContainer'>
				<div className='networkheader'>
					<h2 className='bg-white text-2xl ml-3'>
						Corporate Account and Networks
					</h2>
					<a href='/dashboard/careernet' className='text-decoration-none text-xl'>
						Create
					</a>
				</div>
				<div className='networkBody mt-9'>
					<div className='leftContainer'>
						<p className='bg-white text-xl'>
							Corporate Account and Network expand your real world
							knowledge exchange beyond time and space, and helps you
							connect with peoplethat are relevant to real life relevant
							knowledge exchange
						</p>
					</div>
					<div className='rightContainer'>
						<p className='bg-white'>You have 0 corporate Account.</p>
						<p className='bg-white'>You have 0 Networks.</p>
						<a className='bg-transparent link' href='*'>
							Create Corporate Account +
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
