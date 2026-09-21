import { memo } from 'react';

const Herotext = () => {
  return (
    
      <div className="p-6">

        <h3 className="mb-7  text-3xl font-bold">
          Prospective <br />
          <span className='text-gray-600'>Customer</span> <br />
          segmentation
        </h3>

        <p className="text-xl font-medium text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Alias doloremque perspiciatis cumque, eveniet recusandae a
          laborum vero! Aperiam, at culpa.
        </p>

      </div>
    
  );
};

export default memo(Herotext);