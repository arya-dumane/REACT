import { memo } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-8 bg-blue-800">

      <h2 className="text-3xl font-bold">
        Shreyians
      </h2>

      <div className="flex gap-10">

        <Link
          to="/"
          className="text-xl font-medium hover:text-gray-300"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="text-xl font-medium hover:text-gray-300"
        >
          About
        </Link>

        <Link
          to="/contact"
          className="text-xl font-medium hover:text-gray-300"
        >
          Contact
        </Link>

        <Link
          to="/product"
          className="text-xl font-medium hover:text-gray-300"
        >
          Product
        </Link>

        <Link
          to="/courses"
          className="text-xl font-medium hover:text-gray-300"
        >
          Courses
        </Link>

      </div>

    </nav>
  );
};

export default memo(Navbar);