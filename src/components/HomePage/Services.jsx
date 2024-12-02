import React from 'react'
import ServicesCard from '../cards/ServicesCard'
import { getServices } from '@/services/getServices';


const Services = async () => {
    const getData = await getServices();
    const data = getData.res;
    return (
        <div className="container mx-auto">
            <div className='mt-10 text-center'>
                <h3 className='text-primary font-semibold'>Services</h3>
                <h1 className='text-2xl font-bold'>Our Service Area</h1>
                <p className=''>the majority have suffered alteration in some form, by injected humour, or randomised words which  look even slightly believable. </p>
            </div>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    data.length > 0 && data?.map((service) => (
                        <ServicesCard key={service._id} service={service}></ServicesCard>
                    ))
                }
            </div>
        </div>
    )
}
export default Services;