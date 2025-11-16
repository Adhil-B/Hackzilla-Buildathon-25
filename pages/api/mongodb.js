import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  // In development, use a mock client
  console.log('MONGODB_URI not defined, using mock client');
  clientPromise = Promise.resolve({
    db: (dbName) => ({
      collection: (collectionName) => ({
        find: () => ({ toArray: () => Promise.resolve([]) }),
        findOne: () => Promise.resolve(null),
        insertOne: () => Promise.resolve({ insertedId: 'mock-id' }),
        updateOne: () => Promise.resolve({ modifiedCount: 1 }),
        deleteOne: () => Promise.resolve({ deletedCount: 1 }),
      }),
    }),
  });
} else {
  if (process.env.NODE_ENV === 'development') {
    // In development, reuse the client if it already exists
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri, options);
      global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
  } else {
    // In production, create a new client
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
  }
}

export default async function mongodb(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db('credify');
    
    // This is just a placeholder API route
    res.status(200).json({ message: 'MongoDB connection established', db: 'credify' });
  } catch (error) {
    console.error('MongoDB connection error:', error);
    res.status(500).json({ error: 'Failed to connect to MongoDB' });
  }
}