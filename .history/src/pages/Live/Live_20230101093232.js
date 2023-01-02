import classNames from 'classnames/bind';
import style from './Liv.module.scss';
import React from 'react';
import Button from '~/components/Button';
const cx = classNames.bind(style);

function Live() {
  return (
    <div className={cx('wrapper-live')}>
      <div className={cx('header-live')}>
        <div></div>
        <div className={cx('btn-header')}>
          <Button className={cx('btn-fy')}>
            <span className={cx('title')}>For You</span>
          </Button>
          <Button className={cx('btn-fl')}>
            <span className={cx('title')}>Following</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Live;
