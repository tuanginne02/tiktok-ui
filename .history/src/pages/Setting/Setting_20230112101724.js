import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { UserIcon, NotificationIcon, BlockIcon, ToggleOff, ToggleOn } from '~/components/Icon/Icon';
import Button from '~/components/Button';

import className from 'classnames/bind';
import style from './Setting.module.scss';

const cx = className.bind(style);

function Setting() {
  // const [isActive, setIsActive] = useState(false);
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  const [isToggle1, setIsToggle1] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle
    event.currentTarget.classList.add('.color-primary');
    // setIsActive((current) => current);
  };
  // const handleClick = event => {
    // 👇️ toggle class on click
    // event.currentTarget.classList.toggle('bg-salmon');

    // 👇️ add class on click
    // event.currentTarget.classList.add('bg-salmon');

    // 👇️ remove class on click
    // event.currentTarget.classList.remove('bg-salmon');
  // };
  const handleClick1 = () => {
    // 👇️ toggle
    setIsActive1((current) => current);
  };
  const handleClick2 = () => {
    // 👇️ toggle
    setIsActive2((current) => current);
  };
  const handleToggle = () => {
    setIsToggle((current) => !current);
  };
  const handleToggle1 = () => {
    setIsToggle1((current) => !current);
  };
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
                <div
                  className={cx('left-body-manage')}
                  style={{
                    color: !isActive ? 'red' : '',
                  }}
                  onClick={handleClick}
                >
                  <UserIcon />
                  <span> Manage account</span>
                </div>
                <div
                  className={cx('left-body-privacy')}
                  style={{
                    color: isActive1 ? 'red' : '',
                  }}
                  onClick={handleClick1}
                >
                  <BlockIcon />
                  <span> Privacy</span>
                </div>
                <div
                  className={cx('left-body-notification')}
                  style={{
                    color: isActive2 ? 'red' : '',
                  }}
                  onClick={handleClick2}
                >
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
                        <Button
                          className={cx('btn-toggle')}
                          style={{ display: isToggle ? 'none' : '' }}
                          onClick={handleToggle}
                        >
                          <ToggleOff className={cx('icon-tgoff')} />
                        </Button>
                        <Button
                          className={cx('btn-toggle')}
                          style={{ display: !isToggle ? 'none' : '' }}
                          onClick={handleToggle}
                        >
                          <ToggleOn className={cx('icon-tgon')} />
                        </Button>
                      </div>
                    </div>
                    <div className={cx('title-private')}>
                      <span>
                        With a private account, only users you approve can follow you and watch your videos. Your
                        existing followers won't be affected.
                      </span>
                    </div>
                  </div>
                  <div className={cx('Blocked-acc')}>
                    <span>Blocked accounts</span>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </div>
                  <div className={cx('data-dowl')}>
                    <div className={cx('data-title')}>
                      <span>Data</span>
                    </div>
                    <div className={cx('downl-title')}>
                      <span>Download your data</span>
                    </div>
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
                      <dic className={cx('icon-allow')}>
                        <Button
                          className={cx('btn-toggle')}
                          style={{ display: isToggle1 ? 'none' : '' }}
                          onClick={handleToggle1}
                        >
                          <ToggleOff className={cx('icon-tgoff')} />
                        </Button>
                        <Button
                          className={cx('btn-toggle')}
                          style={{ display: !isToggle1 ? 'none' : '' }}
                          onClick={handleToggle1}
                        >
                          <ToggleOn className={cx('icon-tgon')} />
                        </Button>
                      </dic>
                    </div>
                    <div className={cx('allow-brow-content')}>
                      <span>
                        Stay on top of notifications for likes, comments, the latest videos, and more on desktop. You
                        can turn them off anytime.
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
