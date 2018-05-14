import {combineReducers} from 'redux';
import {IStore} from './store.interface';
import {productsReducer} from '../_features/products/products.reducer';
import {routerReducer} from 'react-router-redux';

export const rootReducer = combineReducers<IStore>({
    products: productsReducer as any,
    router: routerReducer as any
});
