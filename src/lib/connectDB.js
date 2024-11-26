// import { MongoClient, ServerApiVersion } from "mongodb";

// let db;
// export const connectDB = async () => {
//     if (db) return db;
//     try {
//         const uri = `mongodb+srv://${process.env.NEXT_AUTH_DB_USER}:${process.env.NEXT_AUTH_DB_PASSWORD}@cluster0.8lcgwxk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
//         const client = new MongoClient(uri, {
//             serverApi: {
//                 version: ServerApiVersion.v1,
//                 strict: true,
//                 deprecationErrors: true,
//             }
//         });
//         db = client.db('carDoctor')
//         return db;
//     }
//     catch (error) {
//         console.log(error)
//     }
// }
import { MongoClient, ServerApiVersion } from "mongodb";

let db;
export const connectDB = async () => {
    if (db) return db; // Return the existing connection if already established

    try {
        const uri = `mongodb+srv://${process.env.NEXT_AUTH_DB_USER}:${process.env.NEXT_AUTH_DB_PASSWORD}@cluster0.8lcgwxk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            },
        });

        await client.connect(); // Ensure the client connects to the cluster
        db = client.db("carDoctor"); // Initialize the `db` instance
        return db;
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
        throw new Error("Database connection failed"); // Propagate the error
    }
};
