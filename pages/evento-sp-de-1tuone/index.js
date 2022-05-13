/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { getSession } from 'next-auth/react';
import RegisterToEventModal from '../../components/eventos-gay-colombia/registerToEvents/RegisterToEventModal';
import LoginAndRegisterModal from '../../components/Autentication/LoginAndRegisterModal';

// Import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/navigation';

export const TimeContainer = ({ digits, text }) => (
	<div className='flex flex-col justify-center items-center'>
		<div className='flex justify-center shadow bg-white bg-opacity-50 text-3xl p-2 rounded w-14'>
			<span>{digits}</span>
		</div>
		<p className='text-white'>{text}</p>
	</div>
);

export const CountDownTimer = () => {
	const calculateTimeLeft = () => {
		const year = new Date().getFullYear();
		const difference = +new Date(`5/22/${year}`) - +new Date();

		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}
		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);
		// console.log('timer', timer);
		// console.log('timeLeft:', timeLeft);

		return () => clearTimeout(timer);
	});

	return (
		<>
			{timeLeft.days || timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
				<div className='grid grid-cols-4 gap-4 shadow-xl p-4 rounded bg-sapphire-s-300 my-4'>
					<TimeContainer digits={timeLeft.days} text='Días' />
					<TimeContainer digits={timeLeft.hours} text='Horas' />
					<TimeContainer digits={timeLeft.minutes} text='Minutos' />
					<TimeContainer digits={timeLeft.seconds} text='Segundos' />
				</div>
			) : (
				<div>Evento estrenado</div>
			)}
		</>
	);
};

