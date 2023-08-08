'use client';

import { fadeIn } from '@/variants.js';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <>
      <div className='h-full flex flex-col py-[160px] '>
        <div className='container mx-auto'>
          <div className='flex flex-col justify-center items-center lg:flex-row '>
            <div className='hidden lg:flex lg:flex-col'>
              <motion.h2
                variants={fadeIn('down', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='h2 xl:mt-8 w-1/2'>
                Contact <span className='text-accent'>Information</span>
              </motion.h2>

              <motion.div
                variants={fadeIn('left', 0.4)}
                initial='hidden'
                animate='show'
                exit='hidden'>
                <p>Location : Cumilla, Dhaka, Bangladesh</p>
                <p>Email : sunhailshajib1@gmail.com</p>
              </motion.div>
            </div>
            <div className='w-1/2 pl-6  lg:pt-0'>
              <motion.h2
                variants={fadeIn('right', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='h2 xl:mt-8'>
                Contact <span className='text-accent'>Me</span>
              </motion.h2>

              <motion.div
                variants={fadeIn('left', 0.4)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className=' '>
                {/* <!-- Contact Form --> */}
                <form className='flex flex-col gap-5 w-[95%]'>
                  <input
                    className='rounded-md w-[100%] focus:outline-none px-[23px] py-[5px] text-[17px] bg-[#ffffff29] text-white'
                    type='text'
                    placeholder='Name'
                  />
                  <input
                    className='rounded-md w-[100%] focus:outline-none px-[23px] py-[5px] text-[17px] bg-[#ffffff29] text-white'
                    type='text'
                    placeholder='Email'
                  />
                  <input
                    className='rounded-md w-[100%] focus:outline-none  text-[17px] bg-[#ffffff29] text-white px-[23px] py-[5px] pb-[70px]'
                    type='text'
                    placeholder='Text'
                  />
                  <button
                    className='w-[100%] py-[5] text-[21px]  rounded-md bg-red'
                    type='submit'>
                    Send
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
