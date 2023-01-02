import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

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
    <div className={cx('row-items')}>
          <div className={cx('icon-share')}>
            <Embed />
            <Button className={cx('btn-share')}>Embed</Button>
          </div>
    </div>
      <div className={cx('icon-share')}>
        <Facebook />
        <Button className={cx('btn-share')}>Share to Facebook</Button>
      </div>
      <div className={cx('icon-share')}>
        <WhatsApp />
        <Button className={cx('btn-share')}>Share to WhatsApp</Button>
      </div>
      <div className={cx('icon-share')}>
        <Twitter />
        <Button className={cx('btn-share')}>Share to Twitter</Button>
      </div>
      <div className={cx('icon-share')}>
        <CopyLink />
        <Button className={cx('btn-share')}>Copy link</Button>
      </div>
      <div className={cx('icon-share')}>
        <LinkedIn />
        <Button className={cx('btn-share')}>Share to LinkedIn</Button>
      </div>
      <div className={cx('icon-share')}>
        <Reddit />
        <Button className={cx('btn-share')}>Share to Reddit</Button>
      </div>
      <div className={cx('icon-share')}>
        <Telegram />
        <Button className={cx('btn-share')}>Share to Telegram</Button>
      </div>
      <div className={cx('icon-share')}>
        <Email />
        <Button className={cx('btn-share')}>Share to Email</Button>
      </div>
      <div className={cx('icon-down')}>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
    </div>
  );
}

export default Share;
