import {RouteComponentProps} from 'react-router';
import {IProductsSort} from 'app/_features/products/products.interface';
import {IProductsActions} from 'app/_features/products/products.action.interface';
import {IProduct} from 'app/_features/products/product/product.interface';

export type IProductsPageProps = IProductsPageOwnProps &
    IProductsPageDispatchProps &
    IProductsPageStateProps;

export interface IProductsPageOwnProps extends RouteComponentProps<void> {
}

export interface IProductsPageDispatchProps extends IProductsActions {
}

export interface IProductsPageStateProps {
    sort: IProductsSort;
    products: IProduct[];
}
