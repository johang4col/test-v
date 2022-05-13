import React, { useState } from 'react';
import PaginationPlanGayList from './PaginationPlanGayList';
import PlanGayItem from './PlanGayItem';
import TopPlansNavigationBar from './TopPlansNavigationBar/TopPlansNavigationBar';

export default function PlanGayList({ filteredPlans, setFilterByCity, setSearchByWord }) {
	const maxPlansPerPage = 6;
	const [currentPage, setcurrentPage] = useState(1);
	const numerOfpages = Math.ceil(filteredPlans.length / maxPlansPerPage);

	const endPoint = currentPage * maxPlansPerPage;
	const startPoint = endPoint - maxPlansPerPage;
	const planstToRender = filteredPlans.slice(startPoint, endPoint);

	return (
		<>
			<div className='flex-1 flex flex-col h-full items-center bg-white rounded-r-lg rounded-l-lg lg:rounded-l-none justify-between overflow-y-auto'>
				<TopPlansNavigationBar setFilterByCity={setFilterByCity} setcurrentPage={setcurrentPage} setSearchByWord={setSearchByWord} />

				<div className={` ${planstToRender.length > 1 ? '-mt-10' : ''} flex-1 flex flex-col justify-beetwen items-center md:mt-8 lg:-mt-4 w-full`}>
					<div className='flex flex-col xl:w-1080px] h-[604px] pt-10 md:pt-10'>
						<ul className={` ${planstToRender.length > 1 ? 'mb-2 grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-3 md:gap-0 lg:grid-cols-3' : 'flex justify-center items-center'}, gap-2 lg:min-h-[504px] xl:gap-4 lg:min-w-[630px]`}>
							{planstToRender &&
								planstToRender.map((gyaPlan, index) => (
									<li key={index} className='my-2 sm:mx-4'>
										<PlanGayItem address={gyaPlan.address} city={gyaPlan.city} description={gyaPlan.description} image={gyaPlan.image} planName={gyaPlan.planName} whatsapp={gyaPlan.whatsapp} schedules={gyaPlan.schedules} />
									</li>
								))}
						</ul>
						<PaginationPlanGayList numerOfpages={numerOfpages} filteredPlansLength={filteredPlans.length} maxPlansPerPage={maxPlansPerPage} currentPage={currentPage} setcurrentPage={setcurrentPage} />
					</div>
				</div>
			</div>
		</>
	);
}
