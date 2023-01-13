import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretUp, faSquareCaretDown, faL, faM } from '@fortawesome/free-solid-svg-icons';
import { UpIcon, DownIcon, LetterLIcon, LetterRIcon } from '~/components/Icon/Icon';
import className from 'classnames/bind';
import style from './KeyBoard.module.scss';

const cx = className.bind(style);

function KeyBoard() {
  return (
    <div className={cx('keyboard')}>
      <div className={cx('keyboard-container')}>
        <div className={cx('keyboard-body')}>
          <div className={cx('keyboard-content')}>
            <div className={cx('content-body')}>
              <div className={cx('keyboard-close')}>&times;</div>
              <div className={cx('keyboard-title')}>
                <span>KeyBoard shortcuts</span>
              </div>
              <div className={cx('keyboard-items')}>
                <div className={cx('keyboard-item')}>
                  <span className={cx('item-title')}>Go to previous video</span>
                  <div className={cx('item-icon')}>
                    {/* <FontAwesomeIcon icon={faSquareCaretUp} /> */}
                    <UpIcon />
                  </div>
                </div>
                <div className={cx('keyboard-item')}>
                  <span className={cx('item-title')}>Go to next video</span>
                  <div className={cx('item-icon')}>
                    {/* <FontAwesomeIcon icon={faSquareCaretDown} /> */}
                    <DownIcon />
                  </div>
                </div>
                <div className={cx('keyboard-item')}>
                  <span className={cx('item-title')}>Like video</span>
                  <div className={cx('item-icon')}>
                    {/* <FontAwesomeIcon icon={faL} /> */}
                    
                  </div>
                </div>
                <div className={cx('keyboard-item')}>
                  <span className={cx('item-title')}>Mute/unmute video</span>
                  <div className={cx('item-icon')}>
                    <FontAwesomeIcon icon={faM} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeyBoard;
