
import Image from 'next/image'
import React from 'react'

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <div className="relative w-full h-96 overflow-hidden">
                    <Image
                        alt="banner"
                        src="/assets/images/banner/1.jpg"
                        width={1200}
                        height={700}
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle bg-gray-700 text-white hover:bg-gray-900">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-gray-700 text-white hover:bg-gray-900">❯</a>
                    </div>
                </div>

            </div>
            <div id="slide2" className="relative w-full h-96 overflow-hidden">
                <Image
                    alt="banner"
                    src="/assets/images/banner/2.jpg"
                    width={1200}
                    height={700}
                    className="object-cover w-full h-full"
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <Image alt='banner'
                    src="/assets/images/banner/3.jpg"
                    className="w-full" width={100} height={100} />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <Image
                    src="/assets/images/banner/4.jpg"
                    alt='banner' className="w-full" width={100} height={100} />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    )
}

export default Banner
