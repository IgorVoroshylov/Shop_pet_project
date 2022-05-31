import AppState from './AppState';
import axios, { AxiosError } from 'axios';

axios.defaults.baseURL = 'http://localhost:3500';

class AppStateService extends AppState {
  getBrands = async (): Promise<void> => {
    try {
      const response = await axios.get<Array<BrandAndType>>(`/brands`);
      if (response.status === 200) {
        this.setBrands(response.data);
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err.message);
      this.setError(err.message);
    }
  };

  createBrand = async (brand: BrandAndType): Promise<void> => {
    try {
      const response = await axios.post<BrandAndType>(`/brands`, brand);
      if (response.status === 201) {
        this.addBrand(response.data);
        this.setSuccessLoadBrand(true);
        this.setSuccessLoadBrand2();
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err.message);
      this.setError(err.message);
    }
  };

  getTypes = async (): Promise<void> => {
    try {
      const response = await axios.get<Array<BrandAndType>>(`/types`);
      if (response.status === 200) {
        this.setTypes(response.data);
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err.message);
      this.setError(err.message);
    }
  };

  createType = async (type: BrandAndType): Promise<void> => {
    try {
      const response = await axios.post<BrandAndType>(`/types`, type);
      if (response.status === 201) {
        this.addType(response.data);
        this.setSuccessLoadType(true);
        this.setSuccessLoadType2();
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err.message);
      this.setError(err.message);
    }
  };
}

export default new AppStateService();
