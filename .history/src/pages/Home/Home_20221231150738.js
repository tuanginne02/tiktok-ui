import React from 'react';
import classNames from 'classnames/bind';
import style from './Home.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faMusic, faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
import ReactPlayer from 'react-player';
import Video from '/';

import Button from '~/components/Button';

const cx = classNames.bind(style);

function Home() {
  return (
    <div className={cx('wrapper-home')}>
      <Link className={cx('avatar-home')}>
        <img className={cx('img-avatar')} src="/media/userFl/sontung.jpg" alt="Sơn Tùng M-TP" />
      </Link>
      <div className={cx('content')}>
        <div className={cx('header-content')}>
          <div className={cx('user-name')}>
            <div className={cx('account-item')}>
              <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                  <strong>tiger050794</strong>
                  <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Sơn Tùng M-TP</p>
              </div>
            </div>
            <Button className={cx('fl-home')}>Following</Button>
          </div>
          <div className={cx('hashtag')}>🕊🕊🕊 Missing you !!!</div>
          <div className={cx('item-music')}>
            <FontAwesomeIcon icon={faMusic} />
            original sound - Son Tung M-TP
          </div>
        </div>
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
              <div className={cx('icon-btn')} icon={faHeart} ></div>
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
      </div>
    </div>
  );
}
export default Home;
