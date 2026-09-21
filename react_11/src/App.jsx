import { memo } from 'react';
import {useState} from 'react';

const App = () => {

  const [num, setNum] = useState({user:'arya',age:20});

  // const btnclicked = ()=>{
  //   const newNum ={...num};
  //   newNum.user='saniya';
  //   newNum.age = 21;
  //   setNum(newNum);
  // }

  const btnclicked = () => {
    setNum(prev => ({...prev,age:45}));
  } //Batch update 

  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick = {btnclicked}>click</button>
    </div>
  );
};

export default memo(App);