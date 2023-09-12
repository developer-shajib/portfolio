import Image from 'next/image.js';
import Link from 'next/link.js';
import Slider from 'react-slick';

const projectList = [
  {
    title: 'Tours & Travels Booking using React js',
    link: 'https://tours-and-travels-booking.netlify.app',
    github: 'https://github.com/developer-shajib/Tours-and-Travel-Booking',
    image: 'https://res.cloudinary.com/do6dt1ot2/image/upload/v1694168140/Portfolio/Tours-and-Travel-Book_vzr6bg.png'
  },
  {
    title: 'React Portfolio',
    link: 'https://devshajib-portfolio.netlify.app',
    github: 'https://github.com/developer-shajib/Portfolio-with-React/tree/main',
    image: 'https://res.cloudinary.com/do6dt1ot2/image/upload/v1694168141/Portfolio/React-Portfolio_exdqdh.png'
  },
  {
    title: 'My Portfolio using Next js',
    link: 'https://developershajib.vercel.app/',
    github: 'https://github.com/developer-shajib/portfolio',
    image: 'https://res.cloudinary.com/do6dt1ot2/image/upload/v1694168141/Portfolio/developershajib-portfolio_rfhxnf.png'
  },
  {
    title: 'Car Showcase & Search',
    link: 'https://car-showcase-next13-drab.vercel.app',
    github: 'https://github.com/developer-shajib/Car-Showcase-with-Next-13',
    image: 'https://res.cloudinary.com/do6dt1ot2/image/upload/v1694168141/Portfolio/project4_awz7pn.png'
  },
  {
    title: 'Social Media website',
    link: 'https://dev-social-five.vercel.app',
    github: 'https://github.com/developer-shajib/DevSocial.git',
    video: 'https://www.linkedin.com/posts/developer-shajib_uses-features-activity-7105382804879790080-v3Oj?utm_source=share&utm_medium=member_desktop',
    image: 'https://res.cloudinary.com/do6dt1ot2/image/upload/v1694168150/Portfolio/devSocial_usph5j.png'
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
      className=' '
      {...settings}>
      {[...projectList]?.reverse().map((item, index) => (
        <div key={index}>
          <Image
            src={item?.image}
            alt='Project Image'
            className=' w-full h-full'
            width={100}
            height={100}
          />
        </div>
        // <div
        //   className='relative w-full h-[350px]  overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform'
        //   key={index}>
        //   <Image
        //     src={item?.image}
        //     alt='Project Image'
        //     className=' w-full h-full'
        //     width={100}
        //     height={100}
        //   />

        //   <div className='absolute top-0 left-0 w-full h-full bg-[#00000091] bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300'>
        //     <div className='text-white text-center flex flex-col'>
        //       <h3 className='text-xl font-medium'>{item.title}</h3>

        //       <div className='mt-4 flex space-x-2 justify-center '>
        //         <Link
        //           target='_blank'
        //           href={item?.link}
        //           className='bg-slate-950 hover:bg-red text-white px-3 py-1 rounded-md transition-colors duration-300'>
        //           Link
        //         </Link>
        //         <Link
        //           target='_blank'
        //           href={item?.github}
        //           className='bg-slate-950  hover:bg-red text-white px-3 py-1 rounded-md transition-colors duration-300'>
        //           Github
        //         </Link>
        //         {item?.video && (
        //           <Link
        //             target='_blank'
        //             href={item?.video}
        //             className='bg-slate-950  hover:bg-red text-white px-3 py-1 rounded-md transition-colors duration-300'>
        //             Video
        //           </Link>
        //         )}
        //       </div>
        //     </div>
        //   </div>
        // </div>
      ))}
    </Slider>
  );
};

export default ProjectSlider;
