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
        <Button>Share to Facebook</Button>
      </div>
      <div className={cx('whatsapp')}>
        <WhatsApp />
        <Button>Share to WhatsApp</Button>
      </div>
      <div className={cx('twitter')}>
        <Twitter />
        <Button>Share to Twitter</Button>
      </div>
      <div className={cx('coppy-link')}>
        <CopyLink />
        <Button>Copy link</Button>
      </div>
      <div className={cx('linked-in')}>
        <LinkedIn />
        <Button>Share to LinkedIn</Button>
      </div>
      <div className={cx('reddit')}>
        <Reddit />
        <Button>Share to Reddit</Button>
      </div>
      <div className={cx('telegram')}>
        <Telegram />
        <Button>Share to Telegram</Button>
      </div>
      <div className={cx('email')}>
        <Email />
        <Button>Share to Email</Button>
      </div>
    </div>
  );
}

export default Share;
