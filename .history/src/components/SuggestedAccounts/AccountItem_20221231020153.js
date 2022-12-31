import classNames from 'classnames/bind';
import styles from './SuggestedAccount.moule.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function AccountItem() {
  return <div className={cx('account-item')}>Account Item</div>;
}

AccountItem.propTypes = {};
export default AccountItem;
