/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import Loader from '../Loader';

export default function RegisterForm({ userData, setUserData, showPassword }) {
	const [loading, setLoading] = useState(false);
	const onFormSubmit = async (e) => {
		setLoading(true);
		userData.createdAt = new Date();
		e.preventDefault();
		// Validation;
		if (!userData.email || !userData.email.includes('@') || !userData.password) {
			console.log('Invalid details');
			return;
		}

		// POST form values
		const res = await fetch('/api/auth/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: userData.email,
				password: userData.password,
				createdAt: userData.createdAt,
			}),
		});
		// Await for data for any desirable next steps
		const data = await res.json();
		console.log('data:', data.acknowledged);
		if (data.acknowledged) {
			const signInStatus = await signIn('credentials', {
				redirect: true,
				email: userData.email,
				password: userData.password,
			});
		}
	};

	if (loading) {
		return <Loader />;
	}
	return (
		<div className='mb-12 flex flex-col'>
			<p className='text-xl'>Registro</p>
			{/* <button className='bg-orange rounded my-2 text-white text-md font-bold px-4'>Login</button> */}

			<input type={'email'} autoComplete='email' id='email' autoFocus required value={userData.email} placeholder='email' onChange={(e) => setUserData({ ...userData, email: e.target.value })} className='my-2 px-4 show rounded' />
			<input type={showPassword ? 'text' : 'password'} autoFocus required value={userData.password} placeholder='password' onChange={(e) => setUserData({ ...userData, password: e.target.value })} className='my-2 px-4 rounded' />

			<button className='text-white bg-orange rounded text-xl' onClick={onFormSubmit}>
				Registrarme
			</button>
		</div>
	);
}
