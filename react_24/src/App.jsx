import { memo } from 'react';
import Navbar from './components/navbar';
import { useState } from 'react';

const App = () => {
  const [theme,setTheme] = useState('light');
  return (
    <div>
      <h1>Theme is {theme}</h1>
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default memo(App);