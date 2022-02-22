import { observer } from 'mobx-react';
import React, { useEffect, useLayoutEffect } from 'react';
import { useFela } from 'react-fela';
import { Preloader } from '../../components';
import useStore from '../../hooks/useStore';
import ItemCard from './ItemCard';
import { EmptyList, MainListRule } from './Main.style';

import SearchForm from './SearchForm';

const Main: React.FC = () => {
  const { css } = useFela();
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

  const scroll = (w: any) => {
    window.scrollTo(0, w);
    //window.scrollTo({ top: 400, left: 0, behavior: 'smooth' });
  };

  useLayoutEffect(() => {
    return () => {
      sessionStorage.setItem('hight', JSON.stringify(window.pageYOffset));
    };
  }, []);

  useEffect(() => {
    getDevices(searchType, searchBrand, sortType, query);
  }, [searchType, searchBrand, sortType, getDevices, query]); //!

  return (
    <div>
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
    </div>
  );
};

export default observer(Main);

// useEffect(() => {
//   const w = sessionStorage.getItem('hight');
//   scroll(w);

//   //window.addEventListener('scroll', logit);
//   //return () => {
//   //window.removeEventListener('scroll', logit);
//   //};
// });
