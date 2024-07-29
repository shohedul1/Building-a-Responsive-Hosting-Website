'use client';
import Image from 'next/image';
import { BiArrowToRight } from 'react-icons/bi';
import Tilt from 'react-parallax-tilt';

type Props = {
    icon: string;
    title: string;
    price: string
}

const HostingOptionCard = ({ icon, title, price }: Props) => {
    return (
        <Tilt className='parallax-effect' perspective={500}>
            <div className='bg-gray-200 rounded-lg  h-full p-6 w-full'>
                {/* Image Icon */}
                <div>
                    <Image 
                    src={icon} alt='title' width={80} height={80} className='mx-auto mt-8 mb-8'
                    />
                </div>
                {/*  */}
                <h1 className='text-center text-[#232c45] font-semibold capitalize text-xl'>
                    {title}
                </h1>
                <p className='text-center text-black text-opacity-70 mt-4 mb-4'>
                    Lorem ipsum dolor sit amet consectetur.
                </p>
                <p className='text-center text-[#232c45] font-semibold text-base '>
                Starting from ${price}/month
                </p>
                <button className='px-6 py-2 rounded-lg hover:text-white font-semibold text-blue-950 hover:bg-blue-700 transition-all duration-200 mx-auto border-[1.2px] border-gray-400 border-opacity-25 mt-8 flex items-center space-x-2'>
                    <span>See Plan</span>
                    <BiArrowToRight/>
                </button>
            </div>
        </Tilt>
    )
}

export default HostingOptionCard