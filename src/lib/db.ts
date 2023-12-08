import { MongoClient } from "mongodb";

export const connectToDatabase = async () => {
    if(!process.env.MONGODB_URI){
        throw new Error('MONGODB_URI env is not defined')
    }
    return MongoClient.connect(process.env.MONGODB_URI)
}