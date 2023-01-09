import React, { useState } from 'react';

import classNames from 'classnames/bind';
import style from './GetCoin.module.scss';
import { CoinTikTokGold } from '~/components/Icon/Icon';

import Button from '~/components/Button';
const cx = classNames.bind(style);

function ButtonCoin({ number, money }) {
  const [isChangeColor, setIsChangeColor] = useState(false);

  const handleClickChangeColor = () => {
    setIsChangeColor((current) => ())
  }
  return (
    <div className={cx('btn-coins-items')}>
      <div className={cx('coins-item')}>
        <Button className={cx('btn-layout')}>
          <div className={cx('coins')}>
            <CoinTikTokGold />
            <span>70</span>
          </div>
          <div className={cx('money')}>
            <span>₫ 19,100</span>
          </div>
        </Button>
      </div>
      <div className={cx('coins-item')}>
        <Button className={cx('btn-layout')}>
          <div className={cx('coins')}>
            <CoinTikTokGold />
            <span>350</span>
          </div>
          <div className={cx('money')}>
            <span>₫ 95,500</span>
          </div>
        </Button>
      </div>
      <div className={cx('coins-item')}>
        <Button className={cx('btn-layout')}>
          <div className={cx('coins')}>
            <CoinTikTokGold />
            <span>700</span>
          </div>
          <div className={cx('money')}>
            <span>₫ 191,000</span>
          </div>
        </Button>
      </div>
      <div className={cx('coins-item')}>
        <Button className={cx('btn-layout')}>
          <div className={cx('coins')}>
            <CoinTikTokGold />
            <span>1,400</span>
          </div>
          <div className={cx('money')}>
            <span>₫ 382,000</span>
          </div>
        </Button>
      </div>
      <div className={cx('coins-item')}>
        <Button className={cx('btn-layout')}>
          <div className={cx('coins')}>
            <CoinTikTokGold />
            <span>3,500</span>
          </div>
          <div className={cx('money')}>
            <span>₫ 955,000</span>
          </div>
        </Button>
      </div>
      <div className={cx('coins-item')}>
        <Button className={cx('btn-layout')}>
          <div className={cx('coins')}>
            <CoinTikTokGold />
            <span>7,000</span>
          </div>
          <div className={cx('money')}>
            <span>₫ 1,910,000</span>
          </div>
        </Button>
      </div>
      <div className={cx('coins-item')}>
        <Button className={cx('btn-layout')}>
          <div className={cx('coins')}>
            <CoinTikTokGold />
            <span>17,500</span>
          </div>
          <div className={cx('money')}>
            <span>₫ 4,775,000</span>
          </div>
        </Button>
      </div>
      <div className={cx('coins-item')}>
        <Button className={cx('btn-layout')}>
          <div className={cx('coins-cus')}>
            <CoinTikTokGold />
            <span>Custom</span>
          </div>
          <div className={cx('money-cus')}>
            <span>Large amount supported</span>
          </div>
        </Button>
      </div>
    </div>
  );
}

export default ButtonCoin;
