import classNames from 'classnames/bind';

import Button from '~/components/Button';
import styles from './Share.module.scss';
import {
  Embed,
  Facebook,
  WhatsApp,
  Twitter,
  CopyLink,
  LinkedIn,
  Reddit,
  Telegram,
  Email,
} from '~/components/Icon/Icon';

const cx = classNames.bind(styles);

function Share() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}></div>
      <div className={cx('embed')}>
        <Embed />
        <Button>Embed</Button>
      </div>
      <div className={cx('facebok')}>
        <Facebook />
        <Button>Embed</Button>

      </div>
      <div className={cx('whatsapp')}>
        <WhatsApp />
        <Button>Embed</Button>

      </div>
      <div className={cx('twitter')}>
        <Twitter />
        <Button>Embed</Button>

      </div>
      <div className={cx('coppy-link')}>
        <CopyLink />
      </div>
      <div className={cx('linked-in')}>
        <LinkedIn />
      </div>
      <div className={cx('reddit')}>
        <Reddit />
      </div>
      <div className={cx('telegram')}>
        <Telegram />
      </div>
      <div className={cx('email')}>
        <Email />
      </div>
    </div>
  );
}

export default Share;
