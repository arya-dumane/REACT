import { memo } from 'react';
import {useState} from 'react';

const App = () => {
  const [num, setNum] = useState(0);

  function increaseNum(){
    console.log("increasing..");
    setNum(num+1);
  }
  function decreaseNum(){
    console.log("decreasing..");
    setNum(num-1);
  }
  function increaseby5Num(){
    console.log("Increasing by 5..");
    setNum(num+5);
  }
  return (
    <div>
      <h2>{num}</h2>
      <button onClick={increaseNum}>increase</button>
      <button onClick ={decreaseNum}>decrease</button>
      <button onClick ={increaseby5Num}>increase by 5</button>
    </div>
  );
};

export default memo(App);