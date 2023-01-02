import classNames from 'classnames/bind';
import style from './Liv.module.scss';
import React from 'react';
import Button from '~/components/Button';
const cx = classNames.bind(style);

function Live() {
  return (
    <div className={cx('wrapper-live')}>
      <div className={cx('header-live')}>
        <div className={cx('btn-header')}>
          <Button className={cx('btn-fy')}>
            <span className=>For You</span>
          </Button>
        </div>
        <div className={cx('btn-header')}>
          <Button className={cx('btn-fl')}>
            <span className=>Following</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Live;