import {connect, ConnectOptions} from 'mongoose';

export const dbConnect = () => {
    console.log("Connecting to MongoDB with URL:", process.env.MONGO_URI);

    connect(process.env.MONGO_URI!, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } as ConnectOptions).then(() => console.log("Connected successfully"))
    .catch((error) => console.log("Connection error:", error)); // Better error logging
}