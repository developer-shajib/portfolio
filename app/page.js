'use client';
import Image from 'next/image';
import { fadeIn } from '@/variants.js';
import ProjectsBtn from '@/components/ProjectsBtn.js';
import { motion } from 'framer-motion';
import Avatar from '@/components/Avatar.js';
import ParticlesContainer from '@/components/ParticlesContainer.js';

export default function Home() {
  return (
    <>
      <div className=' h-full'>
        {/* <!-- text --> */}
        <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
          <div className='text-center flex flex-col justify-center xl:pt-24 xl:text-left h-full container mx-auto'>
            {/* <!-- title --> */}
            <motion.h1
              className='h1'
              variants={fadeIn('right', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'>
              Transforming ideas <br /> Into
              <span className='text-accent'> Digital Reality</span>
            </motion.h1>
            {/* <!-- subtitle --> */}
            <motion.p
              className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'
              variants={fadeIn('down', 0.3)}
              initial='hidden'
              animate='show'
              exit='hidden'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores inventore possimus odio? Quia omnis nulla alias quae quas repellat commodi odio.
            </motion.p>

            {/* <!-- Btn --> */}
            <div className='flex justify-center xl:hidden relative'>
              <ProjectsBtn />
            </div>
            <motion.div
              className='hidden xl:flex'
              variants={fadeIn('down', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'>
              <ProjectsBtn />
            </motion.div>
          </div>
        </div>

        {/* <!-- Image --> */}
        <div className='w-[1200px] h-full absolute right-0 bottom-0'>
          {/* <!-- BG Image --> */}
          <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-y-0'></div>

          {/* <!-- particles --> */}
          {/* <ParticlesContainer /> */}

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
