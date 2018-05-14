import {IEpic} from 'app/_store/middleware/epic/root.epic.interface';
import {AnyAction} from 'typescript-fsa';
import {IProductsStoreSegment} from 'app/_features/products/products.interface';
import { ProductsActions } from 'app/_features/products/products.action';
import { combineEpics } from 'redux-observable';

export const productsSaveStartedEpic: IEpic<AnyAction, IProductsStoreSegment> = action$ =>
        action$
            .isTypeOf(ProductsActions.save)
            .do(() => {
                // Implement logic for save to server
            })
            .ignoreElements();

export const productsEpic = combineEpics(
    productsSaveStartedEpic,
);
