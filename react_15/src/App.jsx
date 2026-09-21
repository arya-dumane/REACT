import { memo } from 'react';

const App = () => {
  // localStorage.clear();
  // sessionStorage.clear();

  // localStorage.setItem('user','Arya');
  // localStorage.setItem('age','21');

  // const getuser = localStorage.getItem('user');
  // console.log(getuser);

  // localStorage.removeItem('age');

  const user1 = {
    name:'arya',
    age:21,
    city:'pune'
  }
  localStorage.setItem('user1',JSON.stringify(user1)); //localStorage me key-value pairs hamesha string-value form me store hoti he

    return (
      <div>
      <h2>App</h2>
    </div>
    )
  
};

export default memo(App);