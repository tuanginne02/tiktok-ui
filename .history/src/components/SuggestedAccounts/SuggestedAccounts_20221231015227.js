import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';


const cx = classNames.bind(styles);



function SuggestedAccounts({data}) {
    const classes = cx('wrapper-item', {
        separate: data.separate,
      });
  return (
    <div>
      <h2>Hello</h2>
    </div>
  );
}

export default SuggestedAccounts;
