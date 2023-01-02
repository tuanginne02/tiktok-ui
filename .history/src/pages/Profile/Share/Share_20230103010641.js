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
        <Button className={cx('b')}>Embed</Button>
      </div>
      <div className={cx('icon-share')}>
        <Facebook />
        <Button className={cx('b')}>Share to Facebook</Button>
      </div>
      <div className={cx('icon-share')}>
        <WhatsApp />
        <Button className={cx('b')}>Share to WhatsApp</Button>
      </div>
      <div className={cx('icon-share')}>
        <Twitter />
        <Button className={cx('b')}>Share to Twitter</Button>
      </div>
      <div className={cx('icon-share')}>
        <CopyLink />
        <Button className={cx('b')}>Copy link</Button>
      </div>
      <div className={cx('icon-share')}>
        <LinkedIn />
        <Button className={cx('b')}>Share to LinkedIn</Button>
      </div>
      <div className={cx('icon-share')}>
        <Reddit />
        <Button className={cx('b')}>Share to Reddit</Button>
      </div>
      <div className={cx('icon-share')}>
        <Telegram />
        <Button className={cx('b')}>Share to Telegram</Button>
      </div>
      <div className={cx('icon-share')}>
        <Email />
        <Button className={cx('b')}>Share to</Button>
      </div>
    </div>
  );
}

export default Share;
