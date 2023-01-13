import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import className from 'classnames/bind';
import style from './KeyBoard.module.scss';

const cx = className.bind(style);

function KeyBoard() {
  return (
    <div className={cx('keyboard')}>
      <div className={cx('keyboard-container')}>
        <div className={cx('keyboard-body')}>
          <div className={cx('keyboard-content')}>
            <div className={cx('keyboard-close')}>&times;</div>
            <
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeyBoard;
