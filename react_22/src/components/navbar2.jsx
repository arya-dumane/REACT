import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar2 = () => {

  let navigate = useNavigate();

  return (
    <div className='py-2 px-5 bg-cyan-800'>
      <button onClick={()=>{navigate('/')}} className='bg-amber-500 px-5 py-2 m-2 rounded cursor-pointer active:scale-95'>Return to home page</button>
      <button onClick={()=>{navigate(-1)}} className='bg-amber-500 px-5 py-2 m-2 rounded cursor-pointer active:scale-95'>Back</button>
      <button onClick={()=>{navigate(+1)}} className='bg-amber-500 px-5 py-2 m-2 rounded cursor-pointer active:scale-95'>next</button>
    </div>
  );
};

export default memo(Navbar2);