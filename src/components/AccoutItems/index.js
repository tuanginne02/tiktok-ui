import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import style from './AccoutItems.module.scss';

const cx = classNames.bind(style);

function AccoutItems() {
  return (
    <div className={cx('wrapper')}>
      <img className={cx('avatar')} src="/media/imgAccount/DLPH-hoaa.png" alt="Hoaa" />
      <div className={cx('infor')}>
        <p className={cx('name')}>
          <span>hoaa.hanassii</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <span className={cx('username')}>Đào Lê Phương Hoa</span>
      </div>
    </div>
  );
}

export default AccoutItems;
