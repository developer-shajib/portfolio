'use client';
import { fadeIn } from '@/variants.js';
import { motion } from 'framer-motion';
import Avatar from '@/components/Avatar.js';
import HomeBtn from '@/components/HomeBtn.js';
import Typed from 'react-typed';

export default function Home() {
  return (
    <>
      <div className=' h-full'>
        {/* <!-- text --> */}
        <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
          <div className='text-center flex flex-col justify-center xl:pt-24 xl:text-left h-full container mx-auto'>
            {/* <!-- title --> */}
            <motion.h1
              className='h1 z-10'
              variants={fadeIn('right', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'>
              Hi, I am
              <br />
              <span className='text-accent'>
                <Typed
                  strings={['Shajibul Islam.', 'A MERN Stack Developer', 'use all latest technology in my project', 'Looking a job as a MERN stack.', 'Complete some MERN Project very professionally.', 'write professional & clean code.']}
                  typeSpeed={40}
                  loop
                />
              </span>
            </motion.h1>
            {/* <!-- subtitle --> */}
            <motion.p
              className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'
              variants={fadeIn('down', 0.3)}
              initial='hidden'
              animate='show'
              exit='hidden'>
              I am studying in computer science and engineering, I completed some MEN projects. I am looking for a job as a Full Stack developer, below i show my project and Skill.
            </motion.p>

            {/* <!-- Btn --> */}
            <div className='flex justify-center xl:hidden relative'>
              <HomeBtn />
            </div>
            <motion.div
              className='hidden xl:flex'
              variants={fadeIn('down', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'>
              {/* <ProjectsBtn /> */}

              <HomeBtn />
            </motion.div>
          </div>
        </div>

        {/* <!-- Image --> */}
        <div className='w-[1200px] h-full absolute right-0 bottom-0'>
          {/* <!-- BG Image --> */}

          <svg
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='absolute z-5 -top-[252px] -right-[73] animate-pulse'
            viewBox='0 0 1000 1000'
            xmlns='http://www.w3.org/2000/svg'>
            <defs>
              <linearGradient
                id='b'
                gradientTransform='rotate(-75 .5 .5)'>
                <stop
                  offset='0%'
                  stop-color='#4b29f7'
                />
                <stop offset='100%' />
              </linearGradient>
              <clipPath id='a'>
                <path
                  fill='currentColor'
                  d='M588.5 667Q307 834 300 487.5t281.5-167Q870 500 588.5 667Z'
                />
              </clipPath>
            </defs>
            <g clip-path='url(#a)'>
              <path
                fill='url(#b)'
                d='M588.5 667Q307 834 300 487.5t281.5-167Q870 500 588.5 667Z'
              />
            </g>
          </svg>

          {/* <!-- avatar img --> */}
          <motion.div
            className='w-full h-full max-w-[537px] max-h-[678px] absolute -bottom-32 lg:-bottom-32 lg:right-[8%]'
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            animate='show'
            exit='hidden'
            transition={{ duration: 1, ease: 'easeInOut' }}>
            <Avatar />
          </motion.div>
        </div>
      </div>
    </>
  );
}
