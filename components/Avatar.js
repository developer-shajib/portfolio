import Image from 'next/image.js';

const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none z-6'>
      <Image
        className='translate-z-0 w-full h-full'
        src={'/avatar1.png'}
        width={737}
        height={678}
        alt=''
      />
    </div>
  );
};

export default Avatar;
