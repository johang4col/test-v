import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { SessionProvider } from 'next-auth/react';

import '../styles/tailwind.css';
import '../styles/style.min.css';

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';

import * as gtag from '../utils/lib/gtag';

// library.add(fab, fas);

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = (url) => {
			gtag.pageview(url);
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return (
		<SessionProvider session={session} refetchInterval={5 * 60}>
			<Component {...pageProps} />
		</SessionProvider>
	);
};

export default App;
