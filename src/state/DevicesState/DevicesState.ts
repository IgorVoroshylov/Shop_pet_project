import { action, makeObservable, observable } from 'mobx';

export default class DevicesState {
  goodsList: Array<GoodsItemType> = [];

  isLoading = false;

  error = '';

  // сортировка по цене и имени, и поиск по букве
  sortValue = 'id';

  query = '';

  goToTopFlag = true; // для того чтоб при изменении параметров поиска, список не спускался вниз, а оставался наверху

  searchType = '';

  searchBrand = '';

  constructor() {
    makeObservable(this, {
      goodsList: observable,
      isLoading: observable,
      error: observable,
      goToTopFlag: observable,

      // сортировка по цене и имени, и поиск по букве
      sortValue: observable,
      query: observable,

      // сортировка по типу техники и бренду
      searchType: observable,
      searchBrand: observable,

      setGoodsList: action,
      setIsLoading: action,
      setError: action,
      setGoTopFlag: action,

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

  setGoTopFlag = (flag: boolean) => {
    this.goToTopFlag = flag;
  };

  removeItem = (id: string) => {
    this.goodsList = this.goodsList.filter((item) => item.id !== id);
  };

  // сортировка по цене и имени, и поиск по букве
  setSortValue = (value: string) => {
    sessionStorage.setItem('sortValue', value);
    this.setGoTopFlag(false); // для того чтоб при изменении параметров поиска, список не спускался вниз, а оставался наверху
    this.sortValue = value;
  };

  setQuery = (query: string) => {
    this.query = query;
    this.setGoTopFlag(false);
  };

  // сортировка по типу и бренду
  setSearchType = (type: string) => {
    sessionStorage.setItem('searchType', type);
    this.setGoTopFlag(false);
    this.searchType = type;
  };

  setSearchBrand = (brand: string) => {
    sessionStorage.setItem('searchBrand', brand);
    this.setGoTopFlag(false);
    this.searchBrand = brand;
  };
}
