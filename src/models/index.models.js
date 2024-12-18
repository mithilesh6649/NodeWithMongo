const config = require("../config/config");
const mongoose = require('mongoose');


const connectDB = () => {
    return mongoose.connect(`${config.database.DB_URL}/${config.database.DB_NAME}`, {
        // useNewUrlParser: true,  
        // useUnifiedTopology: true,
        // useCreateIndex: true, 
        // useFindAndModify: false, 
    }).then((conn) => {
        // Log a successful connection with instance information
        console.log(`MongoDB connected: ${conn.connection.host}`);
        console.log(`Database: ${conn.connection.name}`);
        console.log(`Host: ${conn.connection.host}`);
        console.log(`Port: ${conn.connection.port}`);
    }).catch((error) => {
        // Log any errors
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit the process if the connection fails
    });
};
module.exports = connectDB;