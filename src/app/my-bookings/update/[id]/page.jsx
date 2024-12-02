"use client"
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

export default function page({ params }) {
    const { data } = useSession();
    const [booking, setBooking] = useState([]);

    const loadBooking = async () => {
        const bookingDetails = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/my-bookings/api/bookings/${params?.id}`)
        const loadData = await bookingDetails.json();
        setBooking(loadData)
    }

    const handleUpdateBooking = async (e) => {
        e.preventDefault();
        const updatedBooking = {
            phone: e.target.phone.value,
            message: e.target.message.value,
        }
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/my-bookings/api/bookings/${params?.id}`,
            {
                method: "PATCH",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(updatedBooking)
            },

        )
        console.log(res)
        if (res.status === 200) {
            toast.success("updated successfully")
        }
        
    }

    useEffect(() => {
        loadBooking();
    }, [loadBooking]);

    return (
        <div className="container mx-auto">
            <div className="min-h-screen bg-gray-50 flex flex-col items-center">
                {/* Header Image */}
                <div className="w-full h-60 bg-cover bg-center relative" style={{ backgroundImage: "url('/assets/images/Chekout/Chekout.png')" }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                        <h1 className="text-4xl font-semibold">Edit the service</h1>
                        <p className="mt-2 text-sm">Home / Edit</p>
                    </div>
                </div>

                {/* Form Section */}
                <div className="w-full  p-6 bg-white rounded-lg shadow-lg mt-8">
                    <form onSubmit={handleUpdateBooking} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                defaultValue={data?.user?.name}
                                name="firstName"
                                type="text"
                                placeholder="First Name"
                                className="border p-3 rounded-md w-full focus:outline-none focus:border-red-500"
                            />
                            <input
                                disabled
                                name="lastName"
                                type="text"
                                placeholder="Last Name"
                                className="border p-3 rounded-md w-full focus:outline-none focus:border-red-500"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                defaultValue={booking?.data?.phone}
                                name="phone"
                                type="tel"
                                placeholder="Your Phone"
                                className="border p-3 rounded-md w-full focus:outline-none focus:border-red-500"
                            />
                            <input
                                defaultValue={data?.user?.email}
                                name="email"
                                type="email"
                                placeholder="Your Email"
                                className="border p-3 rounded-md w-full focus:outline-none focus:border-red-500"
                            />
                        </div>
                        <textarea
                            defaultValue={booking?.data?.message}
                            name="message"
                            placeholder="Your Message"
                            className="border p-3 rounded-md w-full h-32 focus:outline-none focus:border-red-500"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-red-500 text-white w-full py-3 rounded-md hover:bg-red-700"
                        >
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
