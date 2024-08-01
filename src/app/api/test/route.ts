// import type { NextApiRequest, NextApiResponse } from 'next';
// import mongoose from 'mongoose';

// type ConnectionObject = {
//   isConnected: number;
// };

// const connection: ConnectionObject = {
//   isConnected: 0,
// };

// async function dbConnect() {
//   if (connection.isConnected) {
//     console.log('Using existing connection');
//     return;
//   }

//   const URI = process.env.MONGO_URI as string;

//   try {
//     const db = await mongoose.connect(URI, {
//       dbName: 'reFlow',
//     });

//     connection.isConnected = db.connections[0].readyState;
//     console.log('New connection');
//   } catch (err) {
//     console.error('MongoDB connection error:', err);
//     throw err;
//   }
// }

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   await dbConnect();
//   res.status(200).json({ message: 'Connected to MongoDB' });
// }
