import React from 'react';
import classNames from 'classnames/bind';
import style from './Home.module.scss';
import {Video as AccountVideo} from './AccountVideo';


const cx = classNames.bind(style);

function Home() {
  return (
    <div className={cx('wrapper-home')}>
      <Video />
    </div>
  );
}
export default Home;
