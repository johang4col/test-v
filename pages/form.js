/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { classNames } from '../utils/func';

function dataFormSuplier() {
	return {
		address: '',
		city: '',
		description: '',
		schedules: '',
		image: '',
		planName: '',
		whatsapp: '',
		labels: [],
	};
}

const relationsList = [
	{
		Id: 'ru8i41-wer651-asd654-v9g1hg',
		Title: 'Bogotá',
	},
	{
		Id: 'ru8i41-wer651-asd654-v9g1v',
		Title: 'Medellín',
	},
];

export default function SignIn() {
	const [formData, setFormData] = useState(dataFormSuplier());

	const handlePost = async () => {
		console.log(formData);
		await axios
			.post(`${process.env.NEXT_PUBLIC_ABSOLUTE_URL}/api/plan-gay-colombia`, {
				address: formData.address,
				city: formData.city,
				description: formData.description,
				schedules: formData.schedules,
				image: formData.image,
				planName: formData.planName,
				whatsapp: formData.whatsapp,
				labels: formData.labels,
			})
			.then((response) => console.log('this is the response: ', response.data))
			.then((response) => {
				setFormData(dataFormSuplier);
			});
	};

	const labelsToAdd = formData.labels; /// lo que pasa es que el setstate está reiniciando esta variable cada vexz que se carga

	function labelsInclude(label) {
		// labelsToAdd.push(label);

		console.log(labelsToAdd.indexOf(label) > -1);

		if (labelsToAdd.indexOf(label) > -1) {
			console.log('verdadero');
			// console.log('entro');
			for (let i = 0; i < labelsToAdd.length; i++) {
				if (labelsToAdd[i] === label) {
					labelsToAdd.splice(i, 1);
					setFormData({ ...formData, labels: labelsToAdd });
				}
			}
		} else {
			labelsToAdd.push(label);
			console.log('falso');
			console.log('no estaba', labelsToAdd);
			setFormData({ ...formData, labels: labelsToAdd });
		}
		console.log('labelstoAdd', labelsToAdd);
	}

	return (
		<div className='h-screen w-full items-center justify-center flex bg-orange rounded flex-col p-2'>
			<Head>
				<title>My page title 9</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>

			<form className='flex flex-col w-96'>
				<input autoFocus required value={formData.address} placeholder='address' onChange={(e) => setFormData({ ...formData, address: e.target.value })} className='my-2 px-4' />
				<input autoFocus required value={formData.schedules} placeholder='schedules' onChange={(e) => setFormData({ ...formData, schedules: e.target.value })} className='my-2 px-4' />
				<select
					onChange={(e) => setFormData({ ...formData, city: e.target.value })}
					value={formData.city}
					className='shadow border border-charcoal-t-700 rounded-l-md lg:rounded-l-none rounded-r-md w-full py-1.5 px-3 bg-charcoal text-white text-sm leading-tight focus:ring-orange-t-500 focus:border-orange-t-500'
					id='relation'
					name='relation'
					required
				>
					<option value='' disabled defaultValue hidden>
						- Select -
					</option>
					{relationsList.map((relation) => (
						<option key={`relation_${relation.Id}`} value={relation.Title} className='px-2'>
							{relation.Title}
						</option>
					))}
				</select>
				<input autoFocus required value={formData.image} placeholder='image' onChange={(e) => setFormData({ ...formData, image: e.target.value })} className='my-2 px-4' />
				<input autoFocus required value={formData.planName} placeholder='planName' onChange={(e) => setFormData({ ...formData, planName: e.target.value })} className='my-2 px-4' />
				<textarea className='my-2' value={formData.description} rows={4} placeholder='description' onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
				<input autoFocus required value={formData.whatsapp} placeholder='whatsapp' onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })} className='my-2 px-4' />
				<label className='mt-8'>Seleccione las etiquetas del Negocio/Plan</label>
			</form>
			<div className='grid grid-cols-3 gap-4'>
				<button className={classNames(formData.labels.indexOf('bares gay & bafé bar gay') > -1 ? 'bg-blue' : 'bg-charcoal ', 'px-4 py-1 rounded')} id='mobile-menu' onClick={() => labelsInclude('bares gay & bafé bar gay')}>
					Bares gay & Café bar gay
				</button>
				<button className={classNames(formData.labels.indexOf('discotecas gay') > -1 ? 'bg-blue' : 'bg-charcoal ', 'px-4 py-1 rounded')} id='mobile-menu' onClick={() => labelsInclude('discotecas gay')}>
					Discotecas gay
				</button>
				<button className={classNames(formData.labels.indexOf('hoteles gay') > -1 ? 'bg-blue' : 'bg-charcoal ', 'px-4 py-1 rounded')} onClick={() => labelsInclude('hoteles gay')}>
					Hoteles gay
				</button>
				<button className={classNames(formData.labels.indexOf('residencias gay') > -1 ? 'bg-blue' : 'bg-charcoal ', 'px-4 py-1 rounded')} onClick={() => labelsInclude('residencias gay')}>
					Residencias gay
				</button>
				<button className={classNames(formData.labels.indexOf('ropa & accesorios gay') > -1 ? 'bg-blue' : 'bg-charcoal ', 'px-4 py-1 rounded')} onClick={() => labelsInclude('ropa & accesorios gay')}>
					Ropa & accesorios gay
				</button>
				<button className={classNames(formData.labels.indexOf('salud & belleza gay') > -1 ? 'bg-blue' : 'bg-charcoal ', 'px-4 py-1 rounded')} onClick={() => labelsInclude('salud & belleza gay')}>
					Salud & belleza gay
				</button>
				<button type='button' className={classNames(formData.labels.indexOf('sex shops gay') > -1 ? 'bg-blue' : 'bg-charcoal ', 'px-4 py-1 rounded')} onClick={() => labelsInclude('sex shops gay')}>
					Sex shops gay
				</button>
				<button className={classNames(formData.labels.indexOf('videos gay') > -1 ? 'bg-blue' : 'bg-charcoal ', 'px-4 py-1 rounded')} onClick={() => labelsInclude('videos gay')}>
					Videos gay
				</button>
			</div>

			<button onClick={() => handlePost()} className='bg-blue px-8 py-4 rounded my-2 hover:bg-black hover:text-white'>
				Crear
			</button>
		</div>
	);
}
