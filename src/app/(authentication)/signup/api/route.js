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
    const newUser = await request.json();
    try {
        const db = await connectDB()
        const usersCollection = db.collection('users')

        const exist = await usersCollection.findOne({ email: newUser.email })
        if (exist) {
            return Response.json({ message: 'User Exist' }, { status: 304 })
        }
        const res = await usersCollection.insertOne(newUser)
        return Response.json({ message: 'User Created' }, { status: 200 })
    } catch (error) {
        return Response.json(
            { message: 'Something Went Wrong', error },
            { status: 500 }
        )
    }
}