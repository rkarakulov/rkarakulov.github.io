import actionCreatorFactory from 'typescript-fsa';
import {IProduct, IProductPartial} from 'app/_features/products/product/product.interface';

const actionCreator = actionCreatorFactory('ProductsPage');

export const ProductsActions = {
    add: actionCreator<IProductPartial>('ADD'),
    edit: actionCreator<IProduct>('EDIT'),
    remove: actionCreator<IProduct['id']>('REMOVE'),
    sort: actionCreator<keyof IProduct>('SORT'),
    save: actionCreator('SAVE')
};
