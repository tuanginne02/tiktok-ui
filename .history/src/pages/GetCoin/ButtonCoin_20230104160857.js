import classNames from 'classnames/bind';
import style from './GetCoin.module.scss';
import { CoinTikTokGold } from '~/components/Icon/Icon';

import Button from '~/components/Button';
const cx = classNames.bind(style);

function ButtonCoin({number,}) {
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
  );
}

export default ButtonCoin;
