"use client";
import { getServiceDetails } from '@/services/getServices';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState, useCallback } from 'react';
import { toast } from 'react-toastify';

const CheckoutPage = ({ params }) => {
    const { data } = useSession();
    const [service, setService] = useState([]);

    // Memoize loadService to avoid dependency issues in useEffect
    const loadService = useCallback(async () => {
        const details = await getServiceDetails(params.id);
        setService(details.service);
    }, [params.id]); // Include dependencies properly

    const { _id, img, title, description, facility, price } = service || {};
    
    const handleBooking = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.firstName.value;
        const email = form.email.value;
        const message = form.message.value;
        const phone = form.phone.value;

        const userInfo = {
            title,
            price,
            description,
            name,
            email,
            message,
            phone,
            img,
            facility,
        };

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/Chekout/api/newBooking`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(userInfo),
        });

        const response = await res.json();
        form.reset();
        toast.success(response?.message);
    };

    useEffect(() => {
        loadService();
    }, [loadService]); // Now loadService is stable due to useCallback

    return (
        <div className="container mx-auto">
            <div className="min-h-screen bg-gray-50 flex flex-col items-center">
                {/* Header Image */}
                <div
                    className="w-full h-60 bg-cover bg-center relative"
                    style={{ backgroundImage: "url('/assets/images/Chekout/Chekout.png')" }}
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                        <h1 className="text-4xl font-semibold">Check Out</h1>
                        <p className="mt-2 text-sm">Home / Chekout</p>
                    </div>
                </div>

                {/* Form Section */}
                <div className="w-full p-6 bg-white rounded-lg shadow-lg mt-8">
                    <form onSubmit={handleBooking} className="space-y-4">
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
                            name="message"
                            placeholder="Your Message"
                            className="border p-3 rounded-md w-full h-32 focus:outline-none focus:border-red-500"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-red-500 text-white w-full py-3 rounded-md hover:bg-red-700"
                        >
                            Order Confirm
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
