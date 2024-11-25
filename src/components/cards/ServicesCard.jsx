import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

export default function ServicesCard({ service }) {
    const { title, img, price, _id } = service;
    return (
        <div className="">
            <div className="card bg-base-100 w-auto shadow-xl">
                <figure>
                    <Image src={img} width={430} height={150} alt={title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="card-actions items-center justify-between text-[#FF3811]">
                        <h6 className='text-xl'>Price: ${price}</h6>
                        <Link href={`/services/${_id}`}><FaArrowRight /></Link>


                    </div>
                </div>
            </div>
        </div>
    )
}
