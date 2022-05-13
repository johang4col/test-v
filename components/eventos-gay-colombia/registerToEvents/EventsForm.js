/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import axios from 'axios';
import Loader from '../../Loader';

const sexualIdentityList = [{ Title: '- Select -' }, { Title: 'Top' }, { Title: 'Bottom' }, { Title: 'Versatil Top' }, { Title: 'Versatil Bottom' }, { Title: 'Otro' }];
const cityList = [{ Title: '- Select -' }, { Title: 'Bogotá' }, { Title: 'Medellín' }, { Title: 'Envigado' }];

const NameField = () => (
	<div>
		<label htmlFor='name' className='mb-1 mt-3 block text-md'>
			Nombre *
		</label>
		<input type='text' required name='name' id='name' autoComplete='name' className='border-charcoal-t-500 focus:ring-0 focus:border-blue-t-300 block w-full rounded' />
	</div>
);

const WhatsappField = () => (
	<div>
		<label htmlFor='whatsapp' className='mb-1 mt-3 block text-md'>
			Whatsapp *
		</label>
		<input type='number' required name='whatsapp' id='whatsapp' autoComplete='whatsapp' className='border-charcoal-t-500 focus:ring-0 focus:border-blue-t-300 block w-full rounded' />
	</div>
);

const EdadField = () => (
	<div>
		<label htmlFor='edad' className='mb-1 mt-3 block text-md'>
			Edad *
		</label>
		<input type='number' required name='edad' id='edad' autoComplete='edad' className='border-charcoal-t-500 focus:ring-0 focus:border-blue-t-300 block w-full rounded' />
	</div>
);

const ProfesionField = () => (
	<div>
		<label htmlFor='profesion' className='mb-1 mt-3 block text-md'>
			Profesión *
		</label>
		<input type='text' required name='profesion' id='profesion' autoComplete='profesion' className='border-charcoal-t-500 focus:ring-0 focus:border-blue-t-300 block w-full rounded' />
	</div>
);

const IdentidadSexualField = () => (
	<div>
		<label className='mb-1 mt-3 block text-md' htmlFor='identidadSexual'>
			Identidad sexual *
		</label>
		<select type='select' className='border-charcoal-t-500 focus:ring-0 focus:border-blue-t-300 block w-full rounded' id='identidadSexual' name='identidadSexual'>
			<option value='' disabled defaultValue hidden>
				- Select -
			</option>
			{sexualIdentityList.map((identity, i) => (
				<option key={i} value={identity.Title}>
					{identity.Title}
				</option>
			))}
		</select>
	</div>
);

const CiudadField = () => (
	<div>
		<label className='mb-1 mt-3 block text-md' htmlFor='ciudad'>
			Ciudad *
		</label>
		<select type='select' className='border-charcoal-t-500 focus:ring-0 focus:border-blue-t-300 block w-full rounded' id='ciudad' name='ciudad'>
			<option value='' disabled defaultValue hidden>
				- Select -
			</option>
			{cityList.map((city, i) => (
				<option key={i} value={city.Title}>
					{city.Title}
				</option>
			))}
		</select>
	</div>
);

const PrivacyStatementField = () => (
	<div className='flex items-center justify-center font-normal mt-4'>
		<input type='checkbox' defaultChecked={true} required name='privacyStatement' id='privacyStatement' className='mr-4 h-5 w-5 mt-2 rounded border-orange text-orange focus:ring-orange' />
		<div htmlFor='privacyStatement' className='mb-1 mt-3 flex text-md '>
			I have read and agree to the gay APP
			<a href='https://www.iansresearch.com/privacy-statement'>
				<p rel='noreferrer' target='_blank' className='text-orange hover:text-charcoal ml-1.5'>
					Privacy Statement. <span className='text-charcoal'>*</span>
				</p>
			</a>
		</div>
	</div>
);

