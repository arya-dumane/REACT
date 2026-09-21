import { memo } from 'react';
import Section1 from './components/section1/section1.jsx';
import Section2 from './components/section2/section2.jsx';

const App = () => {
  return (
    <div>
      <Section1 />
      <Section2 />
      <h2>App</h2>
    </div>
  );
};

export default memo(App);