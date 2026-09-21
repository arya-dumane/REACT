import { memo } from 'react';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-8 px-18'>
      <h2 className='bg-black text-white uppercase px-5 py-3 rounded-full ' >Target Audience</h2>
      <button className='bg-gray-200 px-6 py-2 uppercase rounded-full tracking-wider text-sm '>digital banking platform</button>
    </div>
  );
};

export default memo(Navbar);