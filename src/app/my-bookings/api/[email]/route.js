import { connectDB } from "@/lib/connectDB";


export const GET = async (request, { params }) => {
    const db = await connectDB(); //connect the db
    const bookingsCollection = await db.collection('bookings');
    try {
        const myBookings = await bookingsCollection.find({ email: params.email }).toArray();
        return Response.json({ myBookings })
    } catch (error) {
        console.log(error)
    }
}