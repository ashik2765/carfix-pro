import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";



export const DELETE = async (request, { params }) => {
    const db = await connectDB(); //connect the db
    const bookingsCollection = await db.collection('bookings');
    try {
        const resp = await bookingsCollection.deleteOne({ _id: new ObjectId(params.id) });
        return NextResponse.json({ message: "deleted sucessfully", response: resp })
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
        return NextResponse.json({ message: "update the booking", response: resp })
    } catch (error) {
        console.log(error)
    }
}
export const GET = async (request, { params }) => {
    const db = await connectDB(); //connect the db
    const bookingsCollection = await db.collection('bookings');
    try {
        const resp = await bookingsCollection.findOne({ _id: new ObjectId(params.id) });
        return NextResponse.json({ message: "data found", data: resp })
    } catch (error) {
        return NextResponse.json({message:"no data found",error});
    }
}