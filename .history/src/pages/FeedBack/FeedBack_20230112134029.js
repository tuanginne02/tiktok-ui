import React from 'react';
import classNames from 'classnames/bind';
import style from './FeedBack.module.scss';

const cx = classNames.bind(style);

function FeedBack() {
  return (
    <div className={cx('feedBack')}>
      <div className={cx('body-feedBack')}>
        <div className={cx('body-feedBack-container')}>
            <div className={cx('feedBack-header')}>
                <h1>Fe</h1></h1>
            </div>
        </div>
      </div>
    </div>
  );
}

export default FeedBack;
