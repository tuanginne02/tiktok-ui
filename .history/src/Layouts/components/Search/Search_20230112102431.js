import { useEffect, useState, useRef } from 'react';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderLeftTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import * as searchServices from '~/services/searchService';
import { Wrapper as PopperWrapper } from '~/components/Popper';
// import * as htppRequest from '~/utils/httpRequest';
import AccountsItem from '~/components/Accountltems/AccountItem';
import { SearchIcon } from '~/components/Icon/Icon';
import { useDebounce } from '~/hooks';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const debouncedValue = useDebounce(searchValue, 500);

  const inputRef = useRef();

  useEffect(() => {
    if (!debouncedValue.trim()) {
      setSearchResult([]);
      return;
    }
    const fetchApi = async () => {
      setLoading(true);

      const result = await searchServices.search(debouncedValue);

      setSearchResult(result);
      setLoading(false);
    };

    fetchApi();
  }, [debouncedValue]);

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };

  return (
    // Using a wrapper <div> tag around the reference element solves
    // this by creating a new parentNode context.
    <div>
      <HeaderLeftTippy
        // {...passProps}
        // appendTo={() => document.body}
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx('search-title')}>Accout</h4>
              {searchResult.map((result) => (
                <AccountsItem key={result.id} data={result} />
              ))}
            </PopperWrapper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className={cx('search')}>
          <input
            ref={inputRef}
            value={searchValue}
            spellCheck={false}
            onChange={handleChange}
            onFocus={() => setShowResult(true)}
            className={cx('search-input')}
            type="text"
            placeholder="Search accout and videos"
          />
          {!!searchValue && !loading && (
            <button className={cx('search-clear')} onClick={handleClear}>
              <FontAwesomeIcon className={cx('iconBackground')} icon={faCircleXmark} />
            </button>
          )}
          {loading && <FontAwesomeIcon className={cx('loading', 'iconBackground')} icon={faSpinner} />}
          <div className={cx('line')}></div>
          <button className={cx('search-button')} onMouseDown={(e) => e.preventDefault()}>
            <SearchIcon />
          </button>
        </div>
      </HeaderLeftTippy>
    </div>
  );
}

export default Search;
