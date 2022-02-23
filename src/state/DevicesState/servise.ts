import DevicesState from './DevicesState';
import axios, { AxiosError } from 'axios';
import { reaction } from 'mobx';

axios.defaults.baseURL = 'http://localhost:3500';

class DeviceStateService extends DevicesState {
  getDevices = async (
    type: string,
    brand: string,
    sortType: string,
    query: string,
  ): Promise<void> => {
    let searchString = `/items?name_like=^${query}&_sort=${sortType}&_order=ASC`;

    if (type && brand === '') {
      searchString = `/items?name_like=^${query}&type=${type}&_sort=${sortType}&_order=ASC`; //! make this string shorter, +=
    } else if (type === '' && brand) {
      searchString = `/items?name_like=^${query}&brand=${brand}&_sort=${sortType}&_order=ASC`;
    } else if (type && brand) {
      searchString = `/items?name_like=^${query}&type=${type}&brand=${brand}&_sort=${sortType}&_order=ASC`;
    }

    try {
      this.setIsLoading(true);
      const response = await axios.get<Array<GoodsItemType>>(searchString);
      if (response.status === 200) {
        this.setGoodsList(response.data);
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err.message);
      this.setError(err.message);
    } finally {
      this.setIsLoading(false);
    }
  };
  // getDevices = async (
  //   type: number,
  //   brand: number,
  //   sortType: string,
  //   query: string,
  // ): Promise<void> => {
  //   let searchString = `/items?name_like=^${query}&_sort=${sortType}&_order=ASC`;

  //   if (type && brand === 0) {
  //     searchString = `/items?name_like=^${query}&type=${type}&_sort=${sortType}&_order=ASC`;
  //   } else if (type === 0 && brand) {
  //     searchString = `/items?name_like=^${query}&brand=${brand}&_sort=${sortType}&_order=ASC`;
  //   } else if (type && brand) {
  //     searchString = `/items?name_like=^${query}&type=${type}&brand=${brand}&_sort=${sortType}&_order=ASC`;
  //   }

  //   try {
  //     this.setIsLoading(true);
  //     const response = await axios.get<Array<GoodsItemType>>(searchString);
  //     if (response.status === 200) {
  //       this.setGoodsList(response.data);
  //     }
  //   } catch (error) {
  //     const err = error as AxiosError;
  //     console.log(err.message);
  //     this.setError(err.message);
  //   } finally {
  //     this.setIsLoading(false);
  //   }
  // };

  deleteItem = async (id: string) => {
    try {
      const response = await axios.delete<void>(`/items/${id}`);
      if (response.status === 200) {
        this.removeItem(id);
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err.message);
      this.setError(err.message);
      return false;
    }
  };

  GetItemsList = reaction(
    () => this.sortType || this.searchBrand || this.searchType || this.query,
    () => {
      this.getDevices(
        this.searchType,
        this.searchBrand,
        this.sortType,
        this.query,
      );
    },
    { fireImmediately: true }, //! remove this param, because we call getDevices without params, after maunting in main
  );
}

export default new DeviceStateService();
