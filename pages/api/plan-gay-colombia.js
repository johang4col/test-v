import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		try {
			const client = await MongoClient.connect('mongodb+srv://mike:Timetochange6@cluster0.nygov.mongodb.net/gayplansincolombia?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

			const db = client.db();
			const status = await db.collection('gayplansincolombia').insertOne({
				address: req.body.address,
				city: req.body.city,
				description: req.body.description,
				schedules: req.body.schedules,
				image: req.body.image,
				planName: req.body.planName,
				whatsapp: req.body.whatsapp,
				labels: req.body.labels,
			});
			// Send success response
			res.status(201).json({ message: 'Event created', ...status });
			// Close DB connection
			client.close();
		} catch (error) {
			console.log(error);
		}
	}

	if (req.method === 'GET') {
		try {
			const client = await MongoClient.connect('mongodb+srv://mike:Timetochange6@cluster0.nygov.mongodb.net/gayplansincolombia?retryWrites=true&w=majority');
			const db = client.db();
			const gayplansincolombiaCollection = db.collection('gayplansincolombia');
			const gayPlans = await gayplansincolombiaCollection.find().toArray();

			client.close();
			res.status(200).json(gayPlans);
			// client.close();
		} catch (error) {
			console.log(Error);
		}
	}
}
