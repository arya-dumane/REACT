import { memo } from 'react';

const App = () => {
  function clicked(){
    console.log("clicked button");
  }

  function inputchange(elem){
    console.log(elem);

  }
  
  const pagescrolling = (val) => {
        if(val>0){
          console.log("scrolled up");
        }else{
          console.log("scrolled down");
        }
      }
  return (
    <div>
      {/* <button onClick={(clicked=>{
        console.log("clicking");
      })}>click here</button>
      <button onClick={clicked}>click here</button>

      <input onChange={inputchange} type="text" placeholder='enter something' ></input>

      <input onChange={(e)=>{
        console.log(e.target.value);
      }} type="text" placeholder='enter something' ></input>

      <input onChange={(e)=>{
        inputchange(e.target.value);
      }} type="text" placeholder='enter something' ></input> */}

      

      <div onWheel={(e)=>{
        pagescrolling(e.deltaY)
      }}>
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
      </div>
    </div>
  );
};

export default memo(App);