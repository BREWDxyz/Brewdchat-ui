// Importing the dotenv configuration function
import { config } from 'dotenv';
config({ path: './.env.local' });  // Specify the path to .env.local

// Importing the MongoClient constructor from the mongodb module
import { MongoClient } from 'mongodb';

// Defining the async function to connect to MongoDB
async function connectToMongo() {
  // Ensuring that the MONGODB_URL environment variable is defined
  if (!process.env.MONGODB_URL) {
    throw new Error('MONGODB_URL environment variable is not defined');
  }
  
  // Creating a new MongoClient instance
  const client = new MongoClient(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    // Attempting to connect to MongoDB
    await client.connect();
    console.log('Connected successfully to MongoDB');
  } catch (err) {
    // Logging any error that occurs
    console.error('Failed to connect to MongoDB:', err);
  } finally {
    // Ensuring that the client connection is closed
    await client.close();
  }
}

// Calling the async function to connect to MongoDB
connectToMongo();
