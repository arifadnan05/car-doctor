// import { connectDB } from "@/lib/connectDB";

// export const POST = async (request) => {
//     try {
//         // Parse the request body
//         const newUser = await request.json();

//         // Connect to the database
//         const db = await connectDB();
//         const usersCollection = db.collection("users");

//         // Check if the user already exists
//         const exist = await usersCollection.findOne({ email: newUser.email });
//         if (exist) {
//             return new Response(
//                 JSON.stringify({ message: "User already exists" }),
//                 { status: 409, headers: { "Content-Type": "application/json" } }
//             );
//         }

//         // Insert the new user
//         await usersCollection.insertOne(newUser);
//         return new Response(
//             JSON.stringify({ message: "User created successfully" }),
//             { status: 201, headers: { "Content-Type": "application/json" } }
//         );
//     } catch (error) {
//         // Log the error for debugging
//         console.error("Error in POST /api/users:", error);

//         return new Response(
//             JSON.stringify({ message: "Something went wrong", error: error.message }),
//             { status: 500, headers: { "Content-Type": "application/json" } }
//         );
//     }
// };


import { connectDB } from "@/lib/connectDB";

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

        const res = await usersCollection.insertOne(newUser);
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
