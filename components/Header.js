import Image from 'next/image.js';
import Link from 'next/link.js';
import Socials from './Socials.js';
import logo from '@/public/logo.svg';

const Header = () => {
  return (
    <header className='absolute z-30 w-full items-center px-16 xl:px-0 xl:h-[90px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
          <Link href={'/'}>
            {/* <Image
              src={logo}
              width={220}
              height={48}
              alt=''
              priority={true}
            /> */}
            dev<span>Shajib</span>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
