import { observer } from 'mobx-react';
import React, { useEffect, useLayoutEffect } from 'react';
import { useFela } from 'react-fela';
import { TopArrow } from '../../Assets/Icon';
import { Preloader } from '../../components';
import useStore from '../../hooks/useStore';
import ItemCard from './ItemCard';
import {
  EmptyList,
  GoToTopButton,
  MainListRule,
  TopSvgSizeRule,
} from './Main.style';

import SearchForm from './SearchForm';

const Main: React.FC = () => {
  const { css, theme } = useFela();
  const { isAdmin } = useStore('UserState');
  const {
    goodsList,
    isLoading,
    sortType,
    query,
    searchType,
    searchBrand,
    getDevices,
  } = useStore('DeviceState');

  // function logit() {
  //   console.log(window.pageYOffset);
  // }

  const scrollToCoord = (w: any) => {
    window.scrollTo(0, w);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  useLayoutEffect(() => {
    return () => {
      sessionStorage.setItem('hight', JSON.stringify(window.pageYOffset));
    };
  }, []);

  useEffect(() => {
    const w = sessionStorage.getItem('hight');
    scrollToCoord(w);

    //window.addEventListener('scroll', logit);
    //return () => {
    //window.removeEventListener('scroll', logit);
    //};
  });

  useEffect(() => {
    //getDevices(searchType, searchBrand, sortType, query);
  }, [searchType, searchBrand, sortType, getDevices, query]);

  return (
    <div className={css()}>
      <SearchForm />

      {isLoading ? (
        <Preloader />
      ) : (
        <div className={css(MainListRule)}>
          {goodsList.map((item) => (
            <ItemCard key={item.id} item={item} isAdmin={isAdmin} />
          ))}
        </div>
      )}

      {!goodsList.length && (
        <div className={css(EmptyList)}>Товаров не найдено</div>
      )}
      <button
        className={css(GoToTopButton(theme as ThemeType))}
        onClick={scrollToTop}
      >
        <TopArrow styleForIcon={TopSvgSizeRule} />
      </button>
    </div>
  );
};

export default observer(Main);
