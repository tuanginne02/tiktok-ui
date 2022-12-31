import classNames from 'classnames/bind';
import styles from './AccountItems.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


import Image from '../Image';

const cx = classNames.bind(styles);

function AccountsItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
      <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>{data.nickname}</span>
          {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
        </p>
        <span className={cx('username')}>{data.full_name}</span>
      </div>
    </Link>
  );
}
AccountsItem.propTypes = {
  
}

export default AccountsItem;
