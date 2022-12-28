import classNames from 'classnames/bind';
import styles from './AccountItems.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountsItem() {
  return (
    <div className={cx('wrapper')}>
      <img className={cx('avatar')} src="/media/imgAccount/DLPH-hoaa.png" alt="Hoaa." />
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>hoaa.hanossii</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <span className={cx('username')}>Đào Lê Phương Hoa </span>
      </div>
    </div>
  );
}

export default AccountsItem;
