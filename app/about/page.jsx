'use client';

import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaWordpress } from 'react-icons/fa';
import { SiAdobephotoshop, SiAdobexd, SiFramer, SiNextdotjs } from 'react-icons/si';
import Avatar from '@/components/Avatar.js';
import Circles from '@/components/Circles.js';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants.js';
import CountUp from 'react-countup';

//   <!-- data -->
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [<FaHtml5 key={1} />, <FaCss3 key={2} />, <FaJs key={3} />, <FaReact key={3} />, <SiNextdotjs key={4} />, <SiFramer key={5} />, <FaWordpress key={6} />]
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma key={1} />, <SiAdobexd key={2} />, <SiAdobephotoshop key={3} />]
      }
    ]
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012'
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010'
      }
    ]
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023'
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012'
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010'
      }
    ]
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011'
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009'
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006'
      }
    ]
  }
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className=' bg-primary/30 py-32 text-center xl:text-left'>
        <Circles />
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='hidden xl:flex  absolute bottom-0 -left-[370px]'>
          <Avatar />
        </motion.div>

        <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
          {/* <!--  text --> */}

          <div className='flex-1 flex flex-col justify-center  xl:py-0 z-10'>
            <motion.h2
              variants={fadeIn('right', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2 text-4xl'>
              Captivating <span className='text-accent'>stories</span> birth magnificent designs.
            </motion.h2>
            <motion.p
              variants={fadeIn('down', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eos atque, eum iure illo aut.
            </motion.p>

            {/* <!-- counter --> */}
            <motion.div
              variants={fadeIn('right', 0.6)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='hidden md:flex  md:max-w-xl  xl:max-w-none mx-auto xl:mx-0 mb-8'>
              <div className='flex flex-1 xl:gap-x-6'>
                {/* <!-- experience --> */}
                <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 justify-center'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp
                      start={0}
                      end={10}
                      duration={5}
                    />{' '}
                    +
                  </div>
                  <div className='text-xs  uppercase tracking-[1px] leading-[1.4] max-w-[100px] mx-auto font-semibold'>Years of experience</div>
                </div>
                {/* <!-- clients --> */}
                <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp
                      start={0}
                      end={250}
                      duration={5}
                    />{' '}
                    +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] mx-auto font-semibold'>Satisfied clients</div>
                </div>
                {/* <!-- finish project --> */}
                <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp
                      start={0}
                      end={650}
                      duration={5}
                    />{' '}
                    +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] mx-auto font-semibold'>Finished projects</div>
                </div>
                {/* <!-- award --> */}
                <div className='relative flex-1 '>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp
                      start={0}
                      end={8}
                      duration={5}
                    />{' '}
                    +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] mx-auto font-semibold'>Winning award</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* <!-- info --> */}
          <motion.div
            variants={fadeIn('left', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex flex-col w-full xl:max-w-[48%] h-[480px] '>
            <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 '>
              {aboutData.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px]  after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}>
                  {item.title}
                </div>
              ))}
            </div>

            <div className='  py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start '>
              {aboutData[index].info.map((item, itemIndex) => (
                <div
                  className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
                  key={itemIndex}>
                  {/* <!-- title --> */}
                  <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                  <div className='hidden md:flex'>-</div>
                  <div>{item.stage}</div>

                  <div className='flex gap-x-4'>
                    {/* <!-- icon --> */}
                    {item.icons?.map((icon, itemIndex) => (
                      <div
                        className='text-2xl text-white'
                        key={itemIndex}>
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
