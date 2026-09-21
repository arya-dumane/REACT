import { useState } from 'react';

const App = () => {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      title,
      detail
    };

    setTask((previousTask) => [...previousTask, newTask]);

    setTitle('');
    setDetail('');
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">

      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-4 max-w-md"
      >

        <h1 className="text-3xl font-bold">
          Add Notes
        </h1>

        <input
          type="text"
          placeholder="Enter notes heading"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-5 py-2 rounded text-black bg-white"
        />

        <textarea
          placeholder="Write details"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          className="w-full h-32 px-5 py-2 rounded text-black bg-white"
        />

        <button
          type="submit"
          className="bg-white text-black px-5 py-2 rounded"
        >
          Add Note
        </button>

      </form>

      <div className="mt-10">

        <h1 className="text-3xl font-bold">
          Recent Notes
        </h1>

        <div className="flex flex-wrap gap-5 mt-5">

          {task.map((elem, idx) => (
            <div
              key={idx}
              className="w-40 h-52 rounded-xl bg-white text-black p-4"
            >
              <h2 className="font-bold">
                {elem.title}
              </h2>

              <p className="mt-2">
                {elem.detail}
              </p>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default App;



// import { useSyncExternalStore } from 'react';
// import { memo } from 'react';
// import {useState} from 'react'

// const App = () => {

// const [title,setTitle] = useState('');
// const [detail,setDetail] = useState('');
// const [task,setTask] = useState([]);

//   const submithandler = (val) => {
//     val.preventDefault();
//     console.log("form submitted by...",title,detail);

//     const copyTask = [...task];
//     copyTask.push({title,detail});
//     setTask(copyTask);
//     console.log(task);

//     setTitle('');
//     setDetail('');
//   }

//   return (
//     <div className ='h-screen lg:flex bg-black text-white'>
      
//       <form onSubmit={(e) => { 
//         submithandler(e)
//         }} className ='flex gap-4 lg:w=1/2 flex-col items-start  p-10'>

//           <h1 className='text-3xl font-bold'>Add notes</h1>

//           <input 
//             type="text" 
//             placeholder='Enter notes heading'
//             className ='w-full px-5 py-2 border-2 outline-none rounded'
//             value={title}
//             onChange={(e)=>{
//               setTitle(e.target.value)
//             }}
//           />

//           <textarea 
//             type="text"
//             placeholder='write details' 
//             className ='w-full px-5 py-2 h-32 flex items-start flex-row border-2 outline-none rounded'
//             value={detail}
//             onChange={(e)=>{
//               setDetail(e.target.value)
//             }}
//           />

//         <button className ='bg-white text-black active:bg-gray-500 px-5 py-2 rounded'>add note</button>
  
//         {/* <img className = 'rotate-y-180 h-50' src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png" alt="" /> */}

//       </form>

//       <div className='lg:w=1/2 lg:border-l-2 p-10'>
//         <h1 className='text-3xl font-bold'>Recent notes</h1>
//         <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>
//           {task.map(function(elem,idx){
//             return <div key={idx} className='h-52 w-40 rounded-xl bg-white text-black-
//             '></div>;
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default memo(App);