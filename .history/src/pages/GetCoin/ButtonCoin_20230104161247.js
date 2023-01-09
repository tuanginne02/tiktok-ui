import classNames from 'classnames/bind';
import style from './GetCoin.module.scss';
import { CoinTikTokGold } from '~/components/Icon/Icon';

import Button from '~/components/Button';
const cx = classNames.bind(style);

function ButtonCoin({ number, money }) {
  return (
    <div>
      <div className={cx('btn-coins-items')}>
        <div className={cx('coins-item')}>
          <Button>
            <div className="coins">
              <CoinTikTokGold />
              <span>70</span>
            </div>
            <div className={cx('money')}>
              <span>₫ 19,100</span>
            </div>
          </Button>
        </div>
        <div className={cx('coins-item')}>
          <Button>
            <div className="coins">
              <CoinTikTokGold />
              <span>350</span>
            </div>
            <div className={cx('money')}>
              <span>₫ 95,500</span>
            </div>
          </Button>
        </div>
        <div className={cx('coins-item')}>
          <Button>
            <div className="coins">
              <CoinTikTokGold />
              <span>700</span>
            </div>
            <div className={cx('money')}>
              <span>₫ 191,000</span>
            </div>
          </Button>
        </div>
        <div className={cx('coins-item')}>
          <Button>
            <div className="coins">
              <CoinTikTokGold />
              <span>1,400</span>
            </div>
            <div className={cx('money')}>
              <span>₫ 19,100</span>
            </div>
          </Button>
        </div>
        <div className={cx('coins-item')}>
          <Button>
            <div className="coins">
              <CoinTikTokGold />
              <span>70</span>
            </div>
            <div className={cx('money')}>
              <span>₫ 19,100</span>
            </div>
          </Button>
        </div>
        <div className={cx('coins-item')}>
          <Button>
            <div className="coins">
              <CoinTikTokGold />
              <span>70</span>
            </div>
            <div className={cx('money')}>
              <span>₫ 19,100</span>
            </div>
          </Button>
        </div>
        <div className={cx('coins-item')}>
          <Button>
            <div className="coins">
              <CoinTikTokGold />
              <span>70</span>
            </div>
            <div className={cx('money')}>
              <span>₫ 19,100</span>
            </div>
          </Button>
        </div>
        <div className={cx('coins-item')}>
          <Button>
            <div className="coins">
              <CoinTikTokGold />
              <span>70</span>
            </div>
            <div className={cx('money')}>
              <span>₫ 19,100</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ButtonCoin;
