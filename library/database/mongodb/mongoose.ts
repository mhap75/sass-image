import { connect, Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

interface MongoDBConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongoDBConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export const connectToMongoDatabase = async () => {
  if (!MONGODB_URI) throw new Error("MongoDB URI is missing");

  if (!cached.conn) {
    cached.promise =
      cached.promise ||
      connect(MONGODB_URI, { dbName: "sass-image", bufferCommands: false });

    cached.conn = await cached.promise;
  }

  return cached.conn;
};
