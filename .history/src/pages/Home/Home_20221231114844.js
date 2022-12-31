import React from 'react';
import classNames from 'classnames';
import style from './Home.module.scss';
import {Link}

const cx = classNames.bind(style);

function Home() {
  return (
    <div className={cx('home')}>
      <div className={cx('avatar')}>
        <img src="/media/userFl/lebong.jpg" alt="" />
      </div>

    </div>
  );
}
export default Home;
