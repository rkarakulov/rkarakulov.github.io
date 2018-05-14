import {IProductsStore, IProductsStoreSegment} from 'app/_features/products/products.interface';

export const productsSelector = (store: IProductsStoreSegment): IProductsStore => store.products;
