import * as React from 'react';
import {ProductItemTextInput} from 'app/_pages/productsPage/_components/productItemTextInput/productsItemTextInput';
import {IHeaderProps} from 'app/_pages/productsPage/header/header.interface';
import {IProductPartial} from 'app/_features/products/product/product.interface';

export class Header extends React.Component<IHeaderProps> {
    public render() {
        return (
            <header>
                <h3>Products</h3>
                <ProductItemTextInput editing={false} onSave={this.onSave}/>
            </header>
        );
    }

    private onSave = (productData: IProductPartial): void => {
        const {addProduct} = this.props;

        addProduct(productData);
    };
}
