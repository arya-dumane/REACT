// create karo context
// provide karo data
// use karo data ko

import { memo, useContext } from 'react';
import Navbar2 from './navbar2';
import { ThemeDataContext } from '../context/ThemeContext';

const Navbar = (props) => {
  const [theme] = useContext(ThemeDataContext);
  return (
    <div className={theme}>
      <h2>Shreyians</h2>
      <Navbar2 />
    </div>
  );
};

export default memo(Navbar);