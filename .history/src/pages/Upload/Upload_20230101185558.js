import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCl} from '@fortawesome/free-solid-svg-icons/faUpload';

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
              <input type="file" accept="video/*" class="inp-post"></input>
              <FontAwesomeIcon icon={faUpload} className={cx('icon')} />
            </div>
          </div>
          <div className={cx('content-manipulation-upload')}></div>
        </div>
      </div>
    </div>
  );
}

export default Upload;
