import React from 'react';
import classNames from 'classnames/bind';
import style from './Home.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faMusic } from '@fortawesome/free-solid-svg-icons';
import ReactPlayer from 'react-player';

// import Image from '~/components/Image';
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
            <ReactPlayer url="https://v16-webapp.tiktok.com/433dbba9fecc2363c6b5636e57cadbf3/63b02724/video/tos/alisg/tos-alisg-pve-0037/ogAYAZtzoIBJKpxBk3wuZuoGwA5ATh9hfQBbUw/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=2108&bt=1054&cs=0&ds=3&ft=4b~OyM3a8Zmo01dB.64jVfu6PpWrKsdm&mime_type=video_mp4&qs=0&rc=MzxoZmQ7ZWhmPGk1NTpnNkBpMzs5OTQ6ZmdnZzMzODgzNEAtXjA2LWI1XzIxYGM0LS82YSNrZzBmcjRvcWxgLS1kLy1zcw%3D%3D&l=2022123106120703B1C9EA1C384AEC2C3A&btag=80000" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
