import { memo } from 'react';
import Leftcontent from './leftcontent';
import Rightcontent from './rightcontent';

const Page1content = () => {
  return (
    <div className='py-10 flex  items-center gap-10 h-[90vh]'>
     <Leftcontent />
     <Rightcontent />
    </div>
  );
};

export default memo(Page1content);