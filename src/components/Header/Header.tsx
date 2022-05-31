import { observer } from 'mobx-react';
import React from 'react';
import { useFela } from 'react-fela';
import { Link } from 'react-router-dom';
import { BasketIcon, DarkModeIcon, LightModeIcon } from '../../Assets/Icon';
import useStore from '../../hooks/useStore';
import {
  ColorModeToggle,
  ColorModeLable,
  HeaderButton,
  HeaderWrapper,
  HeaderLogo,
  BasketItemCount,
  BasketIconWrapper,
  svgSizeRule,
} from './Header.style';

const Header: React.FC = () => {
  const { css } = useFela();
  const { setThemeFlag } = useStore('AppState');
  const { isAdmin } = useStore('UserState');
  const { ItemListSize } = useStore('BasketState');

  const changeTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setThemeFlag('dark');
    } else {
      setThemeFlag('light');
    }
  };

  return (
    <nav className={`green ligten-2 ${css(HeaderWrapper)}`}>
      <div className="nav-wrapper">
        <Link to="/" className={`brand-logo ${css(HeaderLogo)}`}>
          Innovecs Shop
        </Link>

        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li className={css(ColorModeToggle)}>
            <div className="switch">
              <label className={css(ColorModeLable)}>
                <LightModeIcon />
                <input type="checkbox" onChange={changeTheme} />
                <span className="lever"></span>
                <DarkModeIcon />
              </label>
            </div>
          </li>

          <li className={css(BasketIconWrapper)}>
            <Link to="/basket">
              {ItemListSize !== 0 && (
                <div className={css(BasketItemCount)}>{ItemListSize}</div>
              )}

              <BasketIcon styleForIcon={svgSizeRule} />
            </Link>
          </li>

          <li>
            {isAdmin && (
              <Link to="/admin" className={css(HeaderButton)}>
                Admin
              </Link>
            )}
          </li>
          <li className={css(HeaderButton)}>Exit</li>
        </ul>
      </div>
    </nav>
  );
};

export default observer(Header);
