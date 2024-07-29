import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import HostingOptionCard from './HostingOptionCard'

const HostingOptions = () => {
    return (
        <div className='pt-20 pb-16'>
            {/* section heading */}
            <SectionHeading heading='Our Hosting Options' />
            {/* Define System */}
            <div className='w-[85%] mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-8'>
                {/* Hosting Option Card 1 */}
                <div>
                    <HostingOptionCard
                        icon="/images/i4.png"
                        title="Wordpress Hosting"
                        price="2.99"
                    />
                </div>
                {/* Hosting Option Card 2 */}
                <div>
                    <HostingOptionCard
                        icon="/images/i5.png"
                        title="Web Hosting"
                        price="3.99"
                    />
                </div>
                {/* Hosting Option Card 3 */}
                <div>
                    <HostingOptionCard
                        icon="/images/i6.png"
                        title="VPS Hosting"
                        price="4.99"
                    />
                </div>
                {/* Hosting Option Card 4 */}
                <div>
                    <HostingOptionCard
                        icon="/images/i7.png"
                        title="Shared Hosting"
                        price="1.99"
                    />
                </div>
            </div>

        </div>
    )
}

export default HostingOptions