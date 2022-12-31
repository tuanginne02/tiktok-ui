import classNames from 'classnames/bind';
import styles from './SuggestedAccount.moule.scss';

const cx = classNames.bind(styles);

function SuggestedAccounts({ data }) {
//   const classes = cx('wrapper', {
//     separate: data.separate,
//   });
  return (
    <div className={cx('wrapper'}>
      <h2>Hello</h2>
    </div>
  );
}

export default SuggestedAccounts;
