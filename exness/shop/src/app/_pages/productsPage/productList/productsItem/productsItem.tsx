import * as React from 'react';
import * as classNames from 'classnames';
import * as style from './productItem.css';
import {ProductItemTextInput} from 'app/_pages/productsPage/_components/productItemTextInput/productsItemTextInput';
import {
    IProductItemProps,
    IProductItemState
} from 'app/_pages/productsPage/productList/productsItem/productItem.interface';
import {IProduct} from 'app/_features/products/product/product.interface';

export class ProductItem extends React.Component<IProductItemProps, IProductItemState> {
    public state: IProductItemState = {
        editing: false
    };

    public render() {
        const {product} = this.props;

        let element;
        if (this.state.editing) {
            element = (
                <ProductItemTextInput
                    productData={product}
                    editing={this.state.editing}
                    onSave={this.onSave}
                    onCancel={this.onCancel}
                />
            );
        }
        else {
            element = (
                <div className={style.view}>
                    <label>
                        <div className={style.name}>{product.name}</div>
                        <div className={style.price}>{product.price}</div>
                        <div className={style.count}>{product.count}</div>
                    </label>
                    <button className={style.inc} onClick={() => this.onIncrement(product)}/>
                    <button className={style.dec} onClick={() => this.onDecrement(product)}/>
                    <button className={style.edit} onClick={() => this.onEdit()}/>
                    <button className={style.destroy} onClick={() => this.onRemove(product)}/>
                </div>
            );
        }

        const classes = classNames({
            [style.editing]: this.state.editing,
            [style.normal]: !this.state.editing
        });

        return <li className={classes}>{element}</li>;
    }

    private onRemove = (product: IProduct) => {
        const {actions} = this.props;

        if (product.id) {
            actions.removeProduct(product.id);
        }
    };

    private onEdit = () => {
        this.setState({editing: true});
    };

    private onIncrement = (product: IProduct) => {
        const {actions} = this.props;

        const newCount = product.count + 1;
        actions.editProduct({
            ...product,
            count: newCount
        });
    };

    private onDecrement = (product: IProduct) => {
        const {actions} = this.props;

        actions.editProduct({
            ...product,
            count: product.count > 0 ? product.count - 1 : 0
        });
    };

    private onSave = (productData: Partial<IProduct>): void => {
        const {actions, product} = this.props;

        if (product.id) {
            if (!productData.name || productData.name.length === 0) {
                actions.removeProduct(product.id);
            }
            else {
                actions.editProduct({
                    ...product,
                    ...productData
                });
            }

            this.setState({editing: false});
        }
    };

    private onCancel = () => {
        this.setState({editing: false});
    };
}
