import React from 'react'
import { CiDiscount1 } from 'react-icons/ci'
import Button from '../../Helper/Button'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='bg-blue-600 w-full h-screen '>
            <div className='flex justify-center flex-col w-4/5 h-full mx-auto'>
                {/* aefine grid */}
                <div className='w-full mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
                    {/* text-context */}
                    <div>
                        <div data-aos="fade-left" className='flex items-center space-x-3 px-6 py-2 w-fit rounded-full border-2 border-gray-300'>
                            <CiDiscount1 className='w-6 h-6 text-yellow-300' />
                            <span className='text-xs md:text-lg text-white font-semibold text-opacity-70'>
                                30% Discount First Month purchaes
                            </span>

                        </div>
                        <h1
                            data-aos="fade-right"
                            data-aos-delay="200"
                            className='text-3xl md:text-5xl lg:text-[55px] xl:text-[55px] relative z-[1] md:leading-[4.5rem] leading-[3rem] mt-4 text-white font-bold'>
                            Premium Hosting Technologies
                            <br />
                            <span className='absolute bottom-4 z-[-1] -rotate-6 left-0 w-1/2 h-3 bg-orange-400 bg-opacity-70 rounded-full'></span>
                        </h1>
                        <p
                            data-aos="fade-left"
                            data-aos-delay="400"
                            className='mt-4 text-xs md:text-base text-white'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus maiores velit maxime id nihil dolorum incidunt ad ratione dolorem saepe.
                        </p>
                        <div
                            data-aos="zoom-in"
                            data-aos-delay="600"
                            className='mt-8 flex items-center space-x-4'>
                            <Button bg='bg-teal-600'>Get Started</Button>
                            <Button bg='bg-amber-600'>Plan and Price</Button>
                        </div>
                    </div>
                    {/* image */}
                    <div
                        data-aos="fade-right"
                        data-aos-delay="800"
                        className='hidden lg:block mx-auto'>
                        <Image
                            src={"/images/hero1.svg"}
                            alt='hero'
                            width={650}
                            height={650}
                            className='object-cover'
                        />

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero