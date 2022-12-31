import classNames from 'classnames/bind';
import styles from './SuggestedAccount.moule.scss';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
   <Tippy 
    interactive
    placement="bottom"
    delay={[800, 0]}
    render=(() =>)
   
   >
      <div>
        <div className={cx('account-item')}>
          <img className={cx('avatar')} src="/media/userHoaa.jpg" alt="" />
          <div className={cx('item-info')}>
            <p className={cx('nickname')}>
              <strong>hoaa.hanassii</strong>
              <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
            <p className={cx('name')}>Đào Lê Phương Hoa</p>
          </div>
        </div>
        <div className={cx('account-item')}>
          <img className={cx('avatar')} src="/media/userFl/lebong.jpg" alt="" />
          <div className={cx('item-info')}>
            <p className={cx('nickname')}>
              <strong>lebong95</strong>
              <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
            <p className={cx('name')}>Lê Bống</p>
          </div>
        </div>
        <div className={cx('account-item')}>
          <img className={cx('avatar')} src="/media/userFl/sontung.jpg" alt="" />
          <div className={cx('item-info')}>
            <p className={cx('nickname')}>
              <strong>tiger05094</strong>
              <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
            <p className={cx('name')}>Sơn Tùng M-TP</p>
          </div>
        </div>
      </div>
   </Tippy>
  );
}
AccountItem.propTypes = {};
export default AccountItem;
