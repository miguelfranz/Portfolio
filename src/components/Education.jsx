import React from 'react'
import educ from '../assets/educ.png'
import { Calendar, CheckCircle, GraduationCap } from 'lucide-react'

const Education = () => {
    const educationData = [
        {
            id: 1,
            degree: "Bachelor of Science in Computer Science",
            institution: "La Salle University Ozamiz",
            duration: "2022-Present"
        },
        {
            id: 2,
            degree: "Science, Technology, Engineering, and Mathematics",
            institution: "La Salle University Ozamiz",
            duration: "2020-2022"
        }
    ]
    return (
        <section className='text-white py-20 overflow-hidden' id='education'>
            <div className='max-w-7xl mx-auto px-6 lg:px-16'>
                <div className='mb-16'>
                    <p className='text-primary text-sm uppercase tracking-widest mb-2 font-semibold'>
                        Learning Path
                    </p>
                    <h2 className='text-4xl md:text-5xl font-extrabold text-white'>
                        Education.
                    </h2>
                </div>
                <div className='flex flex-col lg:flex-row items-center gap-16'>
                    <div className='w-full lg:w-5/12 flex justify-center lg:justify-start' data-aos='fade-right'>
                        <div className='relative'>
                            <div className="absolute top-5 left-5 w-full h-full rounded-[30px] border-2 border-cyan-500">

                            </div>
                            <div className="relative z-10 overflow-hidden rounded-[30px] bg-cyan-500">
                                <img
                                    src={educ}
                                    alt="Education"
                                    className="block w-72 md:w-96 rounded-[30px] object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                            <div className='absolute -top-4 -left-4 bg-primary/20 w-16 h-16 rounded-full blur-2xl'>

                            </div>
                        </div>
                        
                    </div>
                    <div className='w-full lg:w-7/12 space-y-6' data-aos='fade-left'>
                            {educationData.map((edu) => (
                                <div key={edu.id} className='group relative overflow-hidden rounded-[32px] border border-[#1f1641] bg-[#111a3e] p-6 transition-all duration-300 hover:border-primary/50'>
                                    <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4'>
                                        <div className='flex items-center gap-3'>
                                            <div className='p-2 bg-[#050816] rounded-lg border border-primary/20 group-hover:border-primary transition-colors'>
                                                <GraduationCap className='text-primary' size={24} />
                                            </div>
                                        <div>
                                            <h3 className='text-lg font-bold text-white group-hover:text-primary transition-colors'>
                                                {edu.degree}
                                            </h3>
                                            <p className='text-gray-400 text-sm'>
                                                {edu.institution}
                                            </p>
                                        </div>
                                        </div>
                                <div className='flex items-center gap-2 whitespace-nowrap text-xs font-medium bg-[#050186] px-4 py-2 rounded-full border border-gray-700 flex-shrink-0'>
                                    <Calendar className='text-primary' size={12} />
                                    {edu.duration}
                                </div>
                                    </div>
                                    <p className='text-gray-400 text-sm leading-relaxed mb-4'>
                                        {edu.details}
                                    </p>
                                    <div className='flex items-center gap-2 text-[10px] uppercase tracking-wider text-primary font-bold '>
                                        <CheckCircle size={12} />
                                        Academic Excellence
                                    </div>
                                </div>
                            ))}
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Education