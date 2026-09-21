import { memo } from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <h2>Navbar</h2>
    <div className='nav'>
        <h3>Shreyians</h3>
        <div>
          {/* <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a> */}
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link> {/* Single page application aab reload nahi hoga */}
        </div>
      </div>
      </div>
  );
};

export default memo(Navbar);