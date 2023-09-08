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
                className='text-[25px]'>
                All My Project <span className='text-accent'>.</span>
              </motion.h2>
            </div>

            {/* <!-- slider --> */}

            <div className='pt-20 px-2 lg:px-16'>
              <ProjectSlider />
            </div>
          </div>
        </div>
        <Bulb />
      </div>
    </>
  );
};

export default Project;
