import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";


export const GET = async (request, { params }) => {
    const db = await connectDB(); //connect the db
    const bookingsCollection = await db.collection('bookings');
    try {
        const myBookings = await bookingsCollection.find({ email: params.email }).toArray();
        return NextResponse.json({ myBookings })
    } catch (error) {
        return NextResponse.json({ message: "no data found", error });
    }
}