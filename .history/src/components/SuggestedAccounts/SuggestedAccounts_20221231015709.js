import classNames from 'classnames/bind';
import styles from './SuggestedAccount.moule.scss';

const cx = classNames.bind(styles);

function SuggestedAccounts({ data, lable }) {
//   const classes = cx('wrapper', {
//     separate: data.separate,
//   });
  return (
    <div className={cx('wrapper')}>
      <p className={lable}></p>
    </div>
  );
}

export default SuggestedAccounts;
