import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './Share.module.scss';

const cx = classNames.bind(styles);

function Share() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}></div>
      <div className{cx('embed')}></div>
      <div className{cx('facebok')}></div>
      <div className{cx('whatsapp')}></div>
      <div className{cx('twitter')}></div>
      <div className{cx('coppy-link')}></div>
      <div className{cx('linked')}></div>
      <div className{cx('')}></div>
      <div className{cx('')}></div>
      <div className{cx('')}></div>

    </div>
  );
}

export default Share;
