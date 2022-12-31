import React from 'react';
import classNames from 'classnames/bind';
import ReactPlayer from 'react-player';
import style from '../Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function Video() {
  const handleClick = () => {
    alert('clicked');
  };
  return (
    <div className={cx('body-content')}>
      <div className={cx('vidieo')}>
        {/* <ReactPlayer
          width="350px"
          height="700px"
          playing={true}
          controls={false}
          src="~/assets/videos/SonTungMTP.mp4"
        /> */}
        <video
         width="350px"
          height="700px">
            <source 
          </video>
      </div>
      <div className={cx('icon-body')}>
        <button className={cx('video-btn')} onClick={handleClick}>
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
