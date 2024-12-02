import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";


export const POST = async (request) => {
    const booking = await request.json()
    const db = await connectDB(); //connect the db
    const bookingsCollection = await db.collection('bookings');
    try {
        const newBookings = await bookingsCollection.insertOne(booking);
        return NextResponse.json({ message: "Booked successfully" })
    } catch (error) {
        return NextResponse.json({message:"no data found",error});
    }
}