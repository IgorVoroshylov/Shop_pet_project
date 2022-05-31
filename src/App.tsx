import React, { useEffect, useLayoutEffect } from 'react';
import { createRenderer } from 'fela';
import 'materialize-css';
import { RendererProvider, ThemeProvider } from 'react-fela';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
//import ThemeContext from './context/ThemeContext';
import { Layout } from './Layout';
import { appTheme } from './Assets/Theme/theme';
import useStore from './hooks/useStore';
import { observer } from 'mobx-react';
import { Preloader } from './components';

const renderer = createRenderer();

const Admin = React.lazy(() => import('./Pages/Admin'));
const Main = React.lazy(() => import('./Pages/Main'));
const Basket = React.lazy(() => import('./Pages/Basket'));
const Device = React.lazy(() => import('./Pages/Device'));
const ErrorPage = React.lazy(() => import('./Pages/404'));

const App: React.FC = () => {
  const { isLoading, getUserInfo, user } = useStore('UserState');
  const { getBasketItemList } = useStore('BasketState');
  const { themeFlag } = useStore('AppState');
  const { setSortValue, setSearchType, setSearchBrand } =
    useStore('DeviceState');
  //const [theme, setTheme] = useState<'light' | 'string'>('light');

  useLayoutEffect(() => {
    getUserInfo(1);
    getBasketItemList(user?.id);
  }, [getUserInfo, getBasketItemList, user?.id]);

  useEffect(() => {
    const value = sessionStorage.getItem('sortValue');
    if (value) setSortValue(value);

    const searchType = sessionStorage.getItem('searchType');
    if (searchType) setSearchType(searchType);

    const searchBrand = sessionStorage.getItem('searchBrand');
    if (searchBrand) setSearchBrand(searchBrand);
  }, [setSearchBrand, setSearchType, setSortValue]);

  if (isLoading) <Preloader />;

  return (
    <BrowserRouter>
      <RendererProvider renderer={renderer}>
        {/* <ThemeContext.Provider value={{ theme, setTheme }}> */}
        <ThemeProvider theme={appTheme[themeFlag]}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Main />} />
              <Route path="device/:id" element={<Device />} />
              <Route path="admin" element={<Admin />} />
              <Route path="basket" element={<Basket />} />
              <Route path="*" element={<ErrorPage />} />
              {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
            </Route>
          </Routes>
        </ThemeProvider>
        {/* </ThemeContext.Provider> */}
      </RendererProvider>
    </BrowserRouter>
  );
};

export default observer(App);
