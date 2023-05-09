import './App.css';
import { Navbar } from '../src/components/Layouts/navbar/Navbar';
import { Signup } from '../src/components/Pages/signup/Signup';
import { Invites } from '../src/components/Pages/Invites/Invites';
import { Friends } from '../src/components/Pages/friends/Friends';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Pages/dashboard/Dashboard';
import { EditProfile } from './components/Pages/dashboard/Edit/EditProfile';
import { ProfileImg } from './components/Pages/dashboard/profileimg/ProfileImg';
import { Network } from './components/Pages/dashboard/network/Network';
import { Vault } from './components/Pages/vaults/Vault';
import { Version } from './components/Pages/version/Version';
import { CareerNetwork } from './components/screens/forms/career/network/CareerNetwork';
import { Account } from './components/Pages/vaults/Account';
import { Mint } from './components/Pages/version/Mint';
import { Withdraw } from './components/Pages/withdraw/Withdraw';
import { Hail } from './components/Pages/hail/Hail';
import { Landing } from './components/Pages/landing/Landing';
import { store } from './store';
import { Provider } from 'react-redux';

export const App = () => {
	return (
		<>
			<Router>
				<Provider store={store}>
					<div className='app'>
						<Navbar />
						<Routes>
							<Route path='/' element={<Landing />} />
							<Route path='/signup' element={<Signup />} />
							<Route path='/dashboard' element={<Dashboard />} />
							<Route path='/edit' element={<EditProfile />} />
							<Route path='/careernet' element={<CareerNetwork />} />
							<Route path='/invite' element={<Invites />} />
							<Route path='/friends' element={<Friends />} />
							<Route path='/profileImg' element={<ProfileImg />} />
							<Route path='/network' element={<Network />} />
							<Route path='/vault' element={<Vault />} />
							<Route path='/account' element={<Account />} />
							<Route path='/version' element={<Version />} />
							<Route path='/mint' element={<Mint />} />
							<Route path='/withdraw' element={<Withdraw />} />
							<Route path='/hail' element={<Hail />} />
						</Routes>
					</div>
				</Provider>
			</Router>
		</>
	);
};
