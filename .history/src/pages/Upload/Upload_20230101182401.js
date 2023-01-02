import React from'react';
import classNames from 'classnames/bind';
import style from './Upload.module.scss'


const cx = classNames.bind(style);

function Upload() {
    return (
        <div className={cx('upload')}>
        <div className={cx{'bodypload'}}>
            <div className={cx('body-upload-container')}>

            </div>
        </div>
        </div>
    )
  }
  
  export default Upload;
  