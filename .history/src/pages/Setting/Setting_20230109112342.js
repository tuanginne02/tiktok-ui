import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
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
            <FontAwesomeIcon icon={faArrowLeftLong} />
          </div>
          <div className={cx('setting-content')}>
            <div className={cx('content-left')}>
              <div className={cx('content-left-body')}>
                <div className={cx('left-body-manage')}>
                  <UserIcon />
                  <span> Manage account</span>
                </div>
                <div className={cx('left-body-privacy')}>
                  <BlockIcon />
                  <span> Privacy</span>
                </div>
                <div className={cx('left-body-notification')}>
                  <NotificationIcon />
                  <span>Push notification</span>
                </div>
              </div>
            </div>
            <div className={cx('content-right')}>
              <div className={cx('content-right-top')}>
                <div>
                  <div className={cx('right-top-header')}>
                    <span>Managa account</span>
                  </div>
                  <div className={cx('right-top-body')}>
                    <div className={cx('body-control')}>Account control</div>
                    <div className={cx('body-delete')}>
                      <span>Delete account</span>
                      <span>Delete</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx('content-right-center')}>
                <div className={cx('right-center-header')}>
                  <span>Privacy</span>
                </div>
                <div className={cx('right-center-body')}>
                  <div className={cx('center-body-title')}>
                    <span>Discoverability</span>
                  </div>
                  <div className={cx('private-acc')}>
                    <span>Private account</span>
                    <FontAwesomeIcon icon={faToggleOn} />
                    <FontAwesomeIcon icon={faToggleOff} />
                  </div>
                  <span>
                    With a private account, only users you approve can follow you and watch your videos. Your existing
                    followers won't be affected.
                  </span>
                </div>
                <div className={cx('Blocked-acc')}></div>
              </div>
              <div className={cx('content-right-bottom')}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;
