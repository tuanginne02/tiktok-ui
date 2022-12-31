import React from 'react';
import classNames from 'classnames/bind';
import style from './Home.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
import ReactPlayer from 'react-player';

import Button from '~/components/Button';

const cx = classNames.bind(style);

function Video() {
  return (
    <div className={cx('body-content')}>
    <div className={cx('vidieo')}>
      <ReactPlayer
        width="350px"
        height="700px"
        playing={true}
        controls={false}
        url="https://www.youtube.com/watch?v=JHSRTU31T14"
      />
    </div>
    <div className={cx('icon-body')}>
      <button className={cx('video-btn')}>
        <FontAwesomeIcon className={cx('icon-btn')} icon={faHeart} />
        {/* <div className={cx('icon-btn')} icon={faHeart} activeIcon={<HomeActiveIcon />} ></div> */}
        <strong className={cx('icon-title')}> 111.4K</strong>
      </button>
      <button className={cx('video-btn')}>
        <FontAwesomeIcon className={cx('icon-btn')} icon={faComment} />
        <strong className={cx('icon-title')}> 500</strong>
      </button>
      <button className={cx('video-btn')}>
        <FontAwesomeIcon className={cx('icon-btn')} icon={faShare} />
        <strong className={cx('icon-title')}> 210</strong>
      </button>
    </div>
  </div>
  );
}
export default Video;
