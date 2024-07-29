import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'

const Feature = () => {
    return (
        <div className='pt-16 pb-12'>
            {/* section meadig */}
            <SectionHeading heading='Our Hosting Solution' />
            {/* Define a grid system */}
            <div className='w-4/5 mx-auto mt-12 md:mt-20 items-center grid grid-cols-1 xl:grid-cols-2 gap-12'>
                {/* text content */}
                <div>
                <h1 className='text-2xl md:text-3xl lg:text-4xl text-blue-950 font-bold '>
                    We Provide Hosting Solution
                </h1>
                    <p className='mt-8 mb-4 text-black text-sm md:text-base font-normal opacity-80'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nam laborum ratione nisi possimus in, omnis enim id inventore explicabo.
                    </p>
                    <p className='mt-4 mb-4 text-black text-sm md:text-base font-normal opacity-80'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nam laborum ratione nisi possimus in, omnis enim id inventore explicabo.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Feature