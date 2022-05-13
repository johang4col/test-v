const MobileButtons = () => (
	<div className='flex-1 flex justify-between lg:hidden'>
		<a href='#' className='relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'>
			Previous
		</a>
		<a href='#' className='ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'>
			Next
		</a>
	</div>
);

const Pages = ({ numerOfpages, setcurrentPage, currentPage }) => {
	const updateCurrentPage = (add) => {
		const rest = add ? currentPage + 1 : currentPage - 1;

		if (rest < 1) {
			setcurrentPage(numerOfpages);
		} else if (rest > numerOfpages) {
			setcurrentPage(1);
		} else {
			setcurrentPage(rest);
		}
	};
	return (
		<nav className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px' aria-label='Pagination'>
			<button onClick={() => updateCurrentPage(false)} className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'>
				<span className='sr-only'>Previous</span>
				{/* <!-- Heroicon name: solid/chevron-left --> */}
				<svg className='h-5 w-5' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
					<path fillRule='evenodd' d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z' clipRule='evenodd' />
				</svg>
			</button>

			{/* <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" --> */}
			{[...Array(numerOfpages)].map((page, index) => (
				<div key={index}>
					<button onClick={() => setcurrentPage(index + 1)} aria-current='page' className={`${currentPage === index + 1 ? 'bg-orange text-white' : 'text-black'} z-10 bg-indigo-50 border-black relative inline-flex items-center px-4 py-2 border text-sm font-medium`}>
						{index + 1}
					</button>
				</div>
			))}

			<span className='relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700'>...</span>
			<button onClick={() => updateCurrentPage(true)} className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'>
				<span className='sr-only'>Next</span>
				{/* <!-- Heroicon name: solid/chevron-right --> */}
				<svg className='h-5 w-5' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
					<path fillRule='evenodd' d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' clipRule='evenodd' />
				</svg>
			</button>
		</nav>
	);
};

export default function PaginationPlanGayList({ numerOfpages, filteredPlansLength, maxPlansPerPage, currentPage, setcurrentPage }) {
	const x1 = currentPage * maxPlansPerPage;
	const x0 = x1 - maxPlansPerPage + 1;
	return (
		<div className='px-0 py-3 flex items-center justify-between sm:px-6 w-full xl:px-10  mt-10'>
			<MobileButtons />
			{/* This is the big screens component */}
			<div className='hidden lg:flex-1 lg:flex lg:items-center lg:justify-between'>
				<div>
					<p className='text-sm text-charcoal'>
						{x0} a {x1 <= filteredPlansLength ? x1 : filteredPlansLength} de {filteredPlansLength} planes encontrados
					</p>
				</div>
				<div>
					<Pages numerOfpages={numerOfpages} setcurrentPage={setcurrentPage} currentPage={currentPage} />
				</div>
			</div>
		</div>
	);
}
