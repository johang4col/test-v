// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

export default function PlantillaPlanGay({ address, city, description, image, planName, whatsapp, schedules }) {
	return (
		<div className='relative h-80 sm:h-72 md:h-80 lg:h-72 xl:h-64 w-32 sm:w-40 md:w-56 lg:w-52 xl:w-[300px] rounded-t-xl rounded-b-md shadow-xl'>
			{/* puede que aqu+í no necesite los dos div */}
			<div className='flex flex-col shadow-md h-36 w-32 sm:w-40 md:w-56 lg:w-52 xl:w-[300px] justify-center items-center'>
				<div className='relative w-full rounded-xl h-36'>{image && <Image alt='' src={image} layout='fill' className='object-cover w-full rounded-t-md' />}</div>
			</div>
			{/* ------------------------------------------------------ */}
			<div className='z-40 flex flex-col rounded-b-md px-1 mt-1 w-full h-full overflow-y-auto text-xs md:text-sm'>
				<div className='absolute top-2 rounded bg-white px-2 text-xs w-20 md:w-auto  lg:text-sm'>
					<p>
						<b>{planName}</b>
					</p>
				</div>

				<p>{description}</p>

				<p>
					<b>Dirección:</b> {address}
				</p>

				<p>
					<b>Horarios: </b>
					{schedules}
				</p>
				{whatsapp ? (
					<p className='absolute top-2 right-1'>
						<Link href={`https://web.whatsapp.com/send?phone=57${whatsapp}`}>
							<a target='_blank' rel='noreferrer'>
								{/* <FontAwesomeIcon icon={['fab', 'whatsapp']} className='fa-2x text-white rounded-md p-0.5 h4 w-12 bg-peridot-s-100 cursor-pointer' /> */}
							</a>
						</Link>
					</p>
				) : (
					<p className='absolute top-2 right-1'>
						<a target='_blank' rel='noreferrer'>
							{/* <FontAwesomeIcon icon={['fab', 'whatsapp']} className='fa-2x text-white rounded-md p-0.5 h4 w-12 bg-charcoal-t-300' /> */}
						</a>
					</p>
				)}

				<p>
					<b>Ciudad:</b> {city}
				</p>
			</div>
		</div>
	);
}
