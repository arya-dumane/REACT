import { memo } from 'react';

import Header from './components/header/header.jsx';
import Button from './components/button/button.jsx';

const App = () => {
  return (
    <div>
      <Button />
      <Header />
    </div>
  );
};

export default memo(App);