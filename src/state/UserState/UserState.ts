import { action, computed, makeObservable, observable } from 'mobx';

export default class UserState {
  isAuth = true;

  isLoading = true;

  user: UserType | null = null;

  basketList: Array<GoodsItemType> = [];

  error = '';

  constructor() {
    makeObservable(this, {
      isAuth: observable,
      isLoading: observable,
      user: observable,
      basketList: observable,
      error: observable,
      setIsAuth: action,
      setIsLoading: action,
      setUser: action,
      setBasketList: action,
      setError: action,
      isAdmin: computed,
    });
  }

  get isAdmin() {
    return this.user?.userRole === 'admin';
  }

  setIsAuth = (bool: boolean) => {
    this.isAuth = bool;
  };

  setIsLoading = (bool: boolean) => {
    this.isLoading = bool;
  };

  setUser = (user: UserType) => {
    this.user = user;
  };

  setBasketList = (list: Array<GoodsItemType>) => {
    this.basketList = list;
  };

  setError = (err: string) => {
    this.error = err;
  };
}
