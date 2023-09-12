import Image from 'next/image.js';
import Link from 'next/link.js';
import Slider from 'react-slick';
import project1 from '@/public/portfolioImg/Client-react-portfiolo.png';
import project2 from '@/public/portfolioImg/Car-Showcase.png';
import project3 from '@/public/portfolioImg/developershajib-portfolio.png';
import project4 from '@/public/portfolioImg/Tours-and-Travel-Book1.png';
import project5 from '@/public/portfolioImg/devSocial.png';

const projectList = [
  {
    title: 'React Portfolio',
    link: 'https://devshajib-portfolio.netlify.app',
    github: 'https://github.com/developer-shajib/Portfolio-with-React/tree/main',
    image: project1
  },

  {
    title: 'Car Showcase & Search',
    link: 'https://car-showcase-next13-drab.vercel.app',
    github: 'https://github.com/developer-shajib/Car-Showcase-with-Next-13',
    image: project2
  },
  {
    title: 'My Portfolio using Next js',
    link: 'https://developershajib.vercel.app/',
    github: 'https://github.com/developer-shajib/portfolio',
    image: project3
  },
  {
    title: 'Tours & Travels Booking using React js',
    link: 'https://tours-and-travels-booking.netlify.app',
    github: 'https://github.com/developer-shajib/Tours-and-Travel-Booking',
    image: project4
  },
  {
    title: 'Social Media website',
    link: 'https://dev-social-five.vercel.app',
    github: 'https://github.com/developer-shajib/DevSocial.git',
    video: 'https://www.linkedin.com/posts/developer-shajib_uses-features-activity-7105382804879790080-v3Oj?utm_source=share&utm_medium=member_desktop',
    image: project5
  }
];

const ProjectSlider = () => {
  let settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    infinite: false
  };
  return (
    <Slider
      className='z-50 '
      {...settings}>
      {[...projectList]?.reverse().map((item, index) => (
        <div
          className='relative w-full h-[350px]  overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform'
          key={index}>
          <Image
            src={item?.image}
            alt='Project Image'
            className=' w-full h-full'
            width={100}
            height={100}
          />

          <div className='absolute top-0 left-0 w-full h-full bg-[#00000091] bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300'>
            <div className='text-white text-center flex flex-col'>
              <h3 className='text-xl font-medium'>{item.title}</h3>

              <div className='mt-4 flex space-x-2 justify-center '>
                <Link
                  target='_blank'
                  href={item?.link}
                  className='bg-slate-950 hover:bg-red text-white px-3 py-1 rounded-md transition-colors duration-300'>
                  Link
                </Link>
                <Link
                  target='_blank'
                  href={item?.github}
                  className='bg-slate-950  hover:bg-red text-white px-3 py-1 rounded-md transition-colors duration-300'>
                  Github
                </Link>
                {item?.video && (
                  <Link
                    target='_blank'
                    href={item?.video}
                    className='bg-slate-950  hover:bg-red text-white px-3 py-1 rounded-md transition-colors duration-300'>
                    Video
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ProjectSlider;
