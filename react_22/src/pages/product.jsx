import { memo } from 'react';
import { Outlet, Link } from 'react-router-dom';

const Product = () => {
  return (
    <div>

      <div className="flex justify-center gap-10 py-6 bg-gray-900">

        <Link
          to="/product/men"
          className="text-xl hover:text-gray-400"
        >
          Men
        </Link>

        <Link
          to="/product/women"
          className="text-xl hover:text-gray-400"
        >
          Women
        </Link>

        <Link
          to="/product/kids"
          className="text-xl hover:text-gray-400"
        >
          Kids
        </Link>

      </div>

      <Outlet />  
      // It is basically a "placeholder" where the child route's component will be displayed.It is the place where React Router renders the currently matched child route.

    </div>
  );
};

export default memo(Product);