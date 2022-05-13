const relationsList = [
	{
		Id: 'ru8i41-wer651-asd654-v9g1v3',
		Title: 'Ciudades',
	},
	{
		Id: 'ru8i41-wer651-asd654-v9g1hg',
		Title: 'Bogotá',
	},
	{
		Id: 'ru8i41-wer651-asd654-v9g1v',
		Title: 'Medellín',
	},
];

export default function TopPlansNavigationBar({ setFilterByCity, setcurrentPage, setSearchByWord }) {
	return (
		<div className='flex min-w-[260px] md:min-w-[600px] z-0 mt-10'>
			<nav className='w-full'>
				<div className='my-5'>
					<div className='flex justify-between items-center h-4 lg:w-[716px] w-full'>
						<div className='flex-1 flex items-center justify-center px-2  lg:justify-end my-12'>
							<div className='max-w-4xl w-full lg:max-w-ms grid lg:grid-cols-4 items-center mx-1 mb-4'>
								<label htmlFor='search' className='sr-only'>
									Search
								</label>
								<div className='relative col-span-3'>
									<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
										{/* <!-- Heroicon name: solid/search --> */}
										<div>
											<svg className='h-5 w-5 text-gray-400' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
												<path fillRule='evenodd' d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z' clipRule='evenodd' />
											</svg>
										</div>
									</div>

									<input
										id='search'
										name='search'
										className='shadow block w-full pl-10 pr-3 py-1 border border-charcoal-t-700 rounded-l-md rounded-r-md lg:rounded-r-none leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 '
										placeholder='Busca por nombre'
										type='search'
										onChange={(e) => setSearchByWord(e.target.value)}
									></input>
								</div>
								<div className='w-full mb-2'>
									<label className='block text-charcoal text-sm font-medium mb-2' htmlFor='relation'>
										{/* Relation */}
									</label>
									<select
										className='shadow border border-charcoal-t-700 rounded-l-md lg:rounded-l-none rounded-r-md w-full py-1.5 mr-6 md:px-3 block bg-orange text-white text-sm leading-tight focus:ring-orange-t-500 focus:border-orange-t-500'
										id='relation'
										name='relation'
										required
										onChange={(e) => {
											setFilterByCity(e.target.value);
											setcurrentPage(1);
										}}
									>
										{relationsList.map((relation, index) => (
											<option key={index} value={relation.Title} className='px-2'>
												{relation.Title}
											</option>
										))}
									</select>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}
