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
                        <h3>Creator tools</h3>
                    </div>
                    <div className={cx('left-item')}>
                        <h3>Feed/Search</h3>
                    </div>
                    <div className={cx('left-item')}>
                        <h3></h3>
                    </div>
                    <div className={cx('left-item')}>
                        <h3></h3>
                    </div>
                    <div className={cx('left-item')}>
                        <h3></h3>
                    </div>
                    <div className={cx('left-item')}>
                        <h3></h3>
                    </div>
                    <div className={cx('left-item')}>
                        <h3></h3>
                    </div>
                    <div className={cx('left-item')}>
                        <h3></h3>
                    </div>
                    <div className={cx('left-item')}>
                        <h3></h3>
                    </div>
                    <div className={cx('left-item')}>
                        <h3></h3>
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
