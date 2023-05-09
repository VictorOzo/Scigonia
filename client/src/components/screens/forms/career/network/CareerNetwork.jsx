import './career.css';
import { Sidebar } from '../../../../Layouts/sidebar/Sidebar';
import { useForm } from 'react-hook-form';
import React from 'react';
import 'react-step-progress-bar/styles.css';
import { ProgressBar, Step } from 'react-step-progress-bar';
import { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export const CareerNetwork = (props) => {
	const { register, handleSubmit } = useForm();
	const [index, setIndex] = useState(1);

	const prevButton = () => {
		if (index > 1) {
			setIndex((prevIndex) => prevIndex - 1);
		}
	};
	const nextButton = () => {
		if (index < 3) {
			setIndex((prevIndex) => prevIndex + 1);
		}
	};

	return (
		<div className='careernetwork'>
			<Sidebar />
			<div className='careernetworkcontainer'>
				<div className='careernetworkheader'>
					<h2 className='bg-white text-2xl ml-3'>
						Corporate Account and Networks
					</h2>
					<a
						href='/dashboard/careernet'
						className='text-decoration-none text-xl'>
						Activate
					</a>
				</div>
				<div className='formContainer'>
					<div className='container'>
						<form onSubmit={handleSubmit()} className='form'>
							<label
								htmlFor='userClass'
								className='font-bold text-2xl p-10 mr-10  bg-transparent'>
								Entity Type:
							</label>
							<select
								className='bg-transparent'
								{...register('entityType', { required: true })}>
								<option value=''>--Please choose an option--</option>
								<option value='parent'>School</option>
							</select>
							<Container className=''>
								<Col className='align-self-center'>
									<ProgressBar
										className='progessBar'
										percent={((props.step - 1) * 100) / 2}
										filledBackground='linear-gradient(to right, aqua)'>
										<Step transition='scale'>
											{({ accomplished }) => (
												<div
													className={`step ${
														accomplished ? 'completed' : ''
													}`}>
													1
												</div>
											)}
										</Step>
										<Step transition='scale'>
											{({ accomplished }) => (
												<div
													className={`step ${
														accomplished ? 'completed' : ''
													}`}>
													2
												</div>
											)}
										</Step>
										<Step transition='scale'>
											{({ accomplished }) => (
												<div
													className={`step ${
														accomplished ? 'completed' : ''
													}`}>
													3
												</div>
											)}
										</Step>
									</ProgressBar>
								</Col>
								<Row>
									<Card>
										<Card.Body>
											<form
												onSubmit={handleSubmit()}
												className='form w-100 bg-transparent'>
												<input
													type='text'
													placeholder='School'
													{...register('firstname', {
														required: true,
													})}
													className='shadow rounded-lg mr-5 border-2 border-gray-500 h-12 w-96 mb-3 bg-white'
												/>
												<input
													type='text'
													placeholder='School'
													{...register('firstname', {
														required: true,
													})}
													className='shadow rounded-lg mr-5 border-2 border-gray-500 h-12 w-96 mb-3 bg-white'
												/>
												<input
													type='text'
													placeholder='School Address'
													{...register('firstname', {
														required: true,
													})}
													className='shadow rounded-lg mr-5 border-2 border-gray-500 h-12 w-96 mb-3 bg-white'
												/>
												<input
													type='text'
													placeholder='School Motto'
													{...register('firstname', {
														required: true,
													})}
													className='shadow rounded-lg mr-5 border-2 border-gray-500 h-12 w-96 mb-3 bg-white'
												/>
												<input
													type='text'
													placeholder='Country'
													{...register('firstname', {
														required: true,
													})}
													className='shadow rounded-lg mr-5 border-2 border-gray-500 h-12 w-25 mb-3 bg-white'
												/>
												<input
													type='text'
													placeholder='School'
													{...register('State/Province', {
														required: true,
													})}
													className='shadow rounded-lg mr-5 border-2 border-gray-500 h-12 w-25 mb-3 bg-white'
												/>
												<input
													type='text'
													placeholder='City'
													{...register('firstname', {
														required: true,
													})}
													className='shadow rounded-lg mr-5 border-2 border-gray-500 h-12 w-25 mb-3 bg-white'
												/>
											</form>
										</Card.Body>
										<Card.Footer className='d-flex justify-content-between'>
											<Button
												onClick={prevButton}
												disabled={index === 1}>
												Previous
											</Button>
											<Button onClick={nextButton}>Next</Button>
										</Card.Footer>
									</Card>
								</Row>
							</Container>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
