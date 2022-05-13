import LeftSideNavigation from './LeftSideNavigation';
import UserSection from './UserSection';

export default function LeftsideMenu({ page, user, setPage, setIsOpen, setFormToRender }) {
	return (
		<div className='hidden lg:flex min-h-0 bg-black w-60 rounded-l-lg'>
			<div className='flex-1 flex flex-col pt-5 pb-4 overflow-y-auto'>
				<div className='flex items-center flex-shrink-0 px-4'>{/* <img className='h-8 w-auto' src='https://tailwindui.com/img/logos/workflow-logo-blue-300-mark-white-text.svg' alt='Workflow'></img>{' '} */}</div>
				<LeftSideNavigation page={page} setPage={setPage} />
				<UserSection user={user} setFormToRender={setFormToRender} setIsOpen={setIsOpen} />
			</div>
		</div>
	);
}
