import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='pt-12 pb-12'>
            {/* deine grid system */}
            <div className='w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8 border-b-[1.5px] border-b-slate-300 pb-8 md:grid-cols-2 items-start'>
                {/* 1st footer part */}
                <div className='lg:mx-auto mx-0'>
                    {/* logo */}
                    <div className='font-bold text-black text-2xl'>
                        <span className='text-3xl md:text-4xl font-bold text-red-500'>
                            W
                        </span>
                        Host
                    </div>
                    <p className='text-gray-700 text-sm mt-2'>
                        Lorem ipsum dolor sit. Lorem ipsum dolor sit amet.
                    </p>
                    <p className='mt-4 text-lg text-black text-opacity-65 mb-4 font-bold'>
                        Payment Method
                    </p>
                    <Image src={"/images/pay.png"} alt='pay' width={300} height={300} />
                </div>
                {/* 2nd footer part */}
                <div className='md:mx-auto mx-0'>
                    <h1 className='footer_title'>Company</h1>
                    <p className='footer_link'>About Us</p>
                    <p className='footer_link'>News Feed</p>
                    <p className='footer_link'>Contact</p>
                    <p className='footer_link'>Affilialte</p>
                    <p className='footer_link'>Our Technology</p>
                </div>
                {/* 3nd footer part */}
                <div className='lg:mx-auto mx-0'>
                    <h1 className='footer_title'>Feature</h1>
                    <p className='footer_link'>Domain Checker</p>
                    <p className='footer_link'>Domain Transfer</p>
                    <p className='footer_link'>Domain Registration</p>
                    <p className='footer_link'>Data Centers</p>
                    <p className='footer_link'>Support</p>
                </div>
                {/* 4nd footer part */}
                <div className='md:mx-auto mx-0'>
                    <h1 className='footer_title'>Hosting</h1>
                    <p className='footer_link'>Shared Hosting</p>
                    <p className='footer_link'>Wordpress Hosing</p>
                    <p className='footer_link'>VPS Hosing</p>
                    <p className='footer_link'>Reseller Hosting</p>
                    <p className='footer_link'>Cloud Hosting</p>
                </div>
            </div>
            <div className='text-center mt-4 text-sm text-black opacity-75'>
                Copyright @ 2024 by webdev warriros
            </div>

        </div>
    )
}

export default Footer