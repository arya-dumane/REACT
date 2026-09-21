//Context API allows you to create a shared piece of data that can be accessed by multiple components without manually passing props through every level.
//Any component inside the Context's Provider can access the data.
//1. createContext() -> creating a channel through which data can be shared.
//2. Provider
//3. useContext()

import { memo } from 'react';
import Navbar from './components/navbar';
import Button from './components/button';


const App = () => {
  
  return (
    <div>
      <Navbar  />
      <Button />
    </div>
  );
};

export default memo(App);