export const eventoSp = ({ user, referId = false }) => {
	const eventId = '626079d03c855c17bfc2dfc6';
	const [registerToEventIsOpen, setRegisterToEventIsOpen] = useState(false);
	const [isRegistered, setIsRegistered] = useState(false);

	// Estados Para el modal de registro y login
	const [isOpen, setIsOpen] = useState(false);
	const [formToRender, setFormToRender] = useState('login');

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

	const openModal = () => {
		if (user) {
			setRegisterToEventIsOpen(true);
		} else if (referId) {
			setRegisterToEventIsOpen(true);
		} else {
			setIsOpen(true);
		}
	};

	const copyRererLink = () => {
		if (user) {
			const copied = `${process.env.NEXT_PUBLIC_ABSOLUTE_URL}/${'evento-sp-de-1tuone'}/${user.accessToken._id}`;
			navigator.clipboard.writeText(`${copied}`);
		}
	};

	return (
		<div className='flex flex-col justify-center items-center w-full bg-lapiz px-4'>
			<section className='flex flex-col justify-center items-center bg-sapphire-s-300 bg-opacity-90 w-full max-w-7xl m-10 py-14 text-white rounded px-2'>
				<h1 className='text-4xl mb-10'>Speed Dating & Networking para hombres</h1>
				<h2 className='text-2xl font-bold'>¡ 20 CITAS EN UNA NOCHE !</h2>
				<p className='text-xs'>Aclaración: Este evento no es un sitio de acompañantes o similar.</p>
				<p className='text-xl font-bold px-4 py-2 mt-8 bg-gold text-black rounded'>
					Quedan <span className='bg-black text-white px-2 py-0.5 rounded'>3</span> cupos de 35
				</p>
			</section>

			<section className='flex justify-center items-center bg-charcoal-t-600 w-full max-w-7xl rounded'>
				<div className='grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl my-20'>
					<div className='iframe-container'>
						<iframe width='560' height='315' src='https://www.youtube.com/embed/KaJHa1-lj7I' title='YouTube video player' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>
					</div>
					<div className='flex flex-col justify-center items-center'>
						<h2 className='flex justify-center my-4 text-3xl'>PRÓXIMO EVENTO</h2>
						<CountDownTimer />
						<button className={`text-white rounded py-2 px-4 text-2xl  ${user ? 'bg-peridot-s-300' : 'bg-orange'} hover:bg-black md:w-1/2`} onClick={() => openModal()}>
							{user ? `${isRegistered ? 'Registrado' : 'Regístrarme'}` : `${referId ? 'Regístrarme' : 'Inicia sesión para registrarte'}`}
						</button>

						{user && isRegistered && (
							<div className='my-4 gap-4'>
								<a className='btn-dark mt-2 mx-2'>Reservar</a>
								<a className='btn-gold mt-2 mx-2'>Reserva Gold</a>
							</div>
						)}
					</div>
				</div>
			</section>
			<section className='flex flex-col md:flex-row bg-gold text-black text-xl justify-around items-center w-full py-4 mt-8 rounded'>
				<p>Refiere y gana entradas grátis</p>
				<a className='btn-dark gap-2 flex justify-center items-center active:bg-white' onClick={() => copyRererLink()}>
					Click para copiar link y referir Refiere y gana full cover <FontAwesomeIcon icon={['fa', 'copy']} className='fa-2x text-white rounded-md p-0.5 h4 w-12' />
				</a>
			</section>

			<section className='flex justify-center items-center bg-black w-full text-charcoal-t-600 max-w-7xl rounded my-8 px-2'>
				<div className='grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl my-20'>
					<div className='iframe-container lg:col-span-1'>
						{/* <iframe src='https://www.youtube.com/embed/KnWGc-lP3BA' className='responsive-iframe' allow='autoplay; fullscreen' frameBorder='0'></iframe> */}
						<iframe width='560' height='315' src='https://www.youtube.com/embed/KnWGc-lP3BA' title='YouTube video player' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>
					</div>
					<div className='px-2 md:px-8'>
						<h2 className='flex justify-center items-center text-3xl lg:col-span-1 mb-6'>ÚLTIMOS EVENTOS</h2>
						<Swiper
							className='bg-black'
							modules={[Navigation]}
							navigation={true}
							spaceBetween={0}
							slidesPerView={1}
							breakpoints={{
								640: {
									slidesPerView: 1,
									spaceBetween: 20,
								},
							}}
						>
							<SwiperSlide className='bg-black items-center justify-center flex' key={'slide_1'}>
								<div className='bg-black h-56 w-full text-black'>
									<Image alt='' src={'https://gay-events-images.s3.sa-east-1.amazonaws.com/evento-24-de-julio-2019.jpeg'} layout='fill' className='object-cover w-full' />
								</div>
							</SwiperSlide>
							<SwiperSlide className='bg-black items-center justify-center flex' key={'slide_2'}>
								<div className=' h-56 w-full text-black'>
									<Image alt='' src={'https://gay-events-images.s3.sa-east-1.amazonaws.com/evento-24-de-julio-2019-2.jpeg'} layout='fill' className='object-cover w-full' />
								</div>
							</SwiperSlide>
						</Swiper>
					</div>

					<ul className='flex flex-col md:flex-row text-white md:text-charcoal-t-600 text-base md:col-span-2 justify-between mt-4'>
						<li className='flex flex-col justify-center items-center mb-4 bg-orange md:bg-transparent'>
							<p className='text-6xl text-white md:text-charcoal-t-600 mb-2'>312</p>
							<h3>Asistentes al evento SP</h3>
						</li>
						<li className='flex flex-col justify-center items-center mb-4 md:mb-0 bg-orange md:bg-transparent'>
							<p className='text-6xl text-white md:text-charcoal-t-600 mb-2'>2837</p>
							<h3>Citas</h3>
						</li>
						<li className='flex flex-col justify-center items-center mb-4 md:mb-0 bg-orange md:bg-transparent'>
							<p className='text-6xl text-white md:text-charcoal-t-600'>716</p>
							<h3>Matches</h3>
						</li>
					</ul>
				</div>
			</section>

			<section className='flex flex-col justify-center items-center bg-charcoal-t-600 w-full py-8 max-w-7xl rounded my-8 px-2'>
				<h2 className='text-3xl mb-4'>¿CÓMO FUNCIONA?</h2>
				<ul className='grid grid-rows-4 gap-4 list-decimal mb-4 px-4'>
					<li>Conoce personas con las que podrías tener afinidad y llegar a ser pareja o amigos.</li>
					<li>Conoce hombres interesados en algo más.</li>
					<li>Hasta 20 citas de 5 minutos en una noche.</li>
					<li>Sistema de calificación discretapara amistad o para una segunda cita.</li>
				</ul>
				<p>Cuándo llegas al restaurante un anfitrión te recibe y te indica la dinámica, a partir de ese momento inicia tu aventura!</p>
			</section>

			<section className='flex flex-col justify-center items-center bg-sapphire-s-300 bg-opacity-90 text-white w-full py-8 max-w-7xl rounded my-8 px-2'>
				<h2 className='text-3xl mb-4'>¿QUÉ INCLUYE?</h2>
				<ul className='my-4 list-disc grid grid-rows-4 gap-2  px-4'>
					<li>Sistema de calificación discreto mediante la app del evento.</li>
					<li>Cena + bebida.</li>
					<li>Participación en rifas y concursos durante el evento.</li>
					<li>Contacto de las personas con las que hizo Match.</li>
				</ul>
				<p className='my-4'>Cuándo llegas al restaurante un anfitrión te recibe y te indica la dinámica, a partir de ese momento inicia tu aventura!</p>
			</section>
			<section className='flex justify-center items-center text-3xl bg-charcoal-t-600 w-full py-8 max-w-7xl rounded my-8 px-2'>
				<h2 className='text-3xl'>PATROCINADORES</h2>
			</section>
			<section>
				<a href='https://www.facebook.com/1TuOne/' target='_blank' rel='noreferrer'>
					<FontAwesomeIcon icon={['fab', 'facebook']} className='fa-2x text-white rounded-md p-0.5 h4 w-12 mb-8 mr-4' />
				</a>
				<a href='https://www.instagram.com/1tuone/' target='_blank' rel='noreferrer'>
					<FontAwesomeIcon icon={['fab', 'instagram']} className='fa-2x text-white rounded-md p-0.5 h4 w-12 mb-8' />
				</a>
			</section>
			<RegisterToEventModal registerToEventIsOpen={registerToEventIsOpen} setRegisterToEventIsOpen={setRegisterToEventIsOpen} user={user} eventName={'Speed Dating'} eventId={eventId} isRegistered={isRegistered} referId={referId} />
			<LoginAndRegisterModal isOpen={isOpen} setIsOpen={setIsOpen} formToRender={formToRender} setFormToRender={setFormToRender} callbackUrl={`${process.env.NEXT_PUBLIC_ABSOLUTE_URL}/evento-sp-de-1tuone`} />
		</div>
	);
};

export async function getServerSideProps(context) {
	const userSession = await getSession(context);
	const user = userSession;

	return {
		props: {
			user,
		},
	};
}

export default eventoSp;
