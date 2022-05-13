/* eslint-disable no-restricted-globals */
import { signIn } from 'next-auth/react';
import React, { useState } from 'react';
import Loader from '../Loader';

export default function LoginForm({ userData, setUserData, showPassword, callbackUrl }) {
	const [loadingLogin, setLoadingLogin] = useState(false);

	const onFormSubmit = async (e) => {
		setLoadingLogin(true);
		e.preventDefault();
		// Validation;
		if (!userData.email || !userData.email.includes('@') || !userData.password) {
			console.log('Invalid details');
			return;
		}
		// signIn;
		const signInStatus = await signIn('credentials', {
			redirect: true,
			callbackUrl,
			email: userData.email,
			password: userData.password,
		});

		console.log('signInStatus:', signInStatus);
	};

	if (loadingLogin) {
		return <Loader />;
	}
	return (
		<form className='mb-12 flex flex-col' onSubmit={onFormSubmit}>
			<p className='text-xl'>Inicia sesión</p>

			<input type={'email'} autoComplete='email' id='email' autoFocus required value={userData.email} placeholder='email' onChange={(e) => setUserData({ ...userData, email: e.target.value })} className='my-2 px-4 show rounded' />
			<input type={showPassword ? 'text' : 'password'} autoFocus required value={userData.password} placeholder='password' onChange={(e) => setUserData({ ...userData, password: e.target.value })} className='my-2 px-4 rounded' />

			<button className='text-white bg-orange rounded text-xl'>Iniciar sesión</button>
			<p className='flex justify-end items-end hover:text-orange cursor-pointer'>¿Olvidáste la contraseña?</p>
		</form>
	);
}
