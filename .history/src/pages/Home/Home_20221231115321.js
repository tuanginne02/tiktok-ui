import React from 'react';
import classNames from 'classnames';
import style from './Home.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChec}

const cx = classNames.bind(style);

function Home() {
  return (
    <div className={cx('home')}>
      <Link className={cx('avatar')}>
        <img src="/media/userFl/lebong.jpg" alt="" />
      </Link>
      <div className={cx('content')}>
        <div className={cx('header-content')}>
            <div className={cx('user-name')}>
            <div className={cx('account-item')}>
          <img className={cx('avatar')} src="/media/userHoaa.jpg" alt="" />
          <div className={cx('item-info')}>
            <p className={cx('nickname')}>
              <strong>hoaa.hanassii</strong>
              <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
            <p className={cx('name')}>Đào Lê Phương Hoa</p>
          </div>
        </div>
            </div>

        </div>
      </div>
    </div>
  );
}
export default Home;
