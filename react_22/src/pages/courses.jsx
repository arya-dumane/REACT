import { memo } from 'react';

const Courses = () => {
  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <h1 className="text-7xl font-semibold underline">
        Courses
      </h1>
    </div>
  );
};

export default memo(Courses);