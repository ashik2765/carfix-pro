import React from 'react'
import Image from 'next/image'

export default function About() {
    return (
        <div className="container mx-auto mt-10">
            <div className='grid md:grid-cols-2'>
                <div>
                    <div className="relative">
                        <Image
                            src="/assets/images/about_us/person.jpg"
                            alt="Person Image"
                            width={460}
                            height={473}
                            className="rounded-lg"
                        />
                        <div className="absolute bottom-0 right-20 -mb-10 -mr-10 border-spacing-10">
                            <Image
                                src="/assets/images/about_us/parts.jpg"
                                alt="Person Image"
                                width={300}
                                height={400}
                                className=" border-4  border-white rounded-lg "
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='font-bold text-[#FF3811]'>About Us</h1>
                    <h1 className='text-3xl font-bold mt-5'>We are qualified <br></br> & of experience <br></br> in this field</h1>
                    <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ex ipsum sit, in voluptate, illo quaerat repellendus dignissimos dolorum ad veniam odio repudiandae voluptates. Dicta maxime illum nam, repudiandae quae culpa consectetur necessitatibus, repellendus natus aperiam sint atque libero quasi provident. Saepe quod recusandae placeat harum perspiciatis itaque magni! Nulla?</p>
                    <button className='btn btn-primary mt-3'>Get More Info</button>
                </div>

            </div>
        </div>
    )
}
