import React from 'react';
import classNames from 'classnames/bind';
import style from './Upload.module.scss';

const cx = classNames.bind(style);

function Upload() {
  return (
    <div className={cx('upload')}>
      <div className={cx('body-upload')}>
        <div className={cx('body-upload-container')}>
          <div className={cx('header-upload')}>
            <span className={cx('header-title')}>Upload video</span>
            <div className={cx('header-title-upload')}>
              <span className={cx('title')}>Post a video to your account</span>
            </div>
          </div>
        </div>
        <div className={cx('content-upload')}>
            <div className={cx('content-post-upload')}>
                <div className={cx('content-post')}>
                    <input />
                    <input type="file" accept="video/*" class="in"></input>
                </div>
            </div>
            <div className={cx('content-manipulation-upload')}></div>
        </div>
      </div>
    </div>
  );
}

export default Upload;
