import EventGayList from './EventGayList';

export default function Eventos({ user, setIsOpen }) {
	return (
		<div className='w-full bg-white flex justify-center items-center h-full flex-1 flex-col  rounded-r-lg rounded-l-lg lg:rounded-l-none  overflow-y-auto'>
			<EventGayList user={user} setIsOpen={setIsOpen} />
		</div>
	);
}
