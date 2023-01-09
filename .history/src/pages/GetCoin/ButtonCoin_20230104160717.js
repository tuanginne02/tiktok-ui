import classNames from 'classnames/bind';
import style from './GetCoin.module.scss';

const cx = classNames.bind(style);

function ButtonCoin() {
  return (
  <div>
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
}
