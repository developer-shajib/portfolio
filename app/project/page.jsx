'use client';

import WorkSlider from '@/components/WorkSlider.js';
import Bulb from '@/components/Bulb.js';
import Circles from '@/components/Circles.js';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants.js';

const Project = () => {
  return (
    <>
      <div className='h-full bg-primary/30 pt-44 px-6 flex items-center'>
        <Circles />
        <div className='container mx-auto'>
          <div className='flex flex-col xl:flex-row gap-x-4'>
            
            {/* <!-- text --> */}
            <div className='text-center flex xl:w-[30vw flex-col lg:text-left mb-4 xl:mb-0 '>
              <motion.h2
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='h2 xl:mt-12'>
                My Project <span className='text-accent'>.</span>
              </motion.h2>
              <motion.p
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae veritatis quisquam illo, cupiditate quibusdam labore.
              </motion.p>
            </div>

            {/* <!-- slider --> */}

            <motion.div
              variants={fadeIn('down', 0.6)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='w-full xl:max-w-[65%]'>
              <WorkSlider />
            </motion.div>
          </div>
        </div>
        <Bulb />
      </div>
    </>
  );
};

export default Project;