export default function eventsForm({ userData, setUserData, showPassword, user, eventName, eventId, referId }) {
	const [loading, setLoading] = useState(false);
	console.log('userin the Form:', user);
	console.log('refer Id in the Form:', referId);

	const onFormSubmit = async (e) => {
		e.preventDefault();

		if (user) {
			if ((!user.accessToken.identidadSexual && e.target.identidadSexual.value === '- Select -') || (!user.accessToken.ciudad && e.target.ciudad.value === '- Select -') || (!user.accessToken.insight && !e.target.insight.value)) {
				alert('Debes llenar todos los campos');
			} else {
				setLoading(true);

				const requestBody = {
					registeredAt: new Date(),
					userId: user.accessToken._id,
					eventName,
					eventId,
					...(referId && { referId }),
					...(!user.accessToken.insight && { insight: e.target.insight.value }),
					...(!user.accessToken.name && { name: e.target.name.value }),
					...(!user.accessToken.whatsapp && { whatsapp: e.target.whatsapp.value }),
					...(!user.accessToken.edad && { edad: e.target.edad.value }),
					...(!user.accessToken.profesion && { profesion: e.target.profesion.value }),
					...(!user.accessToken.identidadSexual && { identidadSexual: e.target.identidadSexual.value }),
					...(!user.accessToken.ciudad && { ciudad: e.target.ciudad.value }),
					...(!user.accessToken.privacyStatement && { privacyStatement: Boolean(e.target.privacyStatement.value) }),
				};

				console.log('request when there is a user logged:', requestBody);

				const res = await axios.put('/api/register-to-an-event', requestBody).then(() => {
					window.location.reload(); // this reloads the page so the session callback updates the session content with the data from the user
				});
			}
		} else {
			setLoading(true);
			// there is no user logged and there is a referId
			const requestBody = {
				...(referId && { referId }),
				registeredAt: new Date(),
				eventName,
				eventId,
				email: e.target.email.value,
				password: e.target.password.value,
				insight: e.target.insight.value,
				name: e.target.name.value,
				whatsapp: e.target.whatsapp.value,
				edad: e.target.edad.value,
				profesion: e.target.profesion.value,
				identidadSexual: e.target.identidadSexual.value,
				ciudad: e.target.ciudad.value,
				privacyStatement: Boolean(e.target.privacyStatement.value),
			};

			console.log('request:', requestBody);
			const res = await axios.put('/api/register-to-an-event', requestBody);
			console.log('res status:', res);

			if (res && res.data.acknowledged) {
				const signInStatus = await signIn('credentials', {
					redirect: true,
					email: e.target.email.value,
					password: e.target.password.value,
				});
			}
		}
	};

	if (loading) {
		return <Loader />;
	}
	return (
		<div className='mb-12 flex flex-col'>
			<form onSubmit={onFormSubmit}>
				<p className='text-xl'>Formulario de registro al evento {'Speed Dating de 1 tuone'}</p>
				{!user && (
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-8 bg-orange justify-center items-center p-2 rounded'>
						<div>
							<label htmlFor='email' className='mb-1 mt-3 block text-md'>
								Email *
							</label>
							<input type='email' name='email' id='email' autoFocus required autoComplete='email' className='border-charcoal-t-500 focus:ring-0 focus:border-blue-t-300 block w-full rounded' />
						</div>

						<div>
							<label htmlFor='password' className='mb-1 mt-3 block text-md'>
								password *
							</label>
							<input type={showPassword ? 'text' : 'password'} id='password' autoFocus required className='border-charcoal-t-500 focus:ring-0 focus:border-blue-t-300 block w-full rounded' />
						</div>
					</div>
				)}

				<div className='grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-8'>
					{user ? <>{!user.accessToken.name && <NameField />}</> : <NameField />}
					{user ? <>{!user.accessToken.whatsapp && <WhatsappField />}</> : <WhatsappField />}
				</div>
				<div className='grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-8'>
					{user ? <>{!user.accessToken.edad && <EdadField />}</> : <EdadField />}
					{user ? <>{!user.accessToken.profesion && <ProfesionField />}</> : <ProfesionField />}
				</div>
				{user ? <>{!user.accessToken.identidadSexual && <IdentidadSexualField />}</> : <IdentidadSexualField />}
				{user ? <>{!user.accessToken.ciudad && <CiudadField />}</> : <CiudadField />}

				<div>
					<label htmlFor='insight' className='mb-1 mt-3 block text-md'>
						¿Porqué deseas asistir al Speed Dating 1tuone? *
					</label>
					<textarea rows={2} type='text' name='insight' id='insight' autoComplete='insight' className='border-charcoal-t-500 focus:ring-0 focus:border-blue-t-300 block w-full rounded' />
				</div>

				{user ? <>{!user.accessToken.privacyStatement && <PrivacyStatementField />}</> : <PrivacyStatementField />}

				{/* <input type={showPassword ? 'text' : 'password'} autoFocus required value={userData.password} placeholder='password' onChange={(e) => setUserData({ ...userData, password: e.target.value })} className='my-2 px-4 rounded' /> */}

				<button type='submit' className='text-white bg-orange rounded text-xl w-full mt-4'>
					Registrarme
				</button>
			</form>
		</div>
	);
}
