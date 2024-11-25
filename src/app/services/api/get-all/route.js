import { connectDB } from "@/lib/connectDB"

export const GET = async () => {
    const db = await connectDB(); //connect the db
    const servicesCollection = await db.collection('services');
    try {
        const services = await servicesCollection.find().toArray();
        return Response.json({ services })
    } catch (error) {
        console.log(error)
    }
}