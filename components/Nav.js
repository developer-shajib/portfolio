'use client';
import Link from 'next/link.js';
import { HiChatBubbleBottomCenterText, HiEnvelope, HiHome, HiRectangleGroup, HiUser, HiViewColumns } from 'react-icons/hi2';
import { usePathname } from 'next/navigation';

//  links
const links = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'skill', path: '/skill', icon: <HiChatBubbleBottomCenterText /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'project', path: '/project', icon: <HiViewColumns /> },
  { name: 'contact', path: '/contact', icon: <HiEnvelope /> }
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className='flex flex-col items-center xl:justify-center  fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full  xl:w-16 xl:max-w-md  xl:h-screen '>
      {/* <!-- inner --> */}
      <div className='flex w-full  items-center justify-between xl:justify-center xl:flex-col gap-y-10 xl:gap-y-0  px-4 md:px-40 xl:px-0 h-[80px] bg-white/10 xl:h-max py-8 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full '>
        {links.map((item, index) => {
          return (
            <Link
              className={`${item.path === pathname && 'text-accent'} relative flex items-center group hover:text-accent transition-all duration-300 xl:p-4`}
              key={index}
              href={item.path}>
              {/* <!-- Tooltip --> */}
              <div className='absolute pr-14 right-0 xl:group-hover:flex hidden'>
                <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px]'>
                  <div className='text-[12px] leading-none font-semibold capitalize'>{item.name}</div>

                  {/* <!-- Triangle --> */}
                  <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'></div>
                </div>
              </div>

              {/* <!-- Icon --> */}
              <div>{item.icon}</div>
            </Link>
          );
        })}
      </div>
      <i className=' fa-zhihu    '></i>
    </nav>
  );
};

export default Nav;
