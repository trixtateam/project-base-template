/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from '../styles/global-styles';
import { useTrixtaSpace } from '@trixtateam/trixta-js-core';
import { useTranslation } from 'react-i18next';
import { SagaInjectionModes, useInjectSaga } from 'redux-injectors';
import { HomePage } from './pages/HomePage/Loadable';
import { LoginPage } from './pages/LoginPage';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import saga from './sagas/app';
export function App() {
  useInjectSaga({ key: 'App', saga, mode: SagaInjectionModes.DAEMON });
  useTrixtaSpace({ space: 'trixta-demo.space.trixta.io', params: {} });
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Routes>
        <Route path={process.env.PUBLIC_URL + '/'} element={<HomePage />} />
        <Route
          path={process.env.PUBLIC_URL + '/login'}
          element={<LoginPage />}
        />
        <Route element={<NotFoundPage />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}
