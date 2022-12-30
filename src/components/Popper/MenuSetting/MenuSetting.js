import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import classNames from 'classnames/bind';
import style from './MenuSetting.module.scss';
import HeaderLanguage from './HeaderLanguage.js';
import { useState } from 'react';

const cx = classNames.bind(style);
const defaultFn = () => {};

function MenuSetting({ children, items = [], onChange = defaultFn }) {
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
      interactive
      render={(attrs) => (
        <div className={cx('wrapper')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {history.length > 1 && (
              <HeaderLanguage
                title="Language"
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            {renderItems()}
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

export default MenuSetting;
