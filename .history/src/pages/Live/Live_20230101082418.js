import classNames from 'classnames/bind';
import style from './Liv.module.scss';
import React from 'react';
import Button from '~/components/Button';
const cx = classNames.bind(style);

function Live() {
  return (
    <div className={cx('wrapper-live')}>
      <div className={cx('header-live')}>
        <div className={cx('bnt-header')}>
          <Button>For Me</Button>
        </div>
        <div className={cx('btn-header')}>
          {' '}
          <Button> For You</Button>
        </div>
      </div>
    </div>
  );
}

export default Live;
