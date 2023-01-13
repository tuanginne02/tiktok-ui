import React, { useState } from 'react';
import classNames from 'classnames/bind';
import style from '../Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
import video from '~/assets/video/';
const cx = classNames.bind(style);

function Video() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // 👇️ toggle
    setIsActive((current) => !current);
  };
  return (
    <div className={cx('body-content')}>
      <div className={cx('vidieo')}>
        {/* <VideoJS options={videoJsOptions} onReady={handlePlayerReady} /> */}
        <video
          className="video-js"
          // autoPlay={true}
          // preload="auto"
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className={cx('icon-body')}>
        <button className={cx('video-btn')}>
          <FontAwesomeIcon
            className={cx('icon-btn')}
            icon={faHeart}
            style={{
              animation: 'none',
              color: isActive ? 'red' : '',
            }}
            onClick={handleClick}
          />
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
