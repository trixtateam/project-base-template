import { Helmet } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useTrixtaSpace } from "@trixtateam/trixta-js-core";
import { SagaInjectionModes, useInjectSaga } from "redux-injectors";
import { HomePage } from "./pages/HomePage/Loadable";
import { LoginPage } from "./pages/LoginPage";
import { NotFoundPage } from "./pages/NotFoundPage/Loadable";
import saga from "./sagas/app";
export function App() {
  useInjectSaga({ key: "App", saga, mode: SagaInjectionModes.DAEMON });
  useTrixtaSpace({ space: "trixta-demo.space.trixta.io", params: {} });
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<HomePage />} />
        <Route
          path={process.env.PUBLIC_URL + "/login"}
          element={<LoginPage />}
        />
        <Route element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
