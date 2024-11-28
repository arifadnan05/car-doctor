import Image from 'next/image'
import React from 'react'

const ServiceCards = ({ service }) => {
    // console.log(service)
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <Image height={120} width={430}
                    src={service.img}
                    alt={service.title} />
            </figure>
            <div className="p-6">
                <h2 className="card-title">
                    {service.title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <div className='flex items-center justify-between mt-6'>
                    <p>${service.price}</p>
                    <p className='btn bg-primary text-white hover:text-black'>Details</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceCards
