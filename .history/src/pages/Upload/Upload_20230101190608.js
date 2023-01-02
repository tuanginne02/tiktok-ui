import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import style from './Upload.module.scss';
import Button from '~/components/Button'

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
            <input type="file" accept="video/*" className={cx('inp-post')}></input>
            <div className={cx('content-post')}>
              <FontAwesomeIcon icon={faCloudArrowUp} className={cx('icon')} />
              <div className={cx('content-post-title')}>Select video to upload</div>
              <div className={cx('content-post-upload')}>Or drag and drop a file</div>
              <div className={cx('content-post-upload-btn')}>
                <div className={cx('btn-upload')}>MP4 or WebM</div>
                <div className={cx('btn-upload')}>720x1280 resolution or higher</div>
                <div className={cx('btn-upload')}>Up to 10 minutes</div>
                <div className={cx('btn-upload')}>Less than 2 GB</div>
              </div>
              <Button className={cx('post-upload-btn')} primary> Select file</Button>
            </div>
          </div>
          <div className={cx('content-manipulation-upload')}>
            <div className={cx('content-manipulation-post-upload')}></div>
            <div className={cx('content-manipulation-post-upload')}></div>
            <div className={cx('content-manipulation-post-upload')}></div>
            <div className={cx('content-manipulation-post-upload')}></div>
            <div className={cx('content-manipulation-post-upload')}></div>
            <div className={cx('content-manipulation-post-upload')}></div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;
