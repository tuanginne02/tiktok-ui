import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSortUp, faSortDown} from '@fortawesome/free-solid-svg-icons';

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
            <div className={cx('keyboard-title')}>
              <span>KeyBoard shortcuts</span>
            </div>
            <div className={cx('keyboard-items')}>
              <div className={cx('keyboard-item')}>
                <span className={cx('item-title')}>
                  <div className={cx('item-icon')}>
                    <FontAwesomeIcon icon={faSortUp} />
                 </div>
                </span>
              </div> <div className={cx('keyboard-item')}>
                <span className={cx('item-title')}>
                  <div className={cx('item-icon')}>
                    <FontAwesomeIcon icon={faSortUp} />
                 </div>
                </span>
              </div> <div className={cx('keyboard-item')}>
                <span className={cx('item-title')}>
                  <div className={cx('item-icon')}>
                    <FontAwesomeIcon icon={faSortUp} />
                 </div>
                </span>
              </div> <div className={cx('keyboard-item')}>
                <span className={cx('item-title')}>
                  <div className={cx('item-icon')}>
                    <FontAwesomeIcon icon={faSortUp} />
                 </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeyBoard;
