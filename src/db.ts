import mongoose from "mongoose";

export const connectDB = async () => {
    const connectionString = process.env.MONGO_CONNECTION_STRING;
    if (!connectionString) {
        throw new Error("MONGO_CONNECTION_STRING is not defined in the environment variables.");
    }

    try {
        const conn = await mongoose.connect(connectionString);
        console.log(`Connected to db ${conn.connection.host}`);
    } catch (error) {
        console.error("Error connecting to DB", error);
        process.exit(1);
    }
};
