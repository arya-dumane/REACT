import { memo } from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <button>Header</button>
    </div>
  );
};

export default memo(Header);