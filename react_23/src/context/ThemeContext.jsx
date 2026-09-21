import { createContext, memo, useState } from 'react';

export const ThemeDataContext = createContext();

const ThemeContext = (props) => {
  const [theme,setTheme] = useState('light');
  return (
    <div>
      <ThemeDataContext.Provider value={[theme,setTheme]}>
        {props.children}      //children - Render whatever was placed inside ThemeContext.
      </ThemeDataContext.Provider>
      
    </div>
  );
};

export default memo(ThemeContext);