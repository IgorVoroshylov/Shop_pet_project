import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useFela } from 'react-fela';
import { SearchInput, Select, SelectContainer } from '../Main.style';
import useStore from '../../../hooks/useStore';

const Searchform: React.FC = () => {
  const { css } = useFela();
  const { brands, types, getBrands, getTypes } = useStore('AppState');
  const {
    query,
    sortType,
    searchType,
    searchBrand,
    setSortValue,
    setQuery,
    setSearchType,
    setSearchBrand,
  } = useStore('DeviceState');

  useEffect(() => {
    getBrands();
    getTypes();
  }, [getBrands, getTypes]);

  const resetSearch = () => {
    setSortValue('');
    setSearchType('');
    setSearchBrand('');
  };

  return (
    <div>
      <div>
        <input
          className={css(SearchInput)}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
        />
      </div>

      <div className={css(SelectContainer)}>
        <select
          className={css(Select)}
          value={sortType}
          onChange={(e) => setSortValue(e.target.value)}
        >
          <option value="id">отсортировать</option>
          <option value="name">имя</option>
          <option value="price">цена</option>
        </select>

        <select
          className={css(Select)}
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="">type</option>
          {types.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>

        <select
          className={css(Select)}
          value={searchBrand}
          onChange={(e) => setSearchBrand(e.target.value)}
        >
          <option value="">brand</option>
          {brands.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>

        <button onClick={resetSearch} className="btn waves-effect waves-light">
          Сбросить фильтр
        </button>
      </div>
    </div>
  );
};

export default observer(Searchform);
