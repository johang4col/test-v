import Head from 'next/head';
import LeftsideMenu from '../LeftSideMenu/index';

export default function Layout({ user, children }) {
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

			<LeftsideMenu user={user} />
			<main className='w-full'>{children}</main>
		</div>
	);
}
