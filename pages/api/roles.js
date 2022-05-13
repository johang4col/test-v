// the next object allow us to connect to our cluster
import { MongoClient } from 'mongodb';
// api/plan-gay-colombia
//POST /api/plan-gay-colomnia

export default async function handler(req, res) {
	if (req.method === 'POST') {
		try {
			const data = req.body;
			const client = await MongoClient.connect('mongodb+srv://mike:Timetochange6@cluster0.nygov.mongodb.net/users?retryWrites=true&w=majority');
			const db = client.db();

			const gayplansincolombiaCollection = db.collection('roles');

			const result = await gayplansincolombiaCollection.insertOne({
				visitor: true,
			});

			client.close();
			res.status(201).json({ message: 'role' });
		} catch (error) {
			console.log(error);
		}
	}

	if (req.method === 'GET') {
		try {
		} catch (error) {
			console.log(Error);
		}
	}
}
