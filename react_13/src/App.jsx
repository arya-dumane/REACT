//Two-way data binding
//using react to fill the form instead directly writing on the website

import { useSyncExternalStore } from 'react';
import { memo } from 'react';
import {useState} from 'react';

const App = () => {

  const [title,setTitle]=useState('');
  const sumbithandler = (e) => {
    e.preventDefault();
    console.log("form submitted by",title);
    setTitle('');
  }
  return (
    <div>
      <form onSubmit={(e) => {
        sumbithandler(e);
      }}>
        <input type="text" placeholder='enter your name' value={title} onChange ={ (e) => {
          setTitle(e.target.value);
        } }/>
        <button>submit</button>
      </form>
    </div>
  );
};

export default memo(App);