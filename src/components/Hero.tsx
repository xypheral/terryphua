import React from 'react';
import Image from 'next/image';
import heroImage from '../images/t1.jpg';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center p-10 md:p-20 h-screen">
      <div className="md:w-3/5 space-y-5 md:mr-4 text-center md:text-left">
        <h1 className="text-5xl font-bold text-gray-800">Hello, I'm Terry Phua!</h1>
        <p className="text-2xl text-gray-800"></p>
      </div>
      <motion.div
        className="w-full md:w-2/5 mt-10 md:mt-0"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20
        }}
      >
        <Image src={heroImage} alt="John Doe" width={640} height={480} className="w-full h-auto md:h-400" />
      </motion.div>
    </div>
  );
};
export default Hero;