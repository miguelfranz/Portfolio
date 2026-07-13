import React from 'react'
import CardSwap, { Card } from './CardSwap'

import cert1 from '../assets/cert1.png'
import cert2 from '../assets/cert2.png'
import cert3 from '../assets/cert3.jpg'

const Certificates = () => {
    return (
        <section
            className="text-white pt-20 pb-40 overflow-hidden"
            id="certificates"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-16">

                {/* Section Heading */}
                <div className="mb-16">
                    <p className="text-primary text-sm uppercase tracking-widest mb-2 font-semibold">
                        Achievements
                    </p>

                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                        Certificates.
                    </h2>
                </div>

                {/* Card Swap */}
                <div
                    className="relative flex justify-center items-center h-[500px]"
                    data-aos="fade-down"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    data-aos-once="true"
                >
                    <div
                        style={{
                            width: "600px",
                            height: "420px",
                            position: "relative",
                        }}
                    >
                        <CardSwap
                            width={700}
                            height={500}
                            cardDistance={60}
                            verticalDistance={70}
                            delay={3000}
                            pauseOnHover={false}
                        >
                            <Card customClass="overflow-hidden rounded-2xl shadow-2xl">
                                <img
                                    src={cert1}
                                    alt="Certificate 1"
                                    className="w-full h-full object-cover"
                                />
                            </Card>

                            <Card customClass="overflow-hidden rounded-2xl shadow-2xl">
                                <img
                                    src={cert2}
                                    alt="Certificate 2"
                                    className="w-full h-full object-cover"
                                />
                            </Card>

                            <Card customClass="overflow-hidden rounded-2xl shadow-2xl">
                                <img
                                    src={cert3}
                                    alt="Certificate 3"
                                    className="w-full h-full object-cover"
                                />
                            </Card>
                        </CardSwap>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Certificates