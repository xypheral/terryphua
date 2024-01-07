import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '../images/icon.png';

const Navbar = () => {
    return (
        <nav className="bg-gray-600 bg-opacity-10 mt-0 w-full fixed top-0 z-10 flex items-center h-16">
            <ul className="flex justify-start space-x-8 items-center h-full ml-20">
                <li className="text-xl bg-clip-text text-transparent">
                    <Link href="/">
                        <Image src={Icon} alt="Home" height={64} width={64} />
                    </Link>
                </li>
                <li className="text-xl font-bold bg-clip-text text-black hover:text-white transition duration-300">
                    <Link href="/about">About</Link>
                </li>
                <li className="text-xl font-bold bg-clip-text text-black hover:text-white transition duration-300">
                    <Link href="/projects">Projects</Link>
                </li>
                <li className="text-xl font-bold bg-clip-text text-black hover:text-white transition duration-300">
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;  