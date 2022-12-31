import React from 'react';
import classNames from 'classnames/bind';
import style from './Home.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faMusic, faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
import ReactPlayer from 'react-player';

import AccountVideo from './AccountVideo';
;

const cx = classNames.bind(style);

function Home() {
  return (
    <div className={cx('wrapper-home')}>
      <AccountVideo />
    </div>
  );
}
export default Home;
