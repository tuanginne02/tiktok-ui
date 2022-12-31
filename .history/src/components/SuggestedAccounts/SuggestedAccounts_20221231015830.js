import classNames from 'classnames/bind';
import styles from './SuggestedAccount.moule.scss';
import PropTypes from 'prop-types';


const cx = classNames.bind(styles);

function SuggestedAccounts({ data, lable }) {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('lable')}>{lable}</p>
    </div>
  );
}

SuggestedAccounts.propTypes = {
  data: PropTypes.object,
  lable: PropTypes.string,
};
export default SuggestedAccounts;
