import React from 'react';
import classNames from 'classnames/bind';
import style from './FeedBack.module.scss';

const cx = classNames.bind(style);

function FeedBack() {
  return (
    <div className={cx('feedBack')}>
      <div className={cx('body-feedBack')}>
        <div className={cx('body-feedBack-container')}>
          <div className={cx('feedBack-header')}>
            <h1>Feedback anh help</h1>
            <div className={cx('feedBack-header-derection')}>
              <span>SECLECT A TOPIC</span>
            </div>
          </div>
          <div className={cx('feedBack-content')}>
            <div className={cx('content-left')}>
              <div className={cx('content-left-items')}>
                <div className={cx('left-item')}>
                  <h3>Suggestion</h3>
                </div>
                <div className={cx('left-item')}>
                  <h3>My Account & Settings</h3>
                </div>
                <div className={cx('left-item')}>
                  <h3>Creator tools</h3>
                </div>
                <div className={cx('left-item')}>
                  <h3>Feed/Search/Share/Embed</h3>
                </div>
                <div className={cx('left-item')}>
                  <h3>Video and Sound</h3>
                </div>
                <div className={cx('left-item')}>
                  <h3>Follow/Like/Comment</h3>
                </div>
                <div className={cx('left-item')}>
                  <h3>Notifications/messages</h3>
                </div>
                <div className={cx('left-item')}>
                  <h3>LIVE</h3>
                </div>
                <div className={cx('left-item')}>
                  <h3>Abuse Report</h3>
                </div>
                <div className={cx('left-item')}>
                  <h3>TikTok Balance</h3>
                </div>
                <div className={cx('left-item')}>
                  <h3>Not Responding/Lagging/Other</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedBack;
