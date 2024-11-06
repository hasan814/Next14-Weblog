import mongoose from "mongoose";

const connection: { isConnected?: number } = {};

export const connectDB = async () => {
    try {
        if (connection.isConnected) {
            console.log('Using existing connection');
            return;
        }

        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI is not defined in the environment variables");
        }

        const db = await mongoose.connect(process.env.MONGO_URI);
        connection.isConnected = db.connections[0].readyState;

        console.log('DB connected successfully');
    } catch (error) {
        console.error('Error connecting to DB:', error);
        throw new Error('Error connecting to DB');
    }
};
