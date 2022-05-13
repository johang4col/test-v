import React, { useState, useEffect } from 'react';
// import { MongoClient } from 'mongodb';
import { getSession } from 'next-auth/react';
import axios from 'axios';
import Head from 'next/head';
import LeftsideMenu from '../components/LeftSideMenu';

import LoginAndRegisterModal from '../components/Autentication/LoginAndRegisterModal';
// import Layout from '../components/Layout';
// import jwt from 'jsonwebtoken';
// import cookie from 'js-cookie';
// import axios from 'axios';
// import * as gtag from '../utils/lib/gtag';
import PlanGayList from '../components/guia-gay-colombia/PlanGayList';
import Eventos from '../components/eventos-gay-colombia/Eventos';
import MobileMenuButton from '../components/mobileNavigation/MobileMenuButton';
import MobileNavigation from '../components/mobileNavigation/MobileNavigation';

// const KEY = '456DF456REWG4';

// const addToCart = () => {
// 	gtag.event({
// 		action: 'add to cart',
// 		category: 'e-coomerce',
// 		label: 'item added',
// 		value: 'playing cards',
// 	});
// };

// const postRole = async () => {
// 	// desactivado por el momento
// 	await axios.post(`${process.env.NEXT_PUBLIC_ABSOLUTE_URL}/api/roles`).then((response) => console.log('this is the response: ', response));
// };

export default function Home({ user }) {
	console.log('user:X:', user);
	const [showLeftSideMenu, setShowLeftSideMenu] = useState(false);
	const [filterByCity, setFilterByCity] = useState('Ciudades');
	const [filteredPlans, setFilteredPlans] = useState([]);
	const [searchByWord, setSearchByWord] = useState('');
	const [initialPlans, setInitialPlans] = useState([]);
	const [page, setPage] = useState('');

	// Estados Para el modal de registro y login
	const [isOpen, setIsOpen] = useState(false);
	const [formToRender, setFormToRender] = useState('login');

	useEffect(async () => {
		console.log('iniciaidno aqui');
		if (initialPlans.length > 0) {
			if (filterByCity === 'Ciudades') {
				setFilteredPlans(initialPlans.filter((plan) => plan.planName.toLowerCase().includes(searchByWord.toLowerCase())));
			} else {
				const planFilteredCity = initialPlans.filter((plan) => plan.city === filterByCity);
				setFilteredPlans(planFilteredCity.filter((plan) => plan.planName.toLowerCase().includes(searchByWord.toLowerCase())));
			}
		} else {
			console.log(`${process.env.NEXT_PUBLIC_ABSOLUTE_URL}/api/plan-gay-colombia`);
			await axios.get(`${process.env.NEXT_PUBLIC_ABSOLUTE_URL}/api/plan-gay-colombia`).then((resp) => {
				setInitialPlans(resp.data);
				if (filterByCity === 'Ciudades') {
					setFilteredPlans(resp.data.filter((plan) => plan.planName.toLowerCase().includes(searchByWord.toLowerCase())));
				} else {
					const planFilteredCity = resp.data.filter((plan) => plan.city === filterByCity);
					setFilteredPlans(planFilteredCity.filter((plan) => plan.planName.toLowerCase().includes(searchByWord.toLowerCase())));
				}
			});
		}
		console.log('initialPlans:X:', initialPlans);
	}, [filterByCity, searchByWord]);

	return (
		<div className='flex justify-center h-screen w-full p-8 bg-blue-t-800'>
			<Head>
				<title>Planes, eventos y sitios gay</title>
				{/* <meta name='viewport' content='initial-scale=1.0, width=device-width' /> */}
				<meta property='description' content='' />
				<meta property='og:title' content='' />
				<meta property='og:description' content='' />
				<meta property='og:type' content='' />
				<meta property='og:url' content='' />
				<meta property='og:site_name' content='' />
			</Head>
			<main className='flex flex-col lg:flex-row w-full h-full'>
				<div>
					<MobileMenuButton setShowLeftSideMenu={setShowLeftSideMenu} isOpen={isOpen} setIsOpen={setIsOpen} user={user} setFormToRender={setFormToRender} />
					<MobileNavigation showLeftSideMenu={showLeftSideMenu} page={page} setPage={setPage} />
				</div>

				<LeftsideMenu user={user} page={page} setPage={setPage} setIsOpen={setIsOpen} setFormToRender={setFormToRender} />
				<div className='w-full h-full'>
					{page === '' && <PlanGayList filteredPlans={filteredPlans} setShowLeftSideMenu={setShowLeftSideMenu} showLeftSideMenu={showLeftSideMenu} setFilterByCity={setFilterByCity} setSearchByWord={setSearchByWord} />}
					{page === 'eventos' && <Eventos user={user} setIsOpen={setIsOpen} />}
				</div>
				<LoginAndRegisterModal isOpen={isOpen} setIsOpen={setIsOpen} formToRender={formToRender} setFormToRender={setFormToRender} callbackUrl={page} />
			</main>
		</div>
	);
}

export async function getServerSideProps(context) {
	const userSession = await getSession(context);
	const user = userSession;

	return {
		props: {
			user,
		},
	};
}

// const createJWT = () => {
// 	roles = jwt.sign({ roles: ['megaAdmin', 'eventCreator'] }, KEY);
// 	cookie.set('roles', roles, { expires: 0.01 / 24 });
// 	console.log('user roles', roles);
// };

// const readJWT = (async) => {
// 	const co2 = jwt.verify(cookie.get('roles'), KEY);
// 	console.log('cookie read:', co2.roles);
// };
