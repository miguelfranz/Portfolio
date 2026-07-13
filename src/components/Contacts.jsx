import React from 'react'
import { FaEnvelope, FaLinkedin, FaPhone, FaMapMarkedAlt } from 'react-icons/fa'

const Contacts = () => {
    const contactInfo = [
        {
            id: 1,
            icon: FaEnvelope,
            title: 'Email',
            value: 'carlosmiguelfrancisco1@gmail.com',
            link: '#'
        },

        {
            id: 2,
            icon: FaPhone,
            title: 'Phone',
            value: '09516501637',
            link: '+639516501637'
        },

        {
            id: 3,
            icon: FaLinkedin,
            title: 'LinkedIn',
            value: 'https://www.linkedin.com/in/carlos-miguel-francisco-01a36a324 ',
            link: '#'
        },

        {
            id: 3,
            icon: FaMapMarkedAlt,
            title: 'Location ',
            value: 'Philippines, Ozamiz City ',
            link: null
        }


    ];
    return (
        <section id='contact'>
            <div className='container mx-auto px-4 max-w-6xl'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl md:text-5xl font-extrabold text-white mb-2 '>
                        Let's Connect.
                    </h2>
                    <div className='w-28 h-1 bg-primary mx-auto mt-2 rounded-2xl'></div>
                </div>
                <div className='grid md:grid-cols-2 gap-8'>
                    <div>
                        <p className='text-gray-400 mb-8 leading-relaxed'>
                            Let's build something meaningful together. Whether it's a freelance project, a full-time opportunity, or just a conversation, I'd love to hear from you.
                        </p>
                        <div className='space-y-6'>
                            {contactInfo.map((info) => {
                                const Icon = info.icon;
                                return (
                                    <div key={info.id} className='flex items-center gap-4 group'>
                                        <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                                            <Icon size={18} className='text-primary' />
                                        </div>
                                        <div>
                                            <h4 className='text-white font-medium text-sm'>
                                                {info.title}
                                            </h4>
                                            {info.link ? (
                                                <a href={info.link} className='text-gray-400 text-sm hover:text-primary transition-colors' target={info.title === 'Location' ? '_self' : '_blank'} rel={info.title === 'Location' ? '' : 'noopener norefferer'}>
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className='text-gray-400 text-sm'>
                                                    {info.value}
                                                </p>
                                            )}


                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div>
                    {/* Contact Form */}
                        <div className='bg-gray-800 rounded-lg p-6'>
                            <form>
                                <div className='mb-4'>
                                    <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>
                                        Email
                                    </label>
                                    <input type="email" id="email" className='w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-full text-white text-sm focus:outline-none focus:border-primary transition-colors' placeholder='example@gmail.com' required/>
                                </div>
                                <div>
                                    <div className='mb-4'>
                                    <label htmlFor="message" className='text-white block mb-2 text-sm font-medium'>
                                        Message
                                    </label>
                                    <textarea id="message" className='w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-primary transition-colors' placeholder='Your Message...' rows={7} required/>
                                </div>
                                <button 
                                type='submit'
                                className='w-full px-6 py-2.5 bg-primary text-white rounded-full font-medium hover:bg-primary/80'>
                                    Send Message
                                </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;