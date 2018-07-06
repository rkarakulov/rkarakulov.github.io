import {IProduct} from 'app/_features/products/product/product.interface';
import {IProductsSort} from 'app/_features/products/products.interface';

export type IDirectionIconProps = IDirectionIconOwnProps;

export interface IDirectionIconOwnProps {
    field: keyof IProduct;
    sort: IProductsSort;
}
