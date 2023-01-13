import React from 'react';
import {}

import className from 'classnames/bind';
import style from './Setting.module.scss';

const cx = className.bind(style);

function Setting() {
  return (
    <div className={cx('setting')}>
      <div className={cx('setting-container')}>
        <div className={cx('setting-body')}>

          <div className={cx('setting-body-left')}>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;
