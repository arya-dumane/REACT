import { memo } from 'react';

const App = () => {
  const sumbithandler = (e) => {
    e.preventDefault();
    console.log(e);
    console.log("form submitted");
  }
  return (
    <div>
      <form onSubmit={(e) => {
        sumbithandler(e);
      }}>
        <input type="text" placeholder='enter your name' />
        <button>submit</button>
      </form>
    </div>
  );
};

export default memo(App);