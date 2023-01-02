import classNames from 'classnames';
import style from './Liv.module.scss';
import React from 'react';
import Button from '~/components/Button';
const cx = classNames.bind(style);

function Live() {
  return (
    <div className={cx('wrapper-live')}>
      <div className={cx('header-live')}>
      <>
            <Button>For Me</Button>
            <Button> For You</Button>
      </>
      </div>
    </div>
  );
}

export default Live;
