import mongoose from "mongoose";

type ConnectionObject = {
  isConnected: number;
}

const connection: ConnectionObject = {
  isConnected: 0, // Initialized to 0
};

async function dbConnect(): Promise<void> {
  const URI = process.env.MONGO_URI as string;

  if (connection.isConnected) {
    console.log("Using existing connection");
    return;
  }

  try {
    const db = await mongoose.connect(URI, {
      dbName: "reFlow",
    });
    
    connection.isConnected = db.connections[0].readyState;
    console.log("New connection");
  } catch (err) {
    console.error("MongoDB connection error:", err); // Optionally throw the error to handle it further up the call stack
  }
}

export default dbConnect;
