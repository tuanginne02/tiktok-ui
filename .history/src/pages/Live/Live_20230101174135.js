import classNames from 'classnames/bind';
import style from './Liv.module.scss';
import React, { useState } from 'react';
import Button from '~/components/Button';
const cx = classNames.bind(style);

function Live() {
  const [isHovering, setIsHovering] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // 👇️ toggle
    setIsActive((current) => !current);
  };

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className={cx('wrapper-live')}>
      <div className={cx('header-none')}>
        <div
          className={cx('btn-header-none')}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          style={{
            display: isActive ? 'red' : '',
          }}
          onClick={handleClick}
        >
          <button className={cx('btn-none-fy')}></button>
          <button className={cx('btn-none-fl')}></button>
        </div>
      </div>
      {isHovering && (
        <div className={cx('control-show')}>
          <div className={cx('header-live')}>
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
      )}
    </div>
  );
}

export default Live;
