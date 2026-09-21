import { memo } from 'react';
import { useParams } from 'react-router-dom';

const Coursedetail = () => {

  const params = useParams(); //returns parameters from the URL
  console.log(params);
  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <h1 className="text-7xl font-semibold underline">
        {params.courseid} Course details
      </h1>
    </div>
  );
};

export default memo(Coursedetail);