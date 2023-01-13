import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { UserIcon, NotificationIcon, BlockIcon } from '~/components/Icon/Icon';

import className from 'classnames/bind';
import style from './Setting.module.scss';

const cx = className.bind(style);

function Setting() {
  return (
    <div className={cx('setting')}>
      <div className={cx('setting-container')}>
        <div className={cx('setting-body')}>
          <div className={cx('arrow-icon')}>
            {' '}
            <FontAwesomeIcon icon={faArrowLeftLong} />
          </div>
          <div className={cx('setting-content')}>
            <div className={cx('content-left')}>
              <div className={cx('content-left-body')}>
                <div className={cx('left-body-manage')}>
                  <UserIcon />
                  <span> Mana</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;
