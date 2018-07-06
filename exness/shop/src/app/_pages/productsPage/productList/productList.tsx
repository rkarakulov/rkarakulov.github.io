import * as React from 'react';
import * as style from './productList.css';
import {ProductItem} from './productsItem/productsItem';
import {IProductListProps} from 'app/_pages/productsPage/productList/productList.interface';
import {IProduct} from 'app/_features/products/product/product.interface';
import {DirectionIcon} from 'app/_pages/productsPage/productList/directionIcon/directionIcon';

export class ProductList extends React.Component<IProductListProps> {
    public render() {
        const {products, actions} = this.props;

        return (
            <section className={style.main}>
                {this.renderHeader()}
                <ul className={style.normal}>
                    {products.map(product => (
                        <ProductItem
                            key={product.id}
                            product={product}
                            actions={{
                                editProduct: actions.editProduct,
                                removeProduct: actions.removeProduct
                            }}
                        />
                    ))}
                </ul>
            </section>
        );
    }

    private renderHeader = (): JSX.Element | void => {
        const {products, sort} = this.props;
        if (products.length > 0) {
            return (
                <div className={style.header}>
                    <div className={style.name} onClick={() => this.onSort('name')}>
                        Name
                        <DirectionIcon sort={sort} field="name"/>
                    </div>
                    <div className={style.price} onClick={() => this.onSort('price')}>
                        Price
                        <DirectionIcon sort={sort} field="price"/>
                    </div>
                    <div className={style.count} onClick={() => this.onSort('count')}>
                        Count
                        <DirectionIcon sort={sort} field="count"/>
                    </div>
                </div>
            );
        }
    };

    private onSort = (field: keyof IProduct): void => {
        const {actions} = this.props;

        actions.sortProduct(field);
    };
}
