
import Mongoose, { model } from 'mongoose';

export const mongoConnection = () => {
    const URI = "mongodb://localhost:27017/users_jest";

    Mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    });

    // Helpers
    const database = Mongoose.connection;
    database.once("open", async () => {
        console.log("Connected to database");
    });
    database.on("error", () => {
        console.log("Error connecting to database");
    });
};