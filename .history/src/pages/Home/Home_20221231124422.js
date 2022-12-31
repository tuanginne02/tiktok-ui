import React from 'react';
import classNames from 'classnames/bind';
import style from './Home.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Image from '~/components/Image';
import Button from '~/components/Button';

const cx = classNames.bind(style);

function Home() {
  return (
    <div className={cx('wrapper-home')}>
      <Link className={cx('avatar-home')}>
        <img className={cx('img-avatar')} src="/media/userFl/lebong.jpg" alt="Lê Bống" />
      </Link>
      <div className={cx('content')}>
        <div className={cx('header-content')}>
          <div className={cx('user-name')}>
            <div className={cx('account-item')}>
              <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                  <strong>lebong95</strong>
                  <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Lê Bống</p>
              </div>
            </div>
          </div>
          <Button className={cx('fl-home')}>Following</Button>
        </div>
        <div className={cx('hashtag')}>hhhhhhhhhhhhhhh</div>
        <div className={cx('item-music')}>hhhhhhhhhhhhhhh</div>
      </div>
    </div>
  );
}
export default Home;
