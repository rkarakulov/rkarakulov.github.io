import {IProduct} from 'app/_features/products/product/product.interface';
import {ProductsActions} from 'app/_features/products/products.action';

export type IProductItemProps = IProductItemOwnProps;

export interface IProductItemOwnProps {
    product: IProduct;
    actions: {
        editProduct: typeof ProductsActions.edit;
        removeProduct: typeof ProductsActions.remove;
    };
}

export interface IProductItemState {
    editing: boolean;
}
