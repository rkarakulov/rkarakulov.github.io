import {IProduct} from 'app/_features/products/product/product.interface';
import {SortDirection} from 'app/_helpers/sort/sortDirection';

export interface IProductsSort {
    field: keyof IProduct;
    direction: SortDirection;
}

export type IProductsStore = {
    sort: IProductsSort;
    data: IProduct[];
};

export interface IProductsStoreSegment {
    products: IProductsStore;
}
