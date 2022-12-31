import classNames from 'classnames/bind';
import styles from './SuggestedAccount.moule.scss';
import PropTypes from 'prop-types';


const cx = classNames.bind(styles);

function SuggestedAccounts({ data, lable }) {
//   const classes = cx('wrapper', {
//     separate: data.separate,
//   });
  return (
    <div className={cx('wrapper')}>
      <p className={cx('lable')}>{lable}</p>
    </div>
  );
}


export default SuggestedAccounts;
