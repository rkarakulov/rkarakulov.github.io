import {applyMiddleware, createStore, Store} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {routerMiddleware} from 'react-router-redux';
import {History} from 'history';
import {rootReducer} from 'app/_store/root.reducer';
import {IStore} from 'app/_store/store.interface';
import {loggerMiddleware} from 'app/_store/middleware/logger/logger.middleware';
import {loadStore, saveStore} from 'app/_features/localStorage/localStorage';
import {epicMiddleware} from 'app/_store/middleware/epic/epic.middleware';

export function configureStore(history: History): Store<IStore> {
    const initialState = loadStore();

    let middleware = applyMiddleware(
        epicMiddleware,
        loggerMiddleware,
        routerMiddleware(history)
    );

    if (process.env.NODE_ENV !== 'production') {
        middleware = composeWithDevTools(middleware);
    }

    const store = createStore(rootReducer as any, initialState as any, middleware) as Store<IStore>;

    store.subscribe(() => saveStore(store.getState()));

    if (module.hot) {
        const path = './root.reducer.ts';
        module.hot.accept(path, () => {
            const nextReducer = require(path);
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}
