/* eslint-disable no-unused-vars */
import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function userForm() {
	return {
		email: '',
		password: '',
		createdAt: '',
		updatedAt: '',
	};
}

export default function LoginAndRegisterModal({ isOpen, setIsOpen, formToRender, setFormToRender, callbackUrl }) {
	const [userData, setUserData] = useState(userForm);
	const [showPassword, setShowPassword] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	// function openModal() {
	// 	setIsOpen(true);
	// }
	function updateFormToRender() {
		if (formToRender === 'login') {
			setFormToRender('register');
		} else {
			setFormToRender('login');
		}
	}

	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as='div' className='fixed inset-0 z-10 overflow-y-auto' onClose={closeModal}>
					<div className='min-h-screen px-4 text-center'>
						<Transition.Child as={Fragment} enter='ease-out duration-300' enterFrom='opacity-0' enterTo='opacity-100' leave='ease-in duration-200' leaveFrom='opacity-100' leaveTo='opacity-0'>
							<Dialog.Overlay className='fixed inset-0 opacity-90 bg-black' />
						</Transition.Child>

						{/* This element is to trick the browser into centering the modal contents. */}
						<span className='inline-block h-screen align-middle' aria-hidden='true'>
							&#8203;
						</span>
						<Transition.Child as={Fragment} enter='ease-out duration-300' enterFrom='opacity-0 scale-95' enterTo='opacity-100 scale-100' leave='ease-in duration-200' leaveFrom='opacity-100 scale-100' leaveTo='opacity-0 scale-95'>
							<div className='inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
								<Dialog.Title as='h3' className='text-lg font-medium leading-6 text-gray-900'></Dialog.Title>

								{formToRender === 'login' ? <LoginForm userData={userData} setUserData={setUserData} showPassword={showPassword} closeModal={closeModal} callbackUrl={callbackUrl} /> : null}
								{formToRender === 'register' ? <RegisterForm userData={userData} setUserData={setUserData} showPassword={showPassword} /> : null}

								<div className='mt-4 flex justify-between'>
									<button
										type='button'
										className='inline-flex justify-center py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
										onClick={() => closeModal()}
									>
										Cerrar ventana
									</button>
									<button
										type='button'
										className='inline-flex hover:text-orange justify-center py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
										onClick={() => updateFormToRender()}
									>
										{formToRender === 'login' ? <p>¿Aún no tienes cuenta? Regístrate aquí </p> : null}
										{formToRender === 'register' ? <p>¿Tienes cuenta? Inicia sesión</p> : null}
									</button>
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}
