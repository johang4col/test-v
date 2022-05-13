/* eslint-disable no-unused-vars */
import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import EventsForm from './EventsForm';

function userFullRegisterForm() {
	return {
		email: '',
		password: '',
		createdAt: '',
		updatedAt: '',
	};
}

function userRegisterEventForm() {
	return {
		nombreEvento: '',
		email: '',
		nombre: '',
		whatsapp: '',
		edad: '',
		profesion: '',
		identidadSexual: '',
		insight: '',
		ciudad: '',
		createdAt: '',
		updatedAt: '',
	};
}

export default function RegisterToEventModal({ registerToEventIsOpen, setRegisterToEventIsOpen, user, eventName, eventId, isRegistered, referId }) {
	const [userData, setUserData] = useState(user ? userRegisterEventForm : userFullRegisterForm);
	const [showPassword, setShowPassword] = useState(false);

	function closeModal() {
		setRegisterToEventIsOpen(false);
	}
	// console.log('isRegistered: is new:', isRegistered);
	return (
		<>
			<Transition appear show={registerToEventIsOpen} as={Fragment}>
				<Dialog as='div' className='fixed inset-0 z-10 overflow-y-auto' onClose={closeModal}>
					<div className='min-h-screen px-4 text-center'>
						<Transition.Child as={Fragment} enter='ease-out duration-300' enterFrom='opacity-0' enterTo='opacity-100' leave='ease-in duration-200' leaveFrom='opacity-100' leaveTo='opacity-0'>
							<Dialog.Overlay className='fixed inset-0 opacity-90 bg-black' />
						</Transition.Child>

						{/* This element is to trick the browser into centering the modal contents. */}
						<span className='inline-block h-screen align-middle' aria-hidden='true'></span>
						<Transition.Child as={Fragment} enter='ease-out duration-300' enterFrom='opacity-0 scale-95' enterTo='opacity-100 scale-100' leave='ease-in duration-200' leaveFrom='opacity-100 scale-100' leaveTo='opacity-0 scale-95'>
							<div className='inline-block w-full max-w-6xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
								<Dialog.Title as='h3' className='text-lg font-medium leading-6 text-gray-900'></Dialog.Title>
								{isRegistered ? (
									<div
										className='flex flex-col
									 justify-center items-center'
									>
										<p>Ya estás registrado en el {eventName}</p>
										<p>
											Puedes referir a tus amigos para participar por entradas <b>full cover</b>
										</p>
									</div>
								) : (
									<EventsForm userData={userData} user={user} eventName={eventName} eventId={eventId} referId={referId} />
								)}

								{/* <div className='mt-4 flex justify-between'>
									<button
										type='button'
										className='inline-flex justify-center py-2 px-4 text-sm font-medium text-blue-t-900 bg-blue-t-100 border border-transparent rounded-md hover:bg-blue-t-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-t-500'
										onClick={closeModal}
									>
										Cerrar ventana
									</button>
								</div> */}
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}
