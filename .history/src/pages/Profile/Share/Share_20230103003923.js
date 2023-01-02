import classNames from 'classnames/bind';

import Button from '~/components/Button';
import styles from './Share.module.scss';
import {Embed, Facebook, WhatsApp, Twitter, CopyLink, LinkedIn, RE} from '~/components/Icon'

const cx = classNames.bind(styles);

function Share() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>

      </div>
      <div className={cx('embed')}></div>
      <div className={cx('facebok')}></div>
      <div className={cx('whatsapp')}></div>
      <div className={cx('twitter')}></div>
      <div className={cx('coppy-link')}></div>
      <div className={cx('linked-in')}></div>
      <div className={cx('reddit')}></div>
      <div className={cx('telegram')}></div>
      <div className={cx('email')}></div>

    </div>
  );
}

export default Share;
