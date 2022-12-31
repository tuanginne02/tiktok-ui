import React from 'react';
import classNames from 'classnames';
import style from './Home.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

function Home() {
  return (
    <div className={cx('home')}>
      <Link className={cx('avatar')}>
        <img src="/media/userFl/lebong.jpg" alt="" />
      </Link>
      <div className={cx('content')}>
        <div className={cx('header-content')}>
            
        </div>
      </div>
    </div>
  );
}
export default Home;
