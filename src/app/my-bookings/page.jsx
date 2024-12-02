"use client"
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaTrash } from "react-icons/fa";
import { IoArrowUndoSharp } from "react-icons/io5";

export default function page() {
    const session = useSession();
    const [bookings, setBookings] = useState([])

    const loadData = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/my-bookings/api/${session?.data?.user?.email}`)
        const data = await res.json();
        setBookings(data?.myBookings)
    }

    const handleDeleteBooking = async (id) => {
        console.log("cliked", id)
        const DBooking = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/my-bookings/api/bookings/${id}`, {
            method: "DELETE"
        })
        const resp = await DBooking.json();
        console.log("hello", resp)
        if (resp.response.deletedCount > 0) {
            loadData()
        }

    }

    useEffect(() => {
        loadData();
    }, [loadData]);

    return (
        <div className="container mx-auto">
            <div className="bg-gray-100 min-h-screen">

                {/* Banner */}
                <div className="bg-cover bg-center text-white text-center py-10" style={{
                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/images/Chekout/mybooking.png')"
                }}>
                    <h2 className="text-3xl font-semibold">Cart Details</h2>
                    <p className="text-sm mt-2">Home &gt; Product Details</p>
                </div>


                {/* Cart Items */}
                <div className="container mx-auto p-6">
                    <div className="space-y-6">
                        {/* Cart Item */}
                        {bookings.map((item) => (
                            <div key={item?._id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
                                <div className="flex items-center space-x-4">
                                    <Image src={item?.img} alt="Car Part" width={80} height={80} className="rounded-md" />
                                    <div>
                                        <h3 className="text-lg font-medium">{item?.title}</h3>
                                        <p className="text-gray-500 text-sm">Color: Green</p>
                                        <p className="text-gray-500 text-sm">{item?.message}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-8">
                                    <p className="text-gray-800">${item?.price}</p>
                                    <p className="text-gray-500">22-10-2022</p>
                                    <span className="text-white bg-orange-500 px-3 py-1 rounded-lg">Pending</span>
                                    <Link href={`/my-bookings/update/${item?._id}`}>
                                        <button
                                            className="btn btn-success btn-sm btn-outline text-slate-600 hover:text-slate-800 hover:font-semibold">
                                            Edit
                                        </button>
                                    </Link>
                                    <button
                                        onClick={() => handleDeleteBooking(item?._id)}
                                        className="text-red-600 hover:text-red-800">
                                        <FaTrash />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Continue Shopping and Clear Cart */}
                    <div className="flex justify-between items-center mt-10">
                        <Link className='flex items-center gap-2' href="/shop">
                            <IoArrowUndoSharp />
                            Continue Shopping
                        </Link>
                        <button className="text-red-600 hover:text-red-800 flex items-center gap-2">
                            <FaTrash />
                            Clear Shopping Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
