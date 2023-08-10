import Image from 'next/image.js';
import Link from 'next/link.js';
import Slider from 'react-slick';
import project1 from '@/public/Tours-and-Travel-Book.png';
import project2 from '@/public/React-Portfolio.png';
import project3 from '@/public/developershajib-portfolio.png';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants.js';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const projectList = [
  {
    title: 'Tours & Travels Booking using React js',
    link: 'https://tours-and-travels-booking.netlify.app',
    github: 'https://github.com/developer-shajib/Tours-and-Travel-Booking',
    image: project1
  },
  {
    title: 'React Portfolio',
    link: 'https://devshajib-portfolio.netlify.app',
    github: 'https://github.com/developer-shajib/Portfolio-with-React/tree/main',
    image: project2
  },
  {
    title: 'My Portfolio using Next js',
    link: 'https://developershajib.vercel.app/',
    github: 'https://github.com/developer-shajib/portfolio',
    image: project3
  }
];

const ProjectSlider = () => {
  let settings = {
    dots: true,
    // centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <Slider
      className='flex gap-x-4'
      {...settings}>
      {projectList?.map((item, index) => (
        <div
          key={index}
          variants={fadeIn('down', 0.6)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='relative group w-full h-96 px-5'>
          <Link
            href={item.link}
            target='_blank'>
            <Image
              className='w-full'
              src={item.image}
              alt=''
            />
            <div className='w-full group-hover:flex flex-col flex-wrap justify-center items-center text-[20px]  absolute h-full top-0 left-0 bg-[#00000099]  transition-all duration-300 hidden opacity-0 overflow-hidden group-hover:visible group-hover:opacity-100 -translate-x-80 group-hover:translate-x-0'>
              {item.title}
              <span className='flex items-center gap-x-4 bg-red rounded-lg px-4 py-1 mt-5'>
                View <BsFillArrowRightCircleFill />
              </span>
              <Link
                href={item?.github}
                className='flex items-center gap-x-4 z-10 bg-black rounded-lg px-4 py-1 mt-5'>
                Github <BsFillArrowRightCircleFill />
              </Link>
            </div>
          </Link>
        </div>
      ))}
      <div className='text-center'>Coming soon</div>
    </Slider>
  );
};

export default ProjectSlider;
