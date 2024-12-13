// Import Mongodb library
import mongoose from "mongoose";

// Connect your App with Mongodb
const connectDB = async () => {
    try {
        // Initiate connection here with additional options
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Successfully connected to MongoDB :)`);
    } catch (error) {
        // Catch the error here
        console.error(`ERROR: ${error.message}`);
        process.exit(1); // Exit the process with a failure code
    }
};

export default connectDB;

