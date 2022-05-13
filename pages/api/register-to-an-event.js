/* eslint-disable no-unused-vars */
// nobody can register twice in a single event

import { MongoClient, ObjectId } from 'mongodb';
import { hash } from 'bcryptjs';

function referralData({ req }) {
	const data = {
		$push: {
			referrals: {
				$each: [
					{
						...(req.body.eventName && { eventName: req.body.eventName }),
						...(req.body.eventId && { eventId: req.body.eventId }),
						...(req.body.registeredAt && { registeredAt: req.body.registeredAt }),
						...(req.body.userId && { referedUserId: req.body.userId }),
					},
				],
			},
		},
	};

	return data;
}

const userLoggedFLow = async ({ req, res }) => {
	const updateEvent = {
		$push: {
			registeredEvents: {
				$each: [
					{
						...(req.body.eventName && { eventName: req.body.eventName }),
						...(req.body.eventId && { eventId: req.body.eventId }),
						...(req.body.insight && { insight: req.body.insight }),
						...(req.body.registeredAt && { registeredAt: req.body.registeredAt }),
						...(req.body.referId && { referrerId: req.body.referId }),
					},
				],
			},
		},
	};

	const updateBody = {
		...(req.body.name && { name: req.body.name }), // if it exist in the body then create the property in the object else do not create the property
		...(req.body.whatsapp && { whatsapp: req.body.whatsapp }),
		...(req.body.edad && { edad: req.body.edad }),
		...(req.body.profesion && { profesion: req.body.profesion }),
		...(req.body.identidadSexual && { identidadSexual: req.body.identidadSexual }),
		...(req.body.ciudad && { ciudad: req.body.ciudad }),
		...(req.body.privacyStatement && { privacyStatement: req.body.privacyStatement }),
	};

	console.log('I AM HEREEEEEEEEEEEEEEEEEEEEEEEEEEE');
	try {
		const client = await MongoClient.connect('mongodb+srv://mike:Timetochange6@cluster0.nygov.mongodb.net/users?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
		const db = client.db();
		const users = await db.collection('users');

		// Find user with the _objectId and update according to the data structure in the users collection
		const resultPush = await users.update({ _id: ObjectId(req.body.userId) }, updateEvent);
		const result = await users.findOneAndUpdate({ _id: ObjectId(req.body.userId) }, { $set: updateBody }, { upsert: false });

		// Not user found - send error res
		if (!result || !resultPush) {
			client.close();
			throw new Error('No user found with the Id');
		}

		// if there is a referId save the
		if (req.body.referId) {
			const updateReferral = referralData({ req });
			const resulReferral = await users.update({ _id: ObjectId(req.body.referId) }, updateReferral);
		}

		client.close();
		res.status(200).json(result);
	} catch (error) {
		console.log(error);
	}
};

const newUserAndRegiterToEvent = async ({ req, res }) => {
	const { email, password, ciudad, edad, identidadSexual, privacyStatement, profesion, whatsapp } = req.body;
	console.log('INICIANDO PROCESO, CON ESTE REQ:::::', req.body);

	const client = await MongoClient.connect('mongodb+srv://mike:Timetochange6@cluster0.nygov.mongodb.net/users?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
	const db = client.db();
	// Check existing
	const checkExisting = await db.collection('users').findOne({ email });

	// Send error response if duplicate user is found
	if (checkExisting) {
		res.status(422).json({ message: 'User already exists' });
		client.close();
		return;
	}

	const registeredEvents = [
		{
			...(req.body.eventName && { eventName: req.body.eventName }),
			...(req.body.eventId && { eventId: req.body.eventId }),
			...(req.body.insight && { insight: req.body.insight }),
			...(req.body.registeredAt && { registeredAt: req.body.registeredAt }),
			...(req.body.referId && { referrerId: req.body.referId }),
		},
	];

	// Hash password and create the new user
	const status = await db.collection('users').insertOne({
		email,
		password: await hash(password, 12),
		createdAt: req.body.registeredAt,
		roles: [{ visitor: true }],
		ciudad,
		edad,
		identidadSexual,
		privacyStatement,
		profesion,
		whatsapp,
		registeredEvents,
	});

	console.log('STATUS:::', status);
	const data = {
		$push: {
			referrals: {
				$each: [
					{
						...(req.body.eventName && { eventName: req.body.eventName }),
						...(req.body.eventId && { eventId: req.body.eventId }),
						...(req.body.registeredAt && { registeredAt: req.body.registeredAt }),
						...(status.insertedId && { referedUserId: status.insertedId }),
					},
				],
			},
		},
	};
	// if there is a referId save the
	const users = await db.collection('users');
	if (req.body.referId) {
		const updateReferral = data;
		const resulReferral = await users.update({ _id: ObjectId(req.body.referId) }, updateReferral);
	}

	res.status(201).json({ message: 'User created', ...status });

	// Close DB connection
	client.close();
};

export default async function handler(req, res) {
	console.log('body:', req.body);

	if (req.method === 'PUT') {
		if (!req.body.email) {
			// if there is an email  means there is a logged account
			userLoggedFLow({ req, res });
		} else {
			// if there is not an email then sign up process
			newUserAndRegiterToEvent({ req, res });
			console.log('EJECUTAR FLOW DE SING UP para este nuevo usuario de la webApp');
		}
	}
}
