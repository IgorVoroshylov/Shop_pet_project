import axios, { AxiosError } from 'axios';
//import { runInAction } from 'mobx';
import ItemProductState from './ItemProductState';

axios.defaults.baseURL = 'http://localhost:3500';

class ItemProductStateService extends ItemProductState {
  getItem = async (id: string): Promise<void> => {
    try {
      this.setIsLoading(true);
      const response = await axios.get<GoodsItemType>(`/items/${id}`);
      if (response.status === 200) {
        this.setItem(response.data);
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err.message);
      this.setError(err.message);
      this.setItem(null);
    } finally {
      this.setIsLoading(false);
    }
  };

  editItem = async (newItem: GoodsItemType, id: string): Promise<void> => {
    try {
      const response = await axios.put<GoodsItemType>(`/items/${id}`, newItem);
      if (response.status === 200) {
        this.setItem(response.data);
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err.message);
      this.setError(err.message);
    }
  };

  createItem = async (newItem: GoodsItemType): Promise<void> => {
    try {
      const response = await axios.post<void>(`/items`, newItem);
      if (response.status === 201) {
        this.setSuccessLoading(true);
        this.changeSuccessLoading();
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err.message);
      this.setError(err.message);
    }
  };

  getComments = async (id: string): Promise<void> => {
    try {
      const response = await axios.get<Array<CommentType>>(
        `/comments?productId=${id}`,
      );
      if (response.status === 200) {
        this.setComments(response.data);
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err.message);
      this.setError(err.message);
    }
  };

  createComments = async (
    comment: CommentType,
  ): Promise<boolean | undefined> => {
    try {
      const response = await axios.post<CommentType>(`/comments`, comment);
      if (response.status === 201) {
        this.addComment(response.data);
        return true;
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err.message);
      this.setError(err.message);
      return false;
    }
  };

  deleteComments = async (comentId: string): Promise<void> => {
    try {
      const response = await axios.delete<void>(`/comments/${comentId}`);
      if (response.status === 200) {
        this.removeComment(comentId);
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err.message);
      this.setError(err.message);
    }
  };
}

export default new ItemProductStateService();
