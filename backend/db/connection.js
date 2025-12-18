import mongoose from 'mongoose';
const db = async () => {
    try {
        const connectionString = process.env.DATABASE_URL?.trim();
        if (!connectionString) {
            console.error('DATABASE_URL is not set');
            return;
        }
        await mongoose.connect(connectionString);
        console.log("Database is connected successfully");
    }
    catch (error) {
        console.log("Warning coming from the database connection")
        console.log("Database connection failed", error);
    }
}
export default db;
