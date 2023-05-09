import React from 'react';

const Card = ({cardIndex,data}) => {
	return (
		<div className='bg-transparent'>
			{data[cardIndex].map((item) => (
				<p className='bg-transparent text-[18px]'>{item.desc}</p>
			))}
		</div>
	);
};

export default Card;
