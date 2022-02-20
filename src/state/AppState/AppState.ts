import { action, makeObservable, observable } from 'mobx';

export default class AppState {
  themeFlag: 'light' | 'dark' = 'light';

  error = '';

  brands: Array<BrandAndType> = [];

  types: Array<BrandAndType> = [];

  successLoadBrand = false;

  successLoadType = false;

  constructor() {
    makeObservable(this, {
      themeFlag: observable,
      error: observable,
      brands: observable,
      types: observable,
      successLoadBrand: observable,
      successLoadType: observable,
      setThemeFlag: action,
      setError: action,

      setBrands: action,
      addBrand: action,
      setSuccessLoadBrand: action,

      setTypes: action,
      addType: action,
      setSuccessLoadType: action,
    });
  }

  setThemeFlag = (flag: 'light' | 'dark') => {
    this.themeFlag = flag;
  };

  setError = (err: string) => {
    this.error = err;
  };

  // Brend
  setBrands = (list: Array<BrandAndType>) => {
    this.brands = list;
  };

  addBrand = (brend: BrandAndType) => {
    this.brands = [...this.brands, brend];
  };

  setSuccessLoadBrand = (bool: boolean) => {
    this.successLoadBrand = bool;
  };

  setSuccessLoadBrand2 = () => {
    setTimeout(this.setSuccessLoadBrand, 3000, false);
  };

  // Type
  setTypes = (list: Array<BrandAndType>) => {
    this.types = list;
  };

  addType = (type: BrandAndType) => {
    this.types = [...this.types, type];
  };

  setSuccessLoadType = (bool: boolean) => {
    this.successLoadType = bool;
  };

  setSuccessLoadType2 = () => {
    setTimeout(this.setSuccessLoadType, 3000, false);
  };
}
