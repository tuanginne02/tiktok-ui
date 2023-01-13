import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

import className from 'classnames/bind';
import style from './Setting.module.scss';

const cx = className.bind(style);

function Setting() {
  return (
    <div className={cx('setting')}>
      <div className={cx('setting-container')}>
        <div className={cx('setting-body')}>
        <div className={cx('')}>  <FontAwesomeIcon icon={faArrowLeftLong} /></div>
          <div className={cx('setting-content')}></div>
        </div>
      </div>
    </div>
  );
}

export default Setting;
