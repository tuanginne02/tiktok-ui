import React, { useState } from 'react';
import classNames from 'classnames/bind';
import style from '../Home.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faMusic } from '@fortawesome/free-solid-svg-icons';
import Video from '../Video';

import Button from '~/components/Button';

const cx = classNames.bind(style);

function AccountVideo() {
  const [isActive, setIsActive] = useState(false);

  const handleClickFl = () => {
    // 👇️ toggle
    setIsActive((current) => !current);
  };
  return (
    <div>
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
                <p className={cx('name')}>Sơn Tùng M-TP</p>
              </div>
            </div>
            <Button
              className={cx('fl-home')}
              style={{
                padding: isActive ? '3px 8px' : '',
                border: isActive ? '1px solid #ccc' : '',
                color: isActive ? 'black' : '',
              }}
              onClick={handleClickFl}
            >
              Following
            </Button>
          </div>
          <div className={cx('hashtag')}>🕊🕊🕊 Missing you !!!</div>
          <div className={cx('item-music')}>
            <FontAwesomeIcon icon={faMusic} />
            original sound - Son Tung M-TP
          </div>
        </div>
        <Video />
      </div>
    </div>
  );
}
export default AccountVideo;
