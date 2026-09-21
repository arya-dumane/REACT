import { memo } from 'react';
import HeroText from './herotext'
import Arrow from './arrow'

const Leftcontent = () => {
  return (
    <div className="h-full flex flex-col justify-between w-1/3">
      <HeroText />
      <Arrow />

    </div>
  );
};

export default memo(Leftcontent);