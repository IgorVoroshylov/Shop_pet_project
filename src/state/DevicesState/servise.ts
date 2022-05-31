import DevicesState from './DevicesState';
import axios, { AxiosError } from 'axios';

axios.defaults.baseURL = 'http://localhost:3500';

class DeviceStateService extends DevicesState {
  getDevices = async (
    type: string,
    brand: string,
    sortValue: string,
    query: string,
  ): Promise<void> => {
    let searchString = `/items?name_like=^${query}&_sort=${sortValue}&_order=ASC`;

    if (type && brand === '') {
      searchString = `/items?name_like=^${query}&type=${type}&_sort=${sortValue}&_order=ASC`; //! make this string shorter, +=
    } else if (type === '' && brand) {
      searchString = `/items?name_like=^${query}&brand=${brand}&_sort=${sortValue}&_order=ASC`;
    } else if (type && brand) {
      searchString = `/items?name_like=^${query}&type=${type}&brand=${brand}&_sort=${sortValue}&_order=ASC`;
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
    }
  };

  // GetItemsList = reaction(
  //   //! don`t work as needed
  //   () => this.searchType || this.searchBrand || this.sortValue || this.query, //! receive only first value
  //   (value) => {
  //     console.log('reaction:', value);
  //     this.getDevices(
  //       this.searchType,
  //       this.searchBrand,
  //       this.sortValue,
  //       this.query,
  //     );
  //   },
  //   { fireImmediately: true },
  // );
}

export default new DeviceStateService();
