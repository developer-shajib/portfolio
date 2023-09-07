'use client';

import { fadeIn } from '@/variants.js';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { toast } from 'react-toastify';

// <!-- Toast Message -->
const createToastify = (msg, type = 'error') => {
  toast(msg), { type, position: 'top-center', autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: true, theme: 'light' };
};

const Contact = () => {
  const [input, setInput] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  // <!-- handle Input change -->
  const handleInputChange = async (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // <!-- handle form submit -->
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    if (!input.name || !input.email || !input.message) {
      createToastify('All Fields are required!');
    }

    await axios
      .post('https://developershajib.vercel.app/api/contact', input)
      .then((res) => {
        createToastify(res.data.message);
        setLoading(false);
      })
      .catch((error) => {
        createToastify(error.response.data.message);

        setLoading(false);
      });
  };

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
                <form
                  onSubmit={handleFormSubmit}
                  className='flex flex-col gap-5 w-[95%]'>
                  <input
                    className='rounded-md w-[100%] focus:outline-none px-[23px] py-[5px] text-[17px] bg-[#ffffff29] text-white'
                    type='text'
                    placeholder='Name'
                    name='name'
                    value={input.value}
                    onChange={handleInputChange}
                  />
                  <input
                    className='rounded-md w-[100%] focus:outline-none px-[23px] py-[5px] text-[17px] bg-[#ffffff29] text-white'
                    type='text'
                    placeholder='Email'
                    name='email'
                    value={input.email}
                    onChange={handleInputChange}
                  />
                  <input
                    className='rounded-md w-[100%] focus:outline-none  text-[17px] bg-[#ffffff29] text-white px-[23px] py-[5px] pb-[70px]'
                    type='text'
                    placeholder='Text'
                    name='message'
                    value={input.message}
                    onChange={handleInputChange}
                  />
                  <button
                    className='w-[100%] py-[5] text-[21px]  rounded-md bg-red'
                    type='submit'>
                    {loading ? 'Processing....' : 'Send'}
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
