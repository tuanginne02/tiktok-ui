import React from 'react';
import classNames from 'classnames';
import style from './GetCoin.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp, faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { CoinTikTokGold } from '~/components/Icon/Icon';

import Button from '~/components/Button';
import Footer from './Footer/Footer';
const cx = classNames.bind(style);

function GetCoin() {
  return (
    <div className={cx('get-coin')}>
      <div className={cx('get-coin-content')}>
        <div className={cx('get-coin-body')}>
          <div className={cx('get-coin-header')}>
            <div className={cx('header-top')}>
              <span className={cx('header-top-left')}>Get Coins</span>
              <span className={cx('header-top-right')}>View transaction history </span>
            </div>
            <div className={cx('header-bottom')}>
              <div className={cx('header-bt-body')}>
                <div className={cx('header-bottom-img')}>
                  <img src="/media/imgAccount/DLPH-hoaa.png" alt="avatar" />
                </div>
                <div className={cx('header-bottom-info')}>
                  <div className={cx('info-user')}>
                    <p>Đào Lê Phương Hoa</p>
                  </div>
                  <div className={cx('info-coin')}>
                    <CoinTikTokGold />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetCoin;
