'use client';

import Bulb from '@/components/Bulb.js';
import Circles from '@/components/Circles.js';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants.js';
import ProjectSlider from '@/components/ProjectSlider.js';

const Project = () => {
  return (
    <>
      <div className='h-full bg-primary/30  flex '>
        <Circles />
        <div className='container mx-auto'>
          <div className='flex flex-col justify-center '>
            {/* <!-- text --> */}
            <div className='text-center flex justify-center pt-40 md:pt-20  '>
              <motion.h2
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='h2'>
                My Project <span className='text-accent'>.</span>
              </motion.h2>
              {/* <motion.p
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae veritatis quisquam illo, cupiditate quibusdam labore.
              </motion.p> */}
            </div>

            {/* <!-- slider --> */}

            {/* <motion.div
              variants={fadeIn('down', 0.6)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='w-full flex flex-wrap items-center gap-4 justify-center pt-8'> */}
            {/* <WorkSlider /> */}

            <div className='pt-20'>
              <ProjectSlider />
            </div>

            {/* </motion.div> */}
          </div>
        </div>
        <Bulb />
      </div>
    </>
  );
};

export default Project;
