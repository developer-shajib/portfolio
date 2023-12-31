'use client';

import TopLeftImg from '@/components/TopLeftImg.js';

import './globals.css';
import { Sora } from 'next/font/google';
import Nav from '@/components/Nav.js';
import Header from '@/components/Header.js';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const sora = Sora({ subsets: ['latin'], variable: '--font-sora', weight: ['100', '200', '300', '400', '500', '600', '700', '800'] });

// export const metadata = {
//   title: 'Developer shajib',
//   description: 'This is a portfolio website of developer shajib.'
// };

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang='en'>
      <body className={sora.className}>
        <div className={`page bg-site text-white bg-cover bg-no-repeat  `}>
          <ToastContainer />
          <TopLeftImg />
          <Nav />
          <Header />
          <motion.div
            className='h-full'
            key={pathname}>
            {children}
          </motion.div>
        </div>
      </body>
    </html>
  );
}
