//useEffect is a React Hook that lets you run code after a component renders.It is used when you want React to do something after rendering the UI.

//useEffect = perform side effects after rendering


import { memo, useState, useEffect } from 'react';

const App = () => {

const [num1 , setNum1] = useState(0);
const [num2 , setNum2] = useState(0);

useEffect(function () {
  console.log("use effect is running");
},[num2]); //[dependency] This tells React when the effect should run again.

  return (
    <div>
      <h1>num1 is {num1}</h1>
      <h1>num2 is {num2}</h1>

      <button onMouseEnter={()=>{
        setNum1(num1+1);
      }}   onMouseLeave={()=>{
        setNum2(num2+10);
      }}>hover</button>
    </div>
  );
};

export default memo(App);