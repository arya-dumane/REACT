//as data travels from up to bottom can't go up so to solve this we have done these

import { memo } from 'react';

const Navbar = (props) => {
  function changeTheme(){
    props.setTheme('Dark');
  }
  return (
    <div>
      <button onClick={changeTheme}>Change theme</button>
    </div>
  );
};

export default memo(Navbar);