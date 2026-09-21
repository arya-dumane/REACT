import { memo } from 'react';

const Notfound = () => {
  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <h1 className="text-6xl font-semibold text-red-500">
        404 | Page Not Found
      </h1>
    </div>
  );
};

export default memo(Notfound);