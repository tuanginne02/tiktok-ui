import React from 'react';
import classNames from 'classnames/bind';
import style from './Following.module.scss';

import AccountVideo from './AccountVideo';

const cx = classNames.bind(style);

function Following() {
  return (
    <div className={cx('home')}>
      <AccountVideo />
      <AccountVideo />
      <AccountVideo />
      <AccountVideo />
      <AccountVideo />
      <AccountVideo />
    </div>
  );
}
export default Following;
