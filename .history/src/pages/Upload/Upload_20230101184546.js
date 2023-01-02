import React from'react';
import classNames from 'classnames/bind';
import style from './Upload.module.scss'


const cx = classNames.bind(style);

function Upload() {
    return (
        <div className={cx('upload')}>
        <div className={cx('body-upload')}>
            <div className={cx('body-upload-container')}>
                <div className={cx('header-upload')}>
                    <span className={cx('header-title')}>Upload video</span>
                    <div className={cx('header-button')}>

                </div>
            </div>
        </div>
        </div>
    )
  }
  
  export default Upload;
  