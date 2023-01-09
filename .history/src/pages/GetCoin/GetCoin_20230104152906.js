import React from 'react';
import classNames from 'classnames/bind';
import style from './GetCoin.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp, faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { CoinTikTokGold } from '~/components/Icon/Icon';

import Button from '~/components/Button';
const cx = classNames.bind(style);

function GetCoin() {
  return (
    <div className={cx('get-coin')}>
      <div className={cx('get-coin-container')}>
        <div className={cx('get-coin-body')}>
          <div className={cx('get-coin-header')}>
            <div className={cx('header-top')}>
              <span className={cx('header-top-left')}>Get Coins</span>
              <Link to="/" className={cx('header-top-right')}>
                View transaction history{' '}
              </Link>
            </div>
            <div className={cx('header-bottom')}>
              <div className={cx('header-btm-body')}>
                <div className={cx('header-btm-img')}>
                  <img className={cx('img-coin')} src="/media/imgAccount/DLPH-hoaa.png" alt="avatar" />
                </div>
                <div className={cx('header-btm-info')}>
                  <div className={cx('info-user')}>
                    <p>Đào Lê Phương Hoa</p>
                  </div>
                  <div className={cx('info-coin')}>
                    <CoinTikTokGold />
                    <span>0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('get-coin-content')}>
            <div className={cx('content-header')}>
                <
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetCoin;
