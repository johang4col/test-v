import { signOut } from 'next-auth/react';

export default function UserSection({ user, setIsOpen, setFormToRender }) {
	return (
		<div className='flex flex-col items-center justify-center'>
			{user ? (
				<div className='text-black lg:text-white'>
					<p>{user.user.email}</p>
					<p>{user.accessToken.ciudad && user.accessToken.ciudad}</p>

					<button className='px-4 py-2 text-white bg-blue rounded' onClick={() => signOut()}>
						Log out
					</button>
				</div>
			) : (
				<div>
					<button
						className='px-4 py-2 text-white bg-orange hover:bg-black rounded'
						onClick={() => {
							setFormToRender('login');
							setIsOpen(true);
						}}
					>
						Inicia sesión
					</button>
					<p
						className='text-white hover:text-orange cursor-pointer flex justify-center'
						onClick={() => {
							setFormToRender('register');
							setIsOpen(true);
						}}
					>
						Registrate
					</p>
				</div>
			)}
		</div>
	);
}
