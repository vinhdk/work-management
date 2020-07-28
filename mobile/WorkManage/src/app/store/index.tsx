import { createStore, compose, applyMiddleware, Store } from "redux";
import { useRootReducer } from "src/app/reducers";
import createSagaMiddleware from "redux-saga";
import { useRootSaga } from 'src/app/sagas';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export const useStoreModule = (): Store => {
    const rootReducer = useRootReducer();
    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers = composeWithDevTools({});
    const middlewares = [sagaMiddleware, thunk];
    const enhancers = [applyMiddleware(...middlewares)];
    const store: Store = createStore(rootReducer, composeEnhancers(...enhancers));
    sagaMiddleware.run(useRootSaga().useInit);
    return store;
}