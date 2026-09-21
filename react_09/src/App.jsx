// useState ia asynchronous and does not re-render if the value is same .


import { memo } from 'react';
import {useState} from 'react';

const App = () => {

  const [num,setNum] = useState(10);
  const [user,setUser] = useState('arya');

  function changeNum(){
     setNum(30);
     setUser('saniya');
  }

  return (
    <div>
      <h2>Value of num is {num} <br /> Value of User is {user}</h2>
      <button onClick={changeNum}>Click</button>
    </div>
  );
};

export default memo(App);