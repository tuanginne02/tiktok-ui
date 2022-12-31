import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import style from './MenuSetting.module.scss'

const cx = classNames.bind(style);

function HeaderLanguage({ title, onBack }) {
  return (
    <header className={cx('header')}>
      <button className={cx('back-btn')} onClick={onBack}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <h4 className={cx('header-title')}>{title}</h4>
    </header>
  );
}
HeaderLanguage.propTypes = {
  title: PropTypes.string,
  onBack: PropTypes.func

}
export default HeaderLanguage;
