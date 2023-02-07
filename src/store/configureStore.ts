import { configureStore, StoreEnhancer } from "@reduxjs/toolkit";
import { createInjectorsEnhancer } from "redux-injectors";

import { createPhoenixChannelMiddleware } from "@trixtateam/phoenix-to-redux";
import createSagaMiddleware from "redux-saga";
import { createReducer } from "./reducers";

export function configureAppStore() {
  const reduxSagaMonitorOptions = {};
  // Makes redux connected to phoenix channels
  const phoenixChannelMiddleWare = createPhoenixChannelMiddleware();
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;

  // Create the store with saga middleware
  const middlewares = [sagaMiddleware, phoenixChannelMiddleWare];

  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga
    })
  ] as StoreEnhancer[];

  const store = configureStore({
    reducer: createReducer(),
    middleware: getDefaultMiddleware => [
      ...getDefaultMiddleware({
        thunk: false,
        immutableCheck: {
          ignore: ["socket", "channel", "trixta", "phoenix", "router"]
        },
        serializableCheck: false
      }),
      ...middlewares
    ],
    devTools:
      /* istanbul ignore next line */
      process.env.NODE_ENV !== "production" ||
      process.env.PUBLIC_URL.length > 0,
    enhancers
  });

  return store;
}
