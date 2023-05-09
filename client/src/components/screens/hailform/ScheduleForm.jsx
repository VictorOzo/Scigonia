import React from 'react';

const ScheduleForm = () => {
	return (
		<div className='bg-transparent mb-[-30px]'>
			<input
				type='date'
				className='border-black border-[1px] mr-3 rounded'
			/>
			<input type='time' className='border-black border-[1px]' />
		</div>
	);
};

export default ScheduleForm;
