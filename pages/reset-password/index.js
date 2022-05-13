import React, { useState } from 'react';
import axios from 'axios';
function dataFormSuplier() {
	return {
		email: '',
	};
}

export default function ResetPassword(params) {
	const [email, setEmail] = useState(dataFormSuplier());

	const onFormSubmit = async (e) => {
		e.preventDefault();
		// Validation;
		if (!email.email || !email.email.includes('@')) {
			alert('Invalid details');
			return;
		}

		await axios.post(`/api/mail`, email).then((response) => console.log('this is the response: ', response.data));

		console.log('Sending email to:', email);
	};
	return (
		<div className='flex flex-col justify-center items-center h-screen bg-black'>
			<div className='flex flex-col justify-center h-36 mb-12 bg-white rounded px-4 py-2'>
				<div>
					<form className='flex flex-col justify-center items-center w-full' onSubmit={onFormSubmit}>
						<p className='flex flex-col w-full'>
							<label htmlFor='email'> Ingresa </label>
							<input type={'email'} name='email' autoFocus required value={email.email} placeholder='email' onChange={(e) => setEmail({ ...email, email: e.target.value })} className='my-2 px-4 show rounded' />
						</p>
						<div>
							<button type='submit' className='text-white bg-orange rounded text-xl px-4'>
								Enviar correo de recuperación
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
