'use client';

import Bulb from '@/components/Bulb.js';
import Circles from '@/components/Circles.js';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants.js';
import { MdWeb, MdInsertPageBreak, MdContactSupport } from 'react-icons/md';
import { BsFillLaptopFill } from 'react-icons/bs';
import { SiAppwrite } from 'react-icons/si';

const serviceList = [
  {
    icon: <MdWeb className='text-2xl text-rose-700' />,
    text: 'Custom Web Application Development'
  },
  {
    icon: <BsFillLaptopFill className='text-2xl text-rose-700' />,
    text: 'Responsive Website Development'
  },
  {
    icon: <SiAppwrite className='text-2xl text-rose-700' />,
    text: 'Full Stack Development'
  },
  {
    icon: <MdInsertPageBreak className='text-2xl text-rose-700' />,
    text: 'E-commerce Solutions'
  },
  {
    icon: <MdContactSupport className='text-2xl text-rose-700' />,
    text: 'Ongoing Support and Maintenance'
  }
];

const Services = () => {
  return (
    <>
      <div className='h-full bg-primary/30 py-36 flex items-center lg:pt-48'>
        <Circles />
        <div className='container mx-auto'>
          <div className='flex   flex-col pt-44 lg:pt-0  items-center xl:flex-row xl:justify-around gap-x-4'>
            {/* <!-- text --> */}
            <div className='text-center flex  flex-col lg:text-left mb-4 xl:mb-0 '>
              <motion.h2
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='h2 xl:mt-8'>
                My services <span className='text-accent'>.</span>
              </motion.h2>

              <motion.p
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
                {`Welcome to my MERN Stack Web Development Services! As a skilled and dedicated Full Stack MERN Developer, I offer a range of cutting-edge services to help you build and enhance your web presence. Here's what I can do for you.`}
                <br />
                <span className='text-red text-4xl'>----</span>
              </motion.p>
            </div>

            {/* <!-- Service List --> */}

            <motion.div
              variants={fadeIn('down', 0.6)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='flex flex-row flex-wrap md:flex-col gap-4  '>
              {serviceList.map((item, index) => (
                <div
                  key={index}
                  className='flex text-sm justify-start gap-2 md:gap-5 w-[100%] bg-[#68666645] pr-0 md:pr-[94px] rounded-tr-full md:text-lg px-6 py-2 font-normal text-[#b6b5b5] '>
                  {/* <MdWeb  /> */}
                  {item.icon}
                  <h3>{item.text}</h3>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        <Bulb />
      </div>
    </>
  );
};

export default Services;
