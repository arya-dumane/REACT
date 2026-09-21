import { memo } from 'react';

const Card = (props) => {
  console.log(props);
  return (
       <div className="card">
        <img src={props.img} alt="" ></img>
        <h1>{props.user}, {props.age}</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, sit!</p>
        <button>View profile</button>
      </div>
  );
};

export default Card;