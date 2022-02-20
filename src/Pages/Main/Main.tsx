import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
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
  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
  }

  const scrollTop = () => {
    window.scrollTo({ top: 200, left: 0, behavior: 'smooth' });
  };

  console.log(scrollY);

  useEffect(() => {
    scrollTop();
    window.addEventListener('scroll', logit);

    return () => {
      //sessionStorage.setItem('hight', scrollY);
      window.removeEventListener('scroll', logit);
    };
  }, []);

  useEffect(() => {
    getDevices(searchType, searchBrand, sortType, query);
  }, [searchType, searchBrand, sortType, getDevices, query]);

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
