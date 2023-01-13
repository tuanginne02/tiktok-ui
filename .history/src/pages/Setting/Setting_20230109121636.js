import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { UserIcon, NotificationIcon, BlockIcon, ToggleOff, ToggleOn } from '~/components/Icon/Icon';

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
                    <div className={cx('body-control')}>
                      <span>Account control</span>
                    </div>
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
                <div className={cx('right-center-content')}>
                  <div className={cx('right-center-body')}>
                    <div className={cx('center-body-title')}>
                      <span>Discoverability</span>
                    </div>
                    <div className={cx('private-acc')}>
                      <span>Private account</span>
                      <div className={cx('icon-private')}>
                        <ToggleOn />
                        <ToggleOff />
                      </div>
                    </div>
                   <div className={cx('title-private')}>
                      <span>
                        With a private account, only users you approve can follow you and watch your videos. Your existing
                        followers won't be affected.
                      </span>
                   </div>
                  </div>
                  <div className={cx('Blocked-acc')}>
                    <span>Blocked accounts</span>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </div>
                  <div className={cx('data-dowl')}>
                    <span>Data</span>
                    <span>Download your data</span>
                    <div className={cx('get-data')}>
                      <span>Get a coppy of your TikTok data</span>
                      <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx('content-right-bottom')}>
                <div className={cx('right-bottom-header')}>
                  <span>Push notifications</span>
                </div>
             <div className={cx('right-bottom-content')}>
                  <div className={cx('desktop-notifi')}>
                    <span>Desktop notifications</span>
                  </div>
                  <div className={cx('allow-brow')}>
                    <div className={cx('allow-brow-title')}>
                      <span>Allow in browser</span>
                      <ToggleOn />
                      <ToggleOff />
                    </div>
                    <div className={cx('allow-brow-content')}>
                      <span>
                        Stay on top of notifications for likes, comments, the latest videos, and more on desktop. You can
                        turn them off anytime.
                      </span>
                    </div>
                  </div>
                  <div className={cx('your-prefe')}>
                    <span>Your preferences</span>
                    <p>Your preferences will be synced automatically to the TikTok app.</p>
                  </div>
                  <div className={cx('interactions')}>
                    <div className={cx('inter-header')}>
                      <span>Interactions</span>
                      <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    <p>Likes, comments, new followers, mentions and tags</p>
                  </div>
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
