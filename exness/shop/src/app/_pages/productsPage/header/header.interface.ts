import {ProductsActions} from 'app/_features/products/products.action';

export type IHeaderProps = IHeaderOwnProps;

export interface IHeaderOwnProps {
    addProduct: typeof ProductsActions.add;
}
