import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import style from './Upload.module.scss';
import Button from '~/components/Button';

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
              <FontAwesomeIcon className={cx('icon-upload')} icon={faCloudArrowUp} />
              <div className={cx('content-post-title')}>Select video to upload</div>
              <div className={cx('sports-upload')}>Or drag and drop a file</div>
              <div className={cx('content-post-upload-btn')}>
                <div className={cx('title-uncle')}>MP4 or WebM</div>
                <div className={cx('title-uncle')}>720x1280 resolution or higher</div>
                <div className={cx('title-uncle')}>Up to 10 minutes</div>
                <div className={cx('title-uncle')}>Less than 2 GB</div>
              </div>
              <Button className={cx('post-upload-btn')} primary>
                {' '}
                Select file
              </Button>
            </div>
          </div>
          <div className={cx('content-manipulation-upload')}>
            <div className={cx('caption')}></div>
            <div className={cx('cover')}></div>
            <div className={cx('watch-video')}></div>
            <div className={cx('check')}></div>
            <div className={cx('content-manipulation-post-upload')}></div>
            <div className={cx('content-manipulation-post-upload')}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;
