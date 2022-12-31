import React from 'react';
import classNames from 'classnames/bind';
import style from './Home.module.scss';

import AccountVideo from './AccountVideo';


const cx = classNames.bind(style);

function Home() {
  return className={cx('wrapper-home')}(
    <div >
      <AccountVideo />
      <AccountVideo />
      <AccountVideo />
      <AccountVideo />
      <AccountVideo />
      <AccountVideo />

    </div>
  );
}
export default Home;
