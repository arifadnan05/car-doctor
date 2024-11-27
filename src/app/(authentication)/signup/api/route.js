
import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";

export const POST = async (request) => {
    try {
        const newUser = await request.json();
        const db = await connectDB();
        const usersCollection = db.collection("users");

        const exist = await usersCollection.findOne({ email: newUser.email });
        if (exist) {
            return new Response(
                JSON.stringify({ message: "User Exists" }),
                { status: 304, headers: { "Content-Type": "application/json" } }
            );
        }
        const hashedPassword = bcrypt.hashSync(newUser.password, 14);

        const res = await usersCollection.insertOne({ ...newUser, password: hashedPassword });
        return new Response(
            JSON.stringify({ message: "User Created", userId: res.insertedId }),
            { status: 201, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        console.error("API error:", error.message);
        return new Response(
            JSON.stringify({ message: "Server Error", error: error.message }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }

};
