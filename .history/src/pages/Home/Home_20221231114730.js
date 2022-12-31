import React from 'react';
import classNames from 'classnames';
import style from './Home.module.scss';

const cx = classNames.bind(style);

function Home() {
  return (
    <div className={cx('home')}>
      <div className={cx('avatar')}>
        <img src="https://i.pravatar.cc/150?img=1" alt="" />
      </div>
    </div>
  );
}
export default Home;
