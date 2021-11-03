import React from 'react';
import Inp from './Inp';

function Login() {
	const flexContainer = {
		display: 'flex',
	};

	const blue = {
		backgroundColor: 'Blue',
		// display: "inline-flex",
		padding: '0.5rem',
		width: '50vw',
		height: '50vh',
	};
	const purple = {
		backgroundColor: 'purple',
		padding: '0.5rem',
		// display: "flex",
		width: '50vw',
		height: '50vh',
	};
	const orange = {
		padding: '0.5rem',
		backgroundColor: 'orange',
		// display: "flex",
		width: '50vw',
		height: '50vh',
	};
	const green = {
		padding: '0.5rem',
		backgroundColor: 'green',
		// display: "flex",
		width: '50vw',
		height: '50vh',
	};

	return (
		<>
			<Inp />
			<div className='flexContainer' style={flexContainer}>
				<div style={blue}></div>
				<div style={green}></div>
			</div>
			<div className='flexContainer' style={flexContainer}>
				<div style={purple}></div>
				<div style={orange}></div>
			</div>
		</>
	);
}

export default Login;
