import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Inp.css';

export default function Inp() {
	return (
		<Form className='dB'>
			<Form.Group className='mb-3' controlId='formBasicEmail'>
				<Form.Label>Email address</Form.Label>
				<Form.Control type='email' placeholder='Enter email' />
				<Form.Text className='text-muted'>
					We'll never share your email with anyone else.
				</Form.Text>
			</Form.Group>

			<Form.Group className='mb-3' controlId='formBasicPassword'>
				<Form.Label>Password</Form.Label>
				<Form.Control type='password' placeholder='Password' />
			</Form.Group>

			<div className='submit-btn'>
				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</div>
		</Form>
	);
}
