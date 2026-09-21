//______________props_________________

import { memo } from 'react';
import Card from './components/card.jsx';

const App = () => {
  return (
    <div className="parent">
      <Card user='arya' age={25} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Y0gi55HZHJ_9Tqz9Za1lSjwwoYuNknsLv6snN2eO7w&s=10' />
      <Card user='Vaibhavi' age={21} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRv-aU-NYb9kdSCk0qki0eyCjLG0vYHJEgMZJdEPPuzg&s=10' />
      <Card user='soham' age={20} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwO0wY2zmLQ-AFOwPUfj_GWNfC4AVxIUeIKEocoo0a9g&s=10'/>
    </div>
  );
};

export default memo(App);



