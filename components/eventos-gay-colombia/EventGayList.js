/* eslint-disable no-underscore-dangle */
import GayEventItem from './EventGayItem';

export default function EventGayList({ user, setIsOpen }) {
	const eventsToRender = [
		{
			_id: '626079d03c855c17bfc2dfc6',
			eventName: 'Speed Dating',
			eventUrl: `${process.env.NEXT_PUBLIC_ABSOLUTE_URL}/evento-sp-de-1tuone`,
			city: 'city',
			address: 'address',
			image: 'https://gay-events-images.s3.sa-east-1.amazonaws.com/speed-dating-image-one.jpg',
		},
	];

	return (
		<div className={` ${eventsToRender.length > 1 ? '-mt-20' : ''} flex-1 flex flex-col justify-center items-center md:mt-8 lg:-mt-4 w-full`}>
			<div className='flex flex-col xl:w-1080px] h-[604px]'>
				<ul className={` ${eventsToRender.length > 1 ? 'grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-2 md:gap-0 lg:grid-cols-2' : 'flex justify-center items-center'}, gap-2 lg:min-h-[504px] xl:gap-4 lg:min-w-[630px]`}>
					{eventsToRender &&
						eventsToRender.map((event, index) => (
							<li key={index} className='my-2 sm:mx-4'>
								<GayEventItem address={event.address} city={event.city} description={'event.description'} image={event.image} eventName={event.eventName} whatsapp={'event.whatsapp'} schedules={'event.schedules'} eventUrl={event.eventUrl} user={user} setIsOpen={setIsOpen} eventId={event._id} />
							</li>
						))}
				</ul>
				{/* <PaginationPlanGayList numerOfpages={numerOfpages} filteredPlansLength={filteredPlans.length} maxPlansPerPage={maxPlansPerPage} currentPage={currentPage} setcurrentPage={setcurrentPage} /> */}
			</div>
		</div>
	);
}
