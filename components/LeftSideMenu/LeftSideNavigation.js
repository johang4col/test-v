import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function LeftSideNavigation({ page, setPage }) {
	const saveSelectedTab = (tab) => {
		const tabUrl = tab === '' ? '' : `${tab}`;
		setPage(tab);

		// Push url to browser history
		window.history.pushState({}, '', `${process.env.NEXT_PUBLIC_ABSOLUTE_URL}${tabUrl}`);
	};

	return (
		<nav className='mt-5 flex-1 px-2 space-y-1 w-full' aria-label='Sidebar'>
			<button onClick={() => saveSelectedTab('')} className={`w-full font-semibold text-black group flex items-center px-2 py-2 text-sm rounded-md bg-orange ${page === '' ? 'bg-orange-t-600' : 'bg-charcoal-t-900'}`}>
				<div className='min-w-[32px] mr-2 flex justify-center'>
					<FontAwesomeIcon icon={['fas', 'home']} className='fa-2x text-black rounded-md p-0.5 h-8' />
				</div>
				<span>Guía gay Colombia</span>
			</button>

			<button onClick={() => saveSelectedTab('eventos')} className={`w-full font-semibold text-black group flex items-center px-2 py-2 text-sm rounded-md  ${page === 'eventos' ? 'bg-orange-t-600' : 'bg-charcoal-t-900'}`}>
				<div className='min-w-[32px] mr-2 flex'>
					<FontAwesomeIcon icon={['fas', 'calendar']} className='fa-2x text-black rounded-md p-0.5 h-8' />
				</div>
				<span>Eventos</span>
			</button>
		</nav>
	);
}
