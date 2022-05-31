import React, { Suspense } from 'react';
import { useFela } from 'react-fela';
import { Outlet } from 'react-router-dom';
import { Header, Footer, Preloader } from '../components';
import { wrapperRule, mainRule } from './Layout.style';

const Layout: React.FC = () => {
  const { css, theme } = useFela();

  return (
    <div className={css(wrapperRule(theme as ThemeType))}>
      <header>
        <Header />
      </header>
      <main className={css(mainRule)}>
        <Suspense fallback={<Preloader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
