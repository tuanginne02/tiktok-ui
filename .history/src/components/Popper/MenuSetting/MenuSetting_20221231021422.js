import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import classNames from 'classnames/bind';
import style from './MenuSetting.module.scss';
import HeaderLanguage from './HeaderLanguage.js';
import { useState } from 'react';
import PropTypes from 'prop-types';

const cx = classNames.bind(style);
const defaultFn = () => {};

function MenuSetting({ children, items = [], onChange = defaultFn, hideOnClick = false }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.chidren;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              console.log(item.chidren);
              setHistory((prev) => [...prev, item.chidren]);
              return;
            } else {
              onChange(item); 
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      placement="bottom-end"
      delay={[0, 700]}
      // animation="scale"
      // visible
      hideOnClick={hideOnClick}
      interactive
      render={(attrs) => (
        <div className={cx('wrapper')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {history.length > 1 && (
              <HeaderLanguage
                title={current.title}
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            <div className={cx('menu-scroll')}> {renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
      onHide={() => {
        setHistory((prev) => prev.slice(0, 1));
      }}
    >
      {children}
    </Tippy>
  );
}
MenuSetting.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  onChange: PropTypes.func,
  hideOnClick: PropTypes.func,
};

export default MenuSetting;
