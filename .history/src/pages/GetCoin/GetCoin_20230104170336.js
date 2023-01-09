import React from 'react';
import classNames from 'classnames/bind';
import style from './GetCoin.module.scss';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp, faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { CoinTikTokGold, InforError } from '~/components/Icon/Icon';

import Button from '~/components/Button';
import ButtonCoin from './ButtonCoin';
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
              <p>Recharge:</p>
              <span>Save up to 24% compared to in-app purchase</span>
              <Tippy
                content="When you buy Coins in TikTok app, a higher channel fee has to be paid. Hence, you can buy Coins at a cheaper price here."
                trigger="click"
              >
                <div>
                  <InforError className={cx('error-title')} />
                </div>
              </Tippy>
            </div>
            <div className={cx('content-body')}>
              <div className={cx('btn-coins')}>
                <ButtonCoin />
              </div>
              <div className={cx('payment')}>
                <div className={cx('payment-method')}>
                  <span>Payment method</span>
                  <img className={cx('img-pay')} src="/media/payment/visa.svg" alt="" />
                  <img className={cx('img-pay')} src="/media/payment/mastercard.svg" alt="" />
                  <img className={cx('img-pay')} src="/media/payment/diners.svg" alt="" />
                  <img className={cx('img-pay')} src="/media/payment/discover.svg" alt="" />
                  <img className={cx('img-pay')} src="/media/payment/card_american.svg" alt="" />
                  <img className={cx('img-pay')} src="/media/payment/momo.png" alt="" />
                  <img className={cx('img-pay')} src="/media/payment/zalopay.svg" alt="" />
                  <img className={cx('img-pay')} src="/media/payment/border.png" alt="" />
                </div>
              </div>
              <div className=
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetCoin;
