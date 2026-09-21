import { memo } from 'react';

const Men = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <h1 className="text-6xl font-semibold underline">
        Men
      </h1>
    </div>
  );
};

export default memo(Men);