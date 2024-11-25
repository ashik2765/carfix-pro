import { connectDB } from "@/lib/connectDB";


export const POST = async (request) => {
    const booking = await request.json()
    const db = await connectDB(); //connect the db
    const bookingsCollection = await db.collection('bookings');
    try {
        const newBookings = await bookingsCollection.insertOne(booking);
        return Response.json({ message: "Booked successfully" })
    } catch (error) {
        console.log(error)
    }
}