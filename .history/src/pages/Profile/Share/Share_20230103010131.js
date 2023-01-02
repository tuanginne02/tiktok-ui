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
      <div className={cx('icon-share')}>
        <Embed />
        <Button>Embed</Button>
      </div>
      <div className={cx('icon-shareok')}>
        <Facebook />
        <Button>Share to Facebook</Button>
      </div>
      <div className={cx('icon-shareapp')}>
        <WhatsApp />
        <Button>Share to WhatsApp</Button>
      </div>
      <div className={cx('icon-shareer')}>
        <Twitter />
        <Button>Share to Twitter</Button>
      </div>
      <div className={cx('icon-share-link')}>
        <CopyLink />
        <Button>Copy link</Button>
      </div>
      <div className={cx('icon-shared-in')}>
        <LinkedIn />
        <Button>Share to LinkedIn</Button>
      </div>
      <div className={cx('icon-sharet')}>
        <Reddit />
        <Button>Share to Reddit</Button>
      </div>
      <div className={cx('icon-shareram')}>
        <Telegram />
        <Button>Share to Telegram</Button>
      </div>
      <div className={cx('icon-share')}>
        <Email />
        <Button>Share to Email</Button>
      </div>
    </div>
  );
}

export default Share;
