import { action, makeObservable, observable, computed } from 'mobx';

export default class DevicesState {
  goodsList: Array<GoodsItemType> = [];

  isLoading = false;

  error = '';

  // сортировка по цене и имени, и поиск по букве
  sortType = 'id';

  query = '';

  searchType = '';

  searchBrand = '';

  constructor() {
    makeObservable(this, {
      goodsList: observable,
      isLoading: observable,
      error: observable,

      // сортировка по цене и имени, и поиск по букве
      sortType: observable,
      query: observable,

      // сортировка по типу техники и бренду
      searchType: observable,
      searchBrand: observable,

      setGoodsList: action,
      setIsLoading: action,
      setError: action,

      removeItem: action,
      setSortValue: action,
      setQuery: action,
      setSearchType: action,
      setSearchBrand: action,
    });
  }

  setIsLoading = (bool: boolean) => {
    this.isLoading = bool;
  };

  setGoodsList = (itemsList: Array<GoodsItemType>) => {
    this.goodsList = itemsList;
  };

  setError = (error: string) => {
    this.error = error;
  };

  removeItem = (id: string) => {
    this.goodsList = this.goodsList.filter((item) => item.id !== id);
  };

  // сортировка по цене и имени, и поиск по букве
  setSortValue = (value: string) => {
    sessionStorage.setItem('sortValue', value);
    this.sortType = value;
  };

  setQuery = (query: string) => {
    this.query = query;
  };

  // сортировка по типу и бренду
  setSearchType = (type: string) => {
    sessionStorage.setItem('searchType', type);
    this.searchType = type;
  };

  setSearchBrand = (brand: string) => {
    sessionStorage.setItem('searchBrand', brand);
    this.searchBrand = brand;
  };
}
