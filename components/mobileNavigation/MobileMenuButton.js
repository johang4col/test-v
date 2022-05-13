import UserSection from '../LeftSideMenu/UserSection';

export default function MobileMenuButton({ setShowLeftSideMenu, user, setIsOpen, setFormToRender }) {
	return (
		<div className='flex lg:hidden mb-4 items-center justify-between'>
			{/* <!-- Mobile menu button --> */}
			<UserSection user={user} setIsOpen={setIsOpen} setFormToRender={setFormToRender} />
			<button
				onClick={() => setShowLeftSideMenu((prevValue) => !prevValue)}
				type='button'
				className='inline-flex bg-orange-t-600 items-center justify-center p-2 rounded-md text-black hover:text-charcoal-t-500 hover:bg-black focus:outline-none focus:ring-2 focus:ring-inset'
				aria-controls='mobile-menu'
				aria-expanded='false'
			>
				<svg className='block h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
					<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
				</svg>
			</button>
		</div>
	);
}
