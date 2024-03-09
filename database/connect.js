import { connect } from "mongoose";
const DB_NAME = "FarmInsights"

const connectToMongo = async () => {
    try {
        const connectionInstance = await connect(`${process.env.MONGOURI}/${DB_NAME}`)
        console.log(`MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

export default connectToMongo