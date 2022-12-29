import classNames from 'classnames/bind';
import styles from './MenuSetting.module.scss';
import Button from '~/components/Button';
const cx = classNames.bind(styles);

function MenuItem({ data, onClick}) {
  return (
    <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to} rightIcon={(data.icon2)} onClick={onClick}>
      {data.title}
    </Button>
  );
}

export default MenuItem;

