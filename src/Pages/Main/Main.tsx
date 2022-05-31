import { observer } from 'mobx-react';
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { useFela } from 'react-fela';
import { Preloader } from '../../components';
import useStore from '../../hooks/useStore';
import ItemCard from './ItemCard';
import TopButton from './TopButton';
import { EmptyList, MainListRule } from './Main.style';
import SearchForm from './SearchForm';
import { useSearchParams } from 'react-router-dom';

const Main: React.FC = () => {
  const { css } = useFela();
  const { isAdmin } = useStore('UserState');

  const [, setSearchParams] = useSearchParams();

  const {
    goodsList,
    isLoading,
    goToTopFlag,
    sortValue,
    query,
    searchType,
    searchBrand,
    getDevices,
    setGoTopFlag,
  } = useStore('DeviceState');

  // for intersection observer
  const positionElement = useRef<HTMLDivElement>(null);

  //delete this later!
  //function logit() {
  //  console.log(window.pageYOffset);
  //}

  //go to memory position
  const scrollToCoord = (w: any) => {
    window.scrollTo(0, w);
  };

  //go to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  useLayoutEffect(() => {
    return () => {
      setGoTopFlag(true);
      sessionStorage.setItem('hight', JSON.stringify(window.pageYOffset));
    };
  }, [setGoTopFlag]);

  // поместили scrollToCoord() в useEffect, потому что эффекты выполняются после каждой операции рендеринга, если вызвать вне useEffect, не сработает должным образом
  useEffect(() => {
    // if для того, чтоб при изменении параметров поиска, список не спускался вниз, а оставался наверху если в памяти есть колличество "px" скролла
    if (goToTopFlag) {
      const w = sessionStorage.getItem('hight');
      scrollToCoord(w);
    }

    //window.addEventListener('scroll', logit);
    //return () => {
    // window.removeEventListener('scroll', logit);
    //};
  });

  useEffect(() => {
    const params: ParamsbjectTypes = {};
    if (query) params.name_like = `^${query}`;
    if (sortValue) params._sort = sortValue;
    if (searchBrand) params.brand = searchBrand;
    if (searchType) params.type = searchType;
    params._order = 'ASC';
    setSearchParams(params);

    getDevices(searchType, searchBrand, sortValue, query);
  }, [searchType, searchBrand, sortValue, getDevices, query, setSearchParams]);

  return (
    <div className={css()}>
      <SearchForm />

      <div ref={positionElement}></div>

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

      <TopButton scrollToTop={scrollToTop} positionElement={positionElement} />
    </div>
  );
};

export default observer(Main);

type ParamsbjectTypes = {
  name_like?: string;
  _sort?: string;
  type?: string;
  brand?: string;
  _order?: string;
};
