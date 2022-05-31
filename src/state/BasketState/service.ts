import BasketState from './BasketState';
import axios, { AxiosError } from 'axios';

axios.defaults.baseURL = 'http://localhost:3500';

class BasketStateService extends BasketState {
  getBasketItemList = async (id: number | undefined) => {
    try {
      const response = await axios.get<Array<BasketItem>>(
        `/basket?userBasketId=${id}`,
      );
      if (response.status === 200) {
        this.setBasketItemList(response.data);
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err.message);
      this.setError(err.message);
    } finally {
      this.setIsLoading(false);
    }
  };

  addItemToBasket = async (item: BasketItem) => {
    try {
      const response = await axios.post<BasketItem>(`/basket`, item);
      if (response.status === 201) {
        this.addItemBasket(response.data);
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err.message);
      this.setError(err.message);
    }
  };

  deleteBasketItem = async (id: string) => {
    try {
      const response = await axios.delete<void>(`/basket/${id}`);
      if (response.status === 200) {
        this.removeBasketItem(id);
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err.message);
      this.setError(err.message);
    }
  };
}

export default new BasketStateService();
