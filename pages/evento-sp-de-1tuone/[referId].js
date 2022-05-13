import { getSession } from 'next-auth/react';
import { MongoClient, ObjectId } from 'mongodb';
import EventPage from './index';

export const Refer = ({ referId, user, pageExist }) => {
	if (!pageExist) {
		return <p className='flex justify-center items-center h-screen'>The page doesn´t exist here 404</p>;
	}
	console.log('page exist?:', pageExist);
	return (
		<div className='flex h-full justify-center items-center'>
			<EventPage referId={referId} user={user} />
		</div>
	);
};

export const getServerSideProps = async (context) => {
	const { referId } = context.query;
	const user = await getSession(context);

	let pageExist = false;

	if (Buffer.byteLength(referId, 'utf8') > 23) {
		const client = await MongoClient.connect('mongodb+srv://mike:Timetochange6@cluster0.nygov.mongodb.net/users?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
		const db = client.db();
		const users = await db.collection('users');

		// Find user with the _objectId
		const result = await users.findOne({ _id: ObjectId(`${referId}`) });

		// Not user found - send error res
		if (!result) {
			client.close();
			throw new Error('No user found with the Id');
		}
		pageExist = true;
		client.close();
	}

	return {
		props: {
			user,
			referId,
			pageExist,
		},
	};
};

export default Refer;
