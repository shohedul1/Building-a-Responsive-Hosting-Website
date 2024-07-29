'use client';

import { useEffect } from "react";
import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";

const LinkNav = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Hosting', href: '#' },
    { name: 'Domain', href: '#' },
    { name: 'Help Center', href: '#' }
];

type Props = {
    showNav: boolean;
    closeNav: () => void;
}

const MobileNav = ({ showNav, closeNav }: Props) => {
    const navOpenStyle = showNav ? 'translate-x-0' : 'translate-x-[-100%]';



    return (
        <div>
            <div
                className={`${navOpenStyle} fixed top-0 left-0 right-0 bottom-0 transform transition-transform duration-500 z-[1000] bg-black opacity-70 h-screen`}

            ></div>
            <ul
                className={` ${navOpenStyle} fixed top-0 left-0 bottom-0 flex items-center justify-center flex-col h-full transform transition-transform duration-300 w-4/5 md:w-[60%] bg-blue-900 space-y-6 z-[1006]`}
            >
                {LinkNav.map((item, index) => (
                    <li key={index}>
                        <Link className='nav_link text-white' href={item.href}>
                            {item.name}
                        </Link>
                    </li>
                ))}
                <IoCloseSharp
                    onClick={closeNav}
                    className="absolute top-4 right-4 w-8 h-8 text-white"
                />
            </ul>
        </div>
    );
};

export default MobileNav;
