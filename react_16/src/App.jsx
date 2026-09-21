import { memo } from 'react';
import axios from 'axios';
import {useState} from 'react';

const App = () => {

  // const getData = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/10');
  //   const data = await response.json();
  //   console.log(data);
  // }

  const [data,setData] = useState([]);
  const getData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1/posts');//Axios is a library that helps us make HTTP requests.
    console.log(response.data);
    setData(response.data);
  }
  return (
    <div>
      <button onClick={getData}>Get data</button>
      <div>
        {data.map(function(e,idx){
          return <h3>hello,{idx}</h3>
        })}
      </div>
    </div>
  );
};

export default memo(App);