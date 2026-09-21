import { memo } from 'react';
import styles from './button.module.css';//Bring the CSS classes from button.module.css into this JSX file and call them styles.

const Button = () => {
  return (
    <div className={styles.btn}>
      <button>button</button>
    </div>
  );
};

export default memo(Button);