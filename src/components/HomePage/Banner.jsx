import React from 'react'

export default function Banner() {

    const banners = [
        {
            title: "Awal Halader",
            description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
            next: "#slide2",
            prev: "#slide4"
        },
        {
            title: "Affordable Price For Car Servicing",
            description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
            next: "#slide3",
            prev: "#slide1"
        },
        {
            title: "Affordable Price For Car Servicing",
            description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
            next: "#slide4",
            prev: "#slide2"
        },
        {
            title: "Affordable Price For Car Servicing",
            description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
            next: "#slide1",
            prev: "#slide3"
        },
    ]
    return (
        <div className="container mx-auto">
            <div className="carousel w-full mt-10">
                {banners.map((banner, index) => (
                    <div
                        style={{
                            backgroundImage: `linear-gradient(45deg, rgba(7, 25, 82, 0.7), rgba(0, 0, 0, 0.3)), url(../assets/images/banner/${index + 1}.jpg)`,
                        }}
                        key={index}
                        id={`slide${index + 1}`}
                        className="carousel-item relative w-full h-[60vh] md:h-[80vh] lg:h-[90vh] bg-top bg-no-repeat bg-cover rounded">

                        <div className="w-full h-full flex items-center pl-4 md:pl-10 lg:pl-36">
                            <div className="text-white">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{banner.title}</h1>
                                <p className="text-sm md:text-base lg:text-lg">{banner.description}</p>
                                <div className="flex flex-col md:flex-row mt-5 md:mt-10">
                                    <button className="btn btn-md btn-primary">Discover More</button>
                                    <button className="btn btn-md btn-primary btn-outline md:ms-5 mt-2 md:mt-0">Latest Projects</button>
                                </div>
                            </div>
                        </div>

                        <div className="absolute flex justify-between mt-40 lg:mt-0 transform right-4 bottom-4 md:right-12 md:bottom-12 space-x-5 z-10">
                            <a href={banner.prev} className="btn btn-circle btn-primary btn-outline">❮</a>
                            <a href={banner.next} className="btn btn-circle btn-primary">❯</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}
