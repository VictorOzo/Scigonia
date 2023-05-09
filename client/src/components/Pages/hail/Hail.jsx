import './hail.css';
import infoimg from '../../../images/infoimg.jpg';
import settingimg from '../../../images/settingimg.png';
import { Sidebar } from '../../Layouts/sidebar/Sidebar';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Hailform } from '../../screens/hailform/Hailform';

export const Hail = () => {
	const { register, handleSubmit } = useForm();
	const [form, setForm] = useState(false);
	function renderForm() {
		setForm(true);
	}

	return (
		<div className='hail'>
			<Sidebar />
			<div className='hailContainer'>
				<div className='hailBox'>
					<div className='hailBody bg-transparent'>
						<div className='hailHeader bg-transparent'>
							<h2 className='bg-transparent'>Hail Service</h2>
						</div>
						<hr />
						<div className='hailimg bg-transparent'>
							<img src={settingimg} className='bg-transparent' />
							<div className='hailinput bg-transparent'>
								<select
									className='bg-white'
									{...register('Service', { required: true })}>
									<option value=''>--Select Service--</option>
									<option onClick={renderForm} value='School Seminar '>
										School Based Seminar
									</option>
									<option value='workshop'>
										School Based Workshop
									</option>
									<option value='lunch'>School Lunch</option>
									<option value='transport'>School Transport</option>
									<option value='food'>Work Food</option>
									<option value='co-transport'>Co-Transport</option>
								</select>
							</div>
						</div>
						{form ? (
							<Hailform />
						) : (
							<div className='abouthail bg-transparent'>
								<p className='bg-transparent'>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the
									industry's standard dummy text ever since the 1500s,
									when an unknown printer took a galley of type and
									scrambled it to make a type specimen book. It has
									survived not only five centuries, but also the leap
									into electronic typesetting, remaining essentially
									unchanged.
								</p>
							</div>
						)}
					</div>
				</div>
				<div className='infoContainer'>
					<div className='withdrawinfoimg'>
						<img src={infoimg} alt='' />
					</div>
					<div className='withdrawMessageContainer'>
						<div className='withdrawinfotext bg-transparent'>
							<p className='bg-transparent'>
								Choices are what shapes our ends. They are the building
								bricks of all human destinies. Your Choice of Scigonia
								type or version makes only some differences between
								ends. But whichever you choose is a choice between two
								goods. Not so often to have the luxury of choosing
								between good and good.
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
