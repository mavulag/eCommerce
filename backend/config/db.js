// // Import Mongodb library
// import mongoose from "mongoose";

// // Connect your App with Mongodb
// const connectDB = async () => {
//   try {
//     // Debug
//     // console.log("Connecting to MongoDB with URI:", process.env.MONGO_URI);

//     // Initiate connection here with additional options
//     await mongoose.connect(process.env.MONGO_URI, {
//       //   useNewUrlParser: true,
//       //   useUnifiedTopology: true,
//     });
//     console.log(`Successfully connected to MongoDB :)`);
//   } catch (error) {
//     // Catch the error here
//     console.error(`ERROR: ${error.message}`);
//     process.exit(1); // Exit the process with a failure code
//   }
// };

// export default connectDB;

// // Import the PostgreSQL library
// import pkg from "pg";
// const { Client } = pkg;

// // Connect your App with PostgreSQL
// const connectDB = async () => {
//   try {
//     // Debug
//     // console.log("Connecting to PostgreSQL with URI:", process.env.PG_URI);

//     // Initialize the PostgreSQL client with connection URI or credentials
//     const client = new Client({
//       connectionString: process.env.PG_URI, // Assuming you set the connection string in your .env file
//     });

//     // Connect to the PostgreSQL database
//     await client.connect();
//     console.log(`Successfully connected to PostgreSQL :)`);

//     // Close the connection after use (optional)
//     // await client.end();
//   } catch (error) {
//     // Catch the error here
//     console.error(`ERROR: ${error.message}`);
//     process.exit(1); // Exit the process with a failure code
//   }
// };

// export default connectDB;

import { Sequelize } from "sequelize";

// Initialize Sequelize with your PostgreSQL URI or credentials
const sequelize = new Sequelize(process.env.PG_URI, {
  dialect: "postgres", // Specify PostgreSQL as the database dialect
  logging: false, // Disable logging (optional)
});

// Function to test the connection
const connectDB = async () => {
  try {
    // Authenticate with the database
    await sequelize.authenticate();
    console.log("Successfully connected to PostgreSQL using Sequelize :)");
  } catch (error) {
    console.error("Unable to connect to the database:", error.message);
    process.exit(1); // Exit the process with a failure code
  }
};

export { sequelize, connectDB };
