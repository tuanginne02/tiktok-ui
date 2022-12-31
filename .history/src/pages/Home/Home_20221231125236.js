import React from 'react';
import classNames from 'classnames/bind';
import style from './Home.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faMusic } from '@fortawesome/free-solid-svg-icons';

// import Image from '~/components/Image';
import Button from '~/components/Button';

const cx = classNames.bind(style);

function Home() {
  return (
    <div className={cx('wrapper-home')}>
      <Link className={cx('avatar-home')}>
        <img className={cx('img-avatar')} src="/media/userFl/sontung.jpg" alt="Sơn Tùng M-TP" />
      </Link>
      <div className={cx('content')}>
        <div className={cx('header-content')}>
          <div className={cx('user-name')}>
            <div className={cx('account-item')}>
              <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                  <strong>tiger050794</strong>
                  <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Sơn Tungf M-TP</p>
              </div>
            </div>
          </div>
          <Button className={cx('fl-home')}>Following</Button>
        </div>
        <div className={cx('hashtag')}>🕊🕊🕊 Missing you !!!</div>
        <div className={cx('item-music')}>
          <FontAwesomeIcon icon={faMusic} />
          original sound - Son Tung M-TP
        </div>
      </div>
    </div>
  );
}
export default Home;
