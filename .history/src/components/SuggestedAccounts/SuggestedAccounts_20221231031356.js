import classNames from 'classnames/bind';
import styles from './SuggestedAccount.moule.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function SuggestedAccounts({ data, lable, lablePreview }) {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('lable')}>{lable}</p>
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <p className=
      <p className={cx('lable-preview')}>{lablePreview}</p>
      <AccountPreview />
    </div>
  );
}

SuggestedAccounts.propTypes = {
  data: PropTypes.object,
  lable: PropTypes.string,
};
export default SuggestedAccounts;
