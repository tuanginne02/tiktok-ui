import className from 'classnames/bind';
import React from 'react';
import style from './Setting.module.scss';

const cx = className.bind(style);

function Setting() {
  return (
    <div className={cx('setting')}>
      <div className={cx('setting-container')}>
        <div className={cx('setting-body')}>
          <div className={cx('body-top')}>
            <div className={cx('body-top-header')}>
              <div className={cx('top-header-title')}>
                <span>Mânge account</span>
              </div>
            </div>
            <div className={cx('body-top-bottom')}></div>
          </div>
          <div className={cx('body-center')}></div>
          <div className={cx('body-bottom')}></div>
        </div>
      </div>
    </div>
  );
}

export default Setting;
