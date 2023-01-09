import React from 'react';
import classNames from 'classnames';
import style from './GetCoin.module.scss';

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
                        <img src="" alt="avatar" />
                    </div>
                    <div className={cx('header-bottom-info')}>
                        <div className={cx('info-user')}>
                            <p>Đào Lê Phương Hoa</p>
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
