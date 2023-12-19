import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '../images/icon.png';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 bg-opacity-10 p-4 mt-0 w-full fixed top-0 z-10 flex items-center h-16">
            <ul className="flex justify-start space-x-8 items-center h-full">
                <li className="text-xl bg-clip-text text-transparent">
                    <Link href="/">
                        <Image src={Icon} alt="Home" height={64} width={64} />
                    </Link>
                </li>
                <li className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-purple-600 hover:text-white transition duration-300">
                    <Link href="/about">About</Link>
                </li>
                <li className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-700 hover:text-white transition duration-300">
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;