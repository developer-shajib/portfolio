import Link from 'next/link.js';
import { BiSolidDownload } from 'react-icons/bi';
import { FaRegEye } from 'react-icons/fa';

const HomeBtn = () => {
  return (
    <div className='flex gap-4 z-10'>
      <Link
        target='_blank'
        href={'https://drive.google.com/drive/folders/15eix6GanmpJmBCkGZbnJ9NFx-vhWerTS?usp=drive_link'}
        className='flex gap-5 items-center justify-center px-6 py-3 rounded-lg bg-red text-base text-white shadow-inner hover:shadow-2xl'>
        See Resume <FaRegEye className='text-2xl' />
      </Link>
      <Link
        href={'/project'}
        className='flex gap-5 items-center justify-center px-6 py-3 rounded-lg bg-black text-base text-white shadow-inner hover:shadow-2xl'>
        Explore Project <FaRegEye className='text-2xl' />
      </Link>
    </div>
  );
};

export default HomeBtn;
