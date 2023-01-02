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
      <div className={cx('')}>
        <Embed />
        <Button>Embed</Button>
      </div>
      <div className={cx('ok')}>
        <Facebook />
        <Button>Share to Facebook</Button>
      </div>
      <div className={cx('app')}>
        <WhatsApp />
        <Button>Share to WhatsApp</Button>
      </div>
      <div className={cx('er')}>
        <Twitter />
        <Button>Share to Twitter</Button>
      </div>
      <div className={cx('-link')}>
        <CopyLink />
        <Button>Copy link</Button>
      </div>
      <div className={cx('d-in')}>
        <LinkedIn />
        <Button>Share to LinkedIn</Button>
      </div>
      <div className={cx('t')}>
        <Reddit />
        <Button>Share to Reddit</Button>
      </div>
      <div className={cx('ram')}>
        <Telegram />
        <Button>Share to Telegram</Button>
      </div>
      <div className={cx('')}>
        <Email />
        <Button>Share to</Button>
      </div>
    </div>
  );
}

export default Share;
