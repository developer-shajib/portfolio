import Link from 'next/link.js';
import { RiYoutubeLine, RiInstagramLine, RiFacebookLine, RiDribbbleLine, RiBehanceLine, RiPinterestLine } from 'react-icons/ri';

const link = [
  {
    url: '',
    icon: <RiYoutubeLine />
  },
  {
    url: '',
    icon: <RiInstagramLine />
  },
  {
    url: '',
    icon: <RiFacebookLine />
  },
  {
    url: '',
    icon: <RiDribbbleLine />
  },
  {
    url: '',
    icon: <RiBehanceLine />
  },
  {
    url: '',
    icon: <RiPinterestLine />
  }
];

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      {link.map((item, index) => (
        <Link
          key={index}
          href={item.url}
          className='hover:text-accent transition-all duration-300'>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
