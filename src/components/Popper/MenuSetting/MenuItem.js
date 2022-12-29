import classNames from 'classnames/bind';
import styles from './MenuSetting.module.scss';
import Button from '~/components/Button';
const cx = classNames.bind(styles);

function MenuItem({ data}) {
  return (
    <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to} rightIcon={(data.icon2)}>
      {data.title}
    </Button>
  );
}

export default MenuItem;

