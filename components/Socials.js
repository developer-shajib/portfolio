import Link from 'next/link.js';
import { RiYoutubeLine, RiInstagramLine, RiFacebookLine, RiDribbbleLine, RiBehanceLine, RiPinterestLine } from 'react-icons/ri';
import { BsSkype, BsLinkedin, BsFacebook } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const link = [
  {
    url: 'https://www.linkedin.com/in/developer-shajib/',
    icon: <BsLinkedin />
  },
  {
    url: 'https://join.skype.com/invite/wsEEnti5hAUH',
    icon: <BsSkype />
  },
  {
    url: 'https://www.facebook.com/sunhailshajib1/',
    icon: <BsFacebook />
  },
  {
    url: 'https://www.instagram.com/sunhail_shajib/',
    icon: <FaInstagramSquare />
  }
];

const Socials = () => {
  return (
    <div className='flex bg-[#ffffff38] px-20 py-4 md:px-0 md:py-0  md:bg-transparent items-center gap-x-5 text-lg'>
      {link.map((item, index) => (
        <Link
          key={index}
          href={item.url}
          className='hover:text-accent text-white animate-pulse md:animate-none transition-all duration-300'>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
