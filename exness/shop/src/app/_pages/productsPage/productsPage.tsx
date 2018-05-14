import * as React from 'react';
import * as style from './productsPage.css';
import {connect} from 'react-redux';
import {IProductsPageProps} from 'app/_pages/productsPage/productsPage.interface';
import {productsPageSelector} from 'app/_pages/productsPage/productsPage.selector';
import {Header} from 'app/_pages/productsPage/header/header';
import {ProductList} from 'app/_pages/productsPage/productList/productList';
import {ProductsActions} from 'app/_features/products/products.action';

@connect(
    productsPageSelector,
    {
        addProduct: ProductsActions.add,
        editProduct: ProductsActions.edit,
        removeProduct: ProductsActions.remove,
        sortProduct: ProductsActions.sort,
        saveProducts: ProductsActions.save
    }
)
export class ProductsPage extends React.Component<IProductsPageProps> {
    public static defaultProps: Partial<IProductsPageProps> = {};

    public render() {
        const {
            products,
            sort,
            addProduct,
            editProduct,
            removeProduct,
            sortProduct,
            saveProducts
        } = this.props;

        const actions = {
            addProduct,
            editProduct,
            removeProduct,
            sortProduct,
            saveProducts
        };

        return (
            <div className={style.normal}>
                <Header addProduct={actions.addProduct}/>
                <ProductList products={products} actions={actions} sort={sort}/>
            </div>
        );
    }
}
