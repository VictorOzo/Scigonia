import { useForm } from 'react-hook-form';
import './hailform.css';
import ScheduleForm from './ScheduleForm';
import { useState } from 'react';

export const Hailform = () => {
	const { register, handleSubmit } = useForm();
	const [schedule, setSchedule] = useState(false);
	function renderSchedule() {
		setSchedule(true);
	}
	function returnSchedule() {
		setSchedule(false);
	}
	return (
		<div className='hailF bg-transparent'>
			<div className='form'>
				<form className='bg-transparent'>
					<input
						type='radio'
						name='service'
						value='real-time'
						onClick={returnSchedule}
					/>
					<label for='real-time'>Real Time</label>
					<input
						type='radio'
						name='service'
						value='Schedule'
						className='ml-[70px]'
						onClick={renderSchedule}
					/>
					<label for='schedule'>Schedule</label>
					<br />
					{schedule ? <ScheduleForm /> : null}
					<br />
					<select
						className='bg-white mt-3 rounded'
						{...register('Service', { required: true })}>
						<option value=''>
							--Select Teachers Seminar Workshop Theme--
						</option>
					</select>
					<br />
					<input
						type='text'
						placeholder='You Select a Topic'
						className='border-black border-[1px] w-full mt-3 rounded h-[90px]'
					/>
					<br />
					<input
						type='text'
						placeholder='Confirm School Address as Venue'
						className='border-black border-[1px] w-full mt-3 rounded'
					/>
					<br />
					<input type='radio' value='Pay-per-teacher' className='mt-3' />
					<label for='per-teacher' className='mb-4'>
						Pay per Teacher
					</label>
					<br />
					<a
						href=''
						className='text-decoration-none text-white bg-blue-500 py-2 px-2 rounded  '>
						Hail Service
					</a>
				</form>
			</div>
		</div>
	);
};
