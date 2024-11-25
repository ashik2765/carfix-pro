import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";



export const DELETE = async (request, { params }) => {
    const db = await connectDB(); //connect the db
    const bookingsCollection = await db.collection('bookings');
    try {
        const resp = await bookingsCollection.deleteOne({ _id: new ObjectId(params.id) });
        return Response.json({ message: "deleted sucessfully", response: resp })
    } catch (error) {
        console.log(error)
    }
}
export const PATCH = async (request, { params }) => {
    const db = await connectDB(); //connect the db
    const bookingsCollection = await db.collection('bookings');
    const updateDoc = await request.json()

    try {
        const resp = await bookingsCollection.updateOne(
            { _id: new ObjectId(params.id) },
            { $set: {...updateDoc} },
            { upsert: true }
        );
        return Response.json({ message: "update the booking", response: resp })
    } catch (error) {
        console.log(error)
    }
}
export const GET = async (request, { params }) => {
    const db = await connectDB(); //connect the db
    const bookingsCollection = await db.collection('bookings');
    try {
        const resp = await bookingsCollection.findOne({ _id: new ObjectId(params.id) });
        return Response.json({ message: "data found", data: resp })
    } catch (error) {
        console.log(error)
    }
}