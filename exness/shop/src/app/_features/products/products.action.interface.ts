import {ProductsActions} from 'app/_features/products/products.action';

export interface IProductsActions {
    addProduct: typeof ProductsActions.add;
    editProduct: typeof ProductsActions.edit;
    removeProduct: typeof ProductsActions.remove;
    sortProduct: typeof ProductsActions.sort;
    saveProducts: typeof ProductsActions.save;
}
