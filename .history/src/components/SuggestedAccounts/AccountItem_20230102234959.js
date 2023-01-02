import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccount.moule.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
  const renderPreview = (props) => {
    return (
      <div className={cx('preview')} tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview /> 
        </PopperWrapper>
      </div>
    );
  };
  return (
    //visible
    <Tippy content="Share" interactive placement="bottom" delay={[800, 0]} render={renderPreview}>
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
export default AccountItem;
