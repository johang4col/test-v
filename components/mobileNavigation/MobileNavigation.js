import { classNames } from '../../utils/func';
import LeftSideNavigation from '../LeftSideMenu/LeftSideNavigation';

export default function MobileNavigation({ showLeftSideMenu, page, setPage }) {
	return (
		<>
			{/* <!-- Mobile menu, show/hide based on menu state. --> */}
			<div className={classNames(showLeftSideMenu ? 'flex' : 'hidden', 'mx-4 lg:hidden bg-black rounded text-white mb-4')} id='mobile-menu'>
				<div className='pt-2 pb-3 space-y-1 ml-1'>
					<LeftSideNavigation page={page} setPage={setPage} />
				</div>
				<div className='hidden pt-4 pb-3 border-t border-gray-200'>
					<div className='flex items-center px-4'>
						<div className='ml-3'>
							<div className='text-base font-medium text-gray-800'>Tom Cook</div>
							<div className='text-sm font-medium text-gray-500'>tom@example.com</div>
						</div>
						<button type='button' className='ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
							<span className='sr-only'>View notifications</span>
							{/* <!-- Heroicon name: outline/bell --> */}
							<svg className='h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' />
							</svg>
						</button>
					</div>
					<div className='mt-3 space-y-1'>
						<a href='#' className='block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100'>
							Your Profile
						</a>
						<a href='#' className='block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100'>
							Settings
						</a>
						<a href='#' className='block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100'>
							Sign out
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
