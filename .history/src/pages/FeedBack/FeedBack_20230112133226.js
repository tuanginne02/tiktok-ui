import React from 'react';
import classNames from 'classnames/bind';
import style from './FeedBack.module.scss';

const cx = classNames.bind(style);

function FeedBack() {
  return <div className={cx('feedBack')}>
    <div className={cx('feedBack-body')}
  </div>;
}

export default FeedBack;
