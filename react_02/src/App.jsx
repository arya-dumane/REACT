import { memo } from 'react';
import Card from './components/card.jsx';

const App = () => {
    const user = "saniya";
    const age = 21;

    return (
        <div>
            <Card />

            <h1>My name is {user}</h1>
            <h1>I'm {age} years old</h1>
        </div>
    );
};

export default memo(App);