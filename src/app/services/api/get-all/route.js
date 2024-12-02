import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server";

export const GET = async () => {
    const db = await connectDB(); //connect the db
    const servicesCollection = await db.collection('services');
    try {
        const services = await servicesCollection.find().toArray();
        return NextResponse.json({ services })
    } catch (error) {
        return NextResponse.json({message:"no data found",error});
    }
}