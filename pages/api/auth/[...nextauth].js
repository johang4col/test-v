/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { MongoClient } from 'mongodb';
import { compare } from 'bcryptjs';

export default NextAuth({
	// Configure JWT
	session: {
		jwt: true,
	},
	// Specify Provider
	providers: [
		CredentialsProvider({
			async authorize(credentials) {
				// Connect to DB
				// const client = await MongoClient.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_CLUSTER}.n4tnm.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });
				const client = await MongoClient.connect('mongodb+srv://mike:Timetochange6@cluster0.nygov.mongodb.net/users?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

				// Get all the users
				const db = client.db();
				const users = await db.collection('users');

				// Find user with the email
				const result = await users.findOne({ email: credentials.email });
				// Not found - send error res
				if (!result) {
					client.close();
					throw new Error('No user found with the email');
				}

				// Check hased password with DB password
				const checkPassword = await compare(credentials.password, result.password);

				// Incorrect password - send response
				if (!checkPassword) {
					client.close();
					throw new Error('Password doesnt match');
				}

				// Else send success response

				client.close();
				// eslint-disable-next-line no-underscore-dangle
				return {
					email: result.email,
					userId: result._id,
				};
			},
		}),
	],

	callbacks: {
		async jwt({ token, user, account }) {
			// Persist the OAuth access_token to the token right after signin
			if (account) {
				token.accessToken = user;
			}
			return token;
		},
		async session({ session, token }) {
			const { email } = token;
			//* **********
			const client = await MongoClient.connect('mongodb+srv://mike:Timetochange6@cluster0.nygov.mongodb.net/users?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
			const db = client.db();
			// Check existing
			const users = await db.collection('users');

			// Find user with the email
			const userData = await users.findOne({ email });
			// Not found - send error res
			if (!userData) {
				client.close();
				throw new Error('No user found with the email');
			}
			// console.log(userData);
			const userProfile = {
				ciudad: userData.ciudad,
				createdAt: userData.createdAt,
				edad: userData.edad,
				email: userData.email,
				identidadSexual: userData.identidadSexual,
				name: userData.name,
				profesion: userData.profesion,
				registeredEvents: userData.registeredEvents,
				roles: userData.roles,
				whatsapp: userData.whatsapp,
				_id: userData._id,
				privacyStatement: userData.privacyStatement,
				referrals: userData.referrals,
			};
			// Send properties to the client, like an access_token from a provider.
			session.accessToken = userProfile;
			client.close();
			return session;
		},
	},
});
