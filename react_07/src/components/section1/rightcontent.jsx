import { memo } from 'react';
import Rightcard from './rightcard';

const Rightcontent = () => {
  return (
    <div className="h-full flex-1 bg-blue-200">
      <Rightcard />
    </div>
  );
};

export default memo(Rightcontent);
