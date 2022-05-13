/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

import RegisterToEventModal from './registerToEvents/RegisterToEventModal';

const EventGayItemHeader = ({ image, setIsOpen, eventUrl, user, setRegisterToEventIsOpen, eventId, isRegistered }) => {
	const openModal = () => {
		if (user) {
			setRegisterToEventIsOpen(true);
		} else {
			setIsOpen(true);
		}
	};

	return (
		<div className='relative flex flex-col shadow-md h-48 w-56 sm:w-48 md:w-64 xl:w-[400px] justify-center items-center'>
			<div className='relative w-full rounded-xl h-48 p-4'>{image && <Image alt='' src={image} layout='fill' className='object-cover w-full rounded-t-md' />}</div>
			<h2 className='flex justify-center items-center content-center self-center px-2 md:px-6 py-0.5 bg-blue -bottom-3 text-white w-full text-xs md:text-base'>Speed Dating & Networking hombres</h2>
			<div className='flex justify-center w-full pb-1 px-1 gap-0.5 text-sm bg-blue flex-col md:flex-row'>
				<button className={`text-white  ${user ? 'bg-peridot-s-400 text-base' : 'bg-orange'} hover:bg-black md:w-1/2`} onClick={() => openModal()}>
					{user ? `${isRegistered ? 'Registrado' : 'Regístrarme'}` : 'Inicia sesión para registrarte'}
				</button>
				<a href={`${eventUrl}`} className='text-white bg-orange hover:bg-black md:w-1/2 flex justify-center items-center '>
					Más Información
				</a>
			</div>
		</div>
	);
};

const EventGayItemContent = ({ whatsapp, eventUrl, user }) => {
	const copyRererLink = () => {
		const copied = `${eventUrl}/${user.accessToken._id}`;
		navigator.clipboard.writeText(`${copied}`);
	};
	return (
		<>
			<div className='relative flex flex-col rounded-b-md px-1 mt-1 w-full h-full overflow-y-auto text-xs md:text-sm '>
				<h3>{'20 citas en una noche'}</h3>
				<p>
					Conocer <span className='text-blue font-bold'>amigos</span>, personas verdaderas y tal vez enamorarte!
				</p>
				<p>
					{' '}
					{/* schedules */}
					<strong>Próximo evento:</strong> {'Viernes 22 de Abril'}
				</p>

				<p>
					<b>Cúpos:</b> Quedan {'32'} de {'40'}
				</p>

				<p>
					<b>Ciudad:</b> {'Medellín/Envigado'}
				</p>

				<a className='btn-gold flex justify-center items-center my-1 gap-4 active:bg-black' onClick={() => copyRererLink()}>
					Refiere y gana full cover <FontAwesomeIcon icon={['fa', 'copy']} className='fa-2x text-black rounded-md p-0.5 h4 w-12' />
				</a>
			</div>
			{whatsapp ? (
				<p className='absolute top-2 right-1'>
					<Link href={`https://web.whatsapp.com/send?phone=57${whatsapp}`}>
						<a target='_blank' rel='noreferrer'>
							<FontAwesomeIcon icon={['fab', 'whatsapp']} className='fa-2x text-white rounded-md p-0.5 h4 w-12 bg-peridot-s-100 cursor-pointer' />
						</a>
					</Link>
				</p>
			) : (
				<p className='absolute top-2 right-1'>
					<a target='_blank' rel='noreferrer'>
						<FontAwesomeIcon icon={['fab', 'whatsapp']} className='fa-2x text-white rounded-md p-0.5 h4 w-12 bg-charcoal-t-300' />
					</a>
				</p>
			)}
		</>
	);
};

export default function GayEventItem({ address, city, description, image, eventName, whatsapp, schedules, eventUrl, user, setIsOpen, eventId }) {
	const [registerToEventIsOpen, setRegisterToEventIsOpen] = useState(false);
	const [isRegistered, setIsRegistered] = useState(false);
	useEffect(() => {
		if (user && user.accessToken.registeredEvents && user.accessToken.registeredEvents.length > 0) {
			for (let index = 0; index < user.accessToken.registeredEvents.length; index++) {
				const element = user.accessToken.registeredEvents[index];
				if (element.eventId === eventId) {
					setIsRegistered(true);
					break;
				}
			}
		}
	}, []);

	return (
		<div className='relative h-[342px] sm:h-[362px] xl:h-[340px] w-56 sm:w-48 md:w-64 xl:w-[400px] rounded-t-xl rounded-b-md shadow-xl'>
			<EventGayItemHeader image={image} setIsOpen={setIsOpen} eventUrl={eventUrl} user={user} setRegisterToEventIsOpen={setRegisterToEventIsOpen} eventId={eventId} isRegistered={isRegistered} />
			<EventGayItemContent whatsapp={whatsapp} eventUrl={eventUrl} user={user} />
			<RegisterToEventModal registerToEventIsOpen={registerToEventIsOpen} setRegisterToEventIsOpen={setRegisterToEventIsOpen} user={user} eventName={eventName} eventId={eventId} isRegistered={isRegistered} />
		</div>
	);
}
