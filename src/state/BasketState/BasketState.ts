import { action, makeObservable, observable, computed } from 'mobx';

export default class BasketState {
  basketItemList: Array<BasketItem> = [];

  isLoading = true;

  error = '';

  constructor() {
    makeObservable(this, {
      basketItemList: observable,
      isLoading: observable,
      error: observable,
      setBasketItemList: action,
      removeBasketItem: action,
      addItemBasket: action,
      setIsLoading: action,
      setError: action,
      ItemListSize: computed,
      TotalCost: computed,
      BasketIdList: computed,
    });
  }

  setBasketItemList = (list: Array<BasketItem>) => {
    this.basketItemList = list;
  };

  removeBasketItem = (id: string) => {
    this.basketItemList = this.basketItemList.filter((item) => item.id !== id);
  };

  addItemBasket = (item: BasketItem) => {
    this.basketItemList = [...this.basketItemList, item];
  };

  setIsLoading = (bool: boolean) => {
    this.isLoading = bool;
  };

  setError = (err: string) => {
    this.error = err;
  };

  get ItemListSize() {
    return this.basketItemList.length;
  }

  get TotalCost() {
    return this.basketItemList.reduce(
      (accum, item) => (accum += item.price),
      0,
    );
  }

  get BasketIdList() {
    return this.basketItemList.map((item) => item.id);
  }
}
