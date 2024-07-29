import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import Image from 'next/image'

const About = () => {
    return (
        <div className="pt-20 pb-16">
            <SectionHeading heading='About us' />
            <div className='w-4/5 mx-auto items-center mt-24 grid grid-cols-1 lg:grid-cols-2 gap-20'>
                {/* image content */}
                <div className='mx-auto lg:mx-0 md:8 lg:mb-8'>
                    <Image
                        src={"/images/about2.jpg"}
                        alt='About us'
                        width={550}
                        height={550}
                        className='rounded-lg -rotate-12'
                    />

                </div>
                {/* text content */}
                <div className='lg:-translate-y-10 translate-y-0'>
                    <h1 className='text-2xl md:text-3xl text-[#2d3c58] font-bold'>
                        We build Our Business For Your Success.
                    </h1>
                    <p className='mt-8 text-base text-[#556180] text-opacity-70'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum porro possimus deserunt aliquid molestias laudantium, et nisi fuga asperiores necessitatibus.                    </p>
                    <p className='mt-8 text-base text-[#556180] text-opacity-70'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolor suscipit doloremque iste ipsa numquam eaque tenetur aperiam, earum quis.
                    </p>
                    <div className='mt-5 flex items-center space-x-8'>
                        <div className='w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center flex-col'>
                            <Image
                                src={'/images/i1.svg'}
                                alt='icon'
                                width={40}
                                height={40}
                            />
                        </div>
                        <div>
                            <h1 className='text-lg md:text-xl text-gray-700 font-bold'>
                                Web Hosting
                            </h1>
                            <p className='mt-1 text-base text-[#556180] text-opacity-70'>
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>

                    </div>
                    <div className='mt-5 flex items-center space-x-8'>
                        <div className='w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center flex-col'>
                            <Image
                                src={'/images/i2.svg'}
                                alt='icon'
                                width={40}
                                height={40}
                            />
                        </div>
                        <div>
                            <h1 className='text-lg md:text-xl text-gray-700 font-bold'>
                               Wordpress Hosting
                            </h1>
                            <p className='mt-1 text-base text-[#556180] text-opacity-70'>
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>

                    </div>
                    <div className='mt-5 flex items-center space-x-8'>
                        <div className='w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center flex-col'>
                            <Image
                                src={'/images/i3.svg'}
                                alt='icon'
                                width={40}
                                height={40}
                            />
                        </div>
                        <div>
                            <h1 className='text-lg md:text-xl text-gray-700 font-bold'>
                               VPS Hosting
                            </h1>
                            <p className='mt-1 text-base text-[#556180] text-opacity-70'>
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About