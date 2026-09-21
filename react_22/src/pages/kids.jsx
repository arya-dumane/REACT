import { memo } from 'react';

const Kids = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <h1 className="text-6xl font-semibold underline">
        Kids
      </h1>
    </div>
  );
};

export default memo(Kids);