import { connectDB } from "@/lib/connectDB"
import { services } from "@/lib/services";
import { NextResponse } from "next/server";

export const GET = async () => {
    const db = await connectDB();
    const servicesCollection = await db.collection('services');
    try {
        await servicesCollection.deleteMany();
        const res = servicesCollection.insertMany(services);
        return NextResponse.json({ "Message": "Seeded Succssfully" })
    } catch (error) {
        return NextResponse.json({message:"no data found",error});
    }
}