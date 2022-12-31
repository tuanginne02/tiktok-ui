import React from 'react';
import classNames from 'classnames/bind';
import style from '../Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
import videojs from 'video.js';
import VideoJS from '~/assets/video/Video';
import 
const cx = classNames.bind(style);

function Video() {
  const handleClick = () => {
    alert('clicked');
  };
  //   const playerRef = React.useRef(null);

  //   const videoJsOptions = {
  //     autoplay: true,
  //     controls: true,
  //     responsive: true,
  //     fluid: true,
  //     sources: [
  //       {
  //         src: '~/assets/video/SonTungMTP.mp4',
  //         type: 'video/mp4',
  //       },
  //     ],
  //   };

  //   const handlePlayerReady = (player) => {
  //     playerRef.current = player;

  //     // You can handle player events here, for example:
  //     player.on('waiting', () => {
  //       videojs.log('player is waiting');
  //     });

  //     player.on('dispose', () => {
  //       videojs.log('player will dispose');
  //     });
  //   };
  return (
    <div className={cx('body-content')}>
      <div className={cx('vidieo')}>
        {/* <VideoJS options={videoJsOptions} onReady={handlePlayerReady} /> */}
        <video
          id="my-video"
          class="video-js"
          controls
          preload="auto"
          width="350"
          height="700"
          data-setup="{}"
        >
          <source src="~/assets/video/SonTungMTP.mp4" type="video/mp4" />
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
