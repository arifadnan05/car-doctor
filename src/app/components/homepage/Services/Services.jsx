import React from 'react'
import ServiceCards from '../cards/ServiceCards'

const Services = () => {
    return (
        <div>
            <div className='text-center mb-20'>
                <h6 className='text-primary font-semibold'>Services</h6>
                <h2 className='text-[45px]'>Our Service Area</h2>
                <p className='text-gray'>the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.</p>
            </div>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <ServiceCards />
            </div>
        </div>
    )
}

export default Services
