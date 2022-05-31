import UserState from './UserState';
import axios, { AxiosError } from 'axios';

axios.defaults.baseURL = 'http://localhost:3500';

class UserStateService extends UserState {
  getUserInfo = async (id: number): Promise<void> => {
    try {
      const response = await axios.get<UserType>(`/users/${id}`);
      if (response.status === 200) {
        this.setUser(response.data);
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err.message);
      this.setError(err.message);
    } finally {
      this.setIsLoading(false);
    }
  };
}

export default new UserStateService();
