'use client';

import Bulb from '@/components/Bulb.js';
import Circles from '@/components/Circles.js';
import { fadeIn } from '@/variants.js';
import { motion } from 'framer-motion';
import { BiLogoReact } from 'react-icons/bi';
import { SiExpress, SiMongodb, SiHeroku, SiTailwindcss, SiBabel, SiNextdotjs, SiSocketdotio, SiWebpack, SiTypescript, SiRender, SiNetlify, SiVercel } from 'react-icons/si';
import { FaNodeJs, FaSass, FaBootstrap, FaCpanel, FaLess } from 'react-icons/fa';
import { TbBrandRedux, TbJson } from 'react-icons/tb';
import { BsGithub } from 'react-icons/bs';
import { FiFigma } from 'react-icons/fi';
import { PiFramerLogoFill } from 'react-icons/pi';

// <!-- skill list -->
const skillList = [
  {
    icon: <BiLogoReact />,
    title: 'React js'
  },
  {
    icon: <FaNodeJs />,
    title: 'Node js'
  },
  {
    icon: <SiExpress />,
    title: 'Express js'
  },
  {
    icon: <SiMongodb />,
    title: 'MongoDB'
  },
  {
    icon: <SiNextdotjs />,
    title: 'Next js'
  },
  {
    icon: <SiTypescript />,
    title: 'Typescript'
  },
  {
    icon: <TbBrandRedux />,
    title: 'Redux'
  },
  {
    icon: <BsGithub />,
    title: 'Github'
  },
  {
    icon: <TbJson />,
    title: 'Json'
  },

  {
    icon: <FaNodeJs />,
    title: 'Ejs'
  },
  {
    icon: <FaSass />,
    title: 'Sass'
  },
  {
    icon: <FaLess />,
    title: 'Less'
  },
  {
    icon: <FaBootstrap />,
    title: 'Bootstrap 5'
  },
  {
    icon: <SiTailwindcss />,
    title: 'Tailwind'
  },
  {
    icon: <FaCpanel />,
    title: 'Cpanel'
  },
  {
    icon: <SiWebpack />,
    title: 'Webpack'
  },
  {
    icon: <SiBabel />,
    title: 'Bable'
  },
  {
    icon: <span className='font-bold'>JWT</span>,
    title: 'JsonWebToken'
  },
  {
    icon: <SiSocketdotio />,
    title: 'WebSocket'
  },
  {
    icon: <PiFramerLogoFill />,
    title: 'Framer Motion'
  },
  {
    icon: <SiHeroku />,
    title: 'Heroku'
  },

  {
    icon: <SiRender />,
    title: 'Render'
  },
  {
    icon: <SiNetlify />,
    title: 'Netlify'
  },
  {
    icon: <SiVercel />,
    title: 'Vercel'
  },

  {
    icon: <FiFigma />,
    title: 'Figma'
  }
];

const Skill = () => {
  return (
    <>
      <div className='h-full bg-primary/30 '>
        <Circles />
        <div className='container mx-auto '>
          <div className=' flex  flex-col justify-center pt-[172px] md:pt-[100px] '>
            {/* <!-- text --> */}
            <div className=' text-center flex w-full  flex-col  mb-4 xl:mb-0  '>
              <motion.h2
                variants={fadeIn('right', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='h2 xl:mt-8 '>
                My Skills <span className='text-accent'>.</span>
              </motion.h2>
            </div>

            {/* <!-- skills --> */}

            <motion.div
              variants={fadeIn('left', 0.6)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='   md:mx-auto md:pt-16 '>
              <div className='flex flex-wrap gap-4 w-full justify-center'>
                {skillList.map((item, index) => (
                  <div
                    key={index}
                    className='flex cursor-pointer flex-col items-center justify-center py-[7px] px-[6px]  transition-all group hover:text-red duration-300'>
                    <p className='text-white text-[35px] group-hover:text-red  pb-[15px] '>{item.icon}</p>
                    <h4>{item.title}</h4>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        <Bulb />
      </div>
    </>
  );
};

export default Skill;
