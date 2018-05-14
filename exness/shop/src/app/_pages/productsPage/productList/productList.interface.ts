import {IProduct} from 'app/_features/products/product/product.interface';
import {ProductsActions} from 'app/_features/products/products.action';
import {IProductsSort} from 'app/_features/products/products.interface';

export type IProductListProps = IProductListOwnProps;

export interface IProductListOwnProps {
    products: IProduct[];
    sort: IProductsSort;
    actions: {
        editProduct: typeof ProductsActions.edit;
        removeProduct: typeof ProductsActions.remove;
        sortProduct: typeof ProductsActions.sort;
    };
}
