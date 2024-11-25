import { getServiceDetails, getServices } from '@/services/getServices'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
export const metaData = {
    title: "Service Details",
    description: "Service details page providing in-depth information about the services offered."
};


const DetailsPage = async ({ params }) => {

    const details = await getServiceDetails(params.id)
    const { _id, img, title, description, facility, price } = details.service;
    const data = await getServices();
    console.log(data);
    const serviceData = data.res;

    return (
        <div className="font-sans container mx-auto">

            {/* Banner */}

            <section
                className="relative w-full h-64 bg-no-repeat bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/images/checkout/checkout.png')`
                }}
            >
                {/* Centered Title */}
                <div className="absolute inset-0 flex items-center justify-center text-white">
                    <h2 className="text-3xl font-bold">Service Details</h2>
                </div>

                {/* Centered Button at the Bottom */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-red-500 text-white">
                    Home/Service Details
                </div>
            </section>

            {/* Main Content */}
            <main className="container mx-auto my-10 p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Left Content */}
                <div className="md:col-span-2 space-y-6">
                    <Image src={img} alt="Engine Service" width={800} height={450} className="rounded-lg" />
                    <h3 className="text-2xl font-bold">{title}</h3>
                    <p className="text-gray-700">{description}</p>

                    {/* Service Features */}
                    <div className="grid grid-cols-2 gap-4">
                        {facility.map((item, index) => (
                            <div key={index} className="p-4 border border-red-500 rounded-lg">
                                <h4 className="font-semibold">{item?.name}</h4>
                                <p className="text-gray-500">{item?.details}.</p>
                            </div>
                        ))}
                    </div>

                    <h4 className="text-xl font-bold mt-8">3 Simple Steps to Process</h4>
                    <div className="grid grid-cols-3 gap-4">
                        {['STEP ONE', 'STEP TWO', 'STEP THREE'].map((step, index) => (
                            <div key={step} className="p-4 text-center border rounded-lg">
                                <div className="text-3xl font-bold text-red-500">{index + 1}</div>
                                <h5 className="mt-2 font-semibold">{step}</h5>
                                <p className="text-gray-500">It Uses A Dictionary Of Over 200.</p>
                            </div>
                        ))}
                    </div>

                    <Image src="/assets/images/products/1.png" alt="Mechanic" width={800} height={450} className="rounded-lg mt-8" />
                </div>

                {/* Right Sidebar */}
                <aside className="space-y-6">
                    {/* Services List */}
                    <div className="bg-gray-100 p-6 rounded-lg">
                        <h4 className="text-xl font-bold">Services</h4>
                        {serviceData.map((item, index) => (
                            <a key={index} href="#" className="block py-2 text-red-500 hover:underline">{item?.title}</a>
                        ))}
                    </div>

                    {/* Downloads */}
                    <div className="p-6 bg-gray-800 text-white rounded-lg">
                        <h4 className="text-xl font-bold">Download</h4>
                        <a href="#" className="block mt-4 py-2 bg-red-500 text-center rounded-md">Our Brochure</a>
                        <a href="#" className="block mt-4 py-2 bg-red-500 text-center rounded-md">Company Details</a>
                    </div>

                    {/* Promo Box */}
                    <div className="p-6 bg-black text-white rounded-lg">
                        <h4 className="text-xl font-bold">Car Doctor</h4>
                        <p>Need Help? We Are Here To Help You</p>
                        <p className="mt-4 text-red-500 font-bold">Save up to 60% off</p>
                        <a href="#" className="block mt-4 py-2 bg-red-500 text-center rounded-md">Get A Quote</a>
                    </div>

                    {/* Pricing */}
                    <div className="p-6 bg-white border rounded-lg">
                        <p className="text-2xl font-bold">Price ${price}</p>
                        <Link href={`/checkout/${_id}`}>
                            <button className="mt-4 w-full py-2 text-white bg-red-500 rounded-md">Proceed Checkout</button>
                        </Link>
                    </div>
                </aside>
            </main>
        </div>
    )
}
export default DetailsPage;
