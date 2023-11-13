'use client';

import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaWordpress } from 'react-icons/fa';
import { SiAdobephotoshop, SiAdobexd, SiFramer, SiNextdotjs } from 'react-icons/si';
import Avatar from '@/components/Avatar.js';
import Circles from '@/components/Circles.js';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants.js';
import CountUp from 'react-countup';
import Image from 'next/image.js';

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
      <div className=' bg-primary/30 py-44 md:py-32 text-center xl:text-left'>
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
              About <span className='text-accent'>Me.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('down', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='max-w-[500px] mx-auto tex-md md:text-md text-slate-400 font-medium xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
              {`HI, I'm Md Shajibul Islam, a 22-year-old Full Stack MERN Developer and Computer Science student. With two years of experience, I craft dynamic web applications that exceed client expectations. Constantly learning and staying up-to-date with
              the latest technologies, I deliver clean, efficient, and user-centric solutions. When not coding, I enjoy traveling and playing football. Let's collaborate and bring your ideas to life with the power of the MERN stack!`}
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
                <div className='relative flex flex-col items-center flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 justify-center'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp
                      start={0}
                      end={2}
                      duration={5}
                    />{' '}
                    +
                  </div>
                  <div className='text-xs  uppercase tracking-[1px] leading-[1.4] max-w-[100px] mx-auto font-semibold'>Years of experience</div>
                </div>
                {/* <!-- clients --> */}
                {/* <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp
                      start={0}
                      end={}
                      duration={5}
                    />{' '}
                    +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] mx-auto font-semibold'>Satisfied clients</div>
                </div> */}
                {/* <!-- finish project --> */}
                <div className='relative flex flex-col items-center flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 justify-center'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp
                      start={0}
                      end={10}
                      duration={5}
                    />{' '}
                    +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] mx-auto font-semibold'>Finished projects</div>
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
              <Image
                className='animate-pulse'
                src={`/about.png`}
                width={400}
                height={300}
                alt=''
              />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
