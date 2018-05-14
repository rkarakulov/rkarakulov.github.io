import {IProductsStoreSegment} from 'app/_features/products/products.interface';
import {IRouterStoreSegment} from 'app/_features/router/router.interface';

export type IStore = IProductsStoreSegment
    & IRouterStoreSegment;
