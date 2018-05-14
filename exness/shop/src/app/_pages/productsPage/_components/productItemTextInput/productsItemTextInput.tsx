import * as React from 'react';
import * as classNames from 'classnames';
import * as style from './productItemTextInput.css';
import {
    IProductItemTextInputProps,
    IProductItemTextInputState
} from './productsItemTextInput.interface';
import { IProductPartial } from 'app/_features/products/product/product.interface';

export class ProductItemTextInput extends React.Component<IProductItemTextInputProps,
    IProductItemTextInputState> {

    private initState: IProductPartial = {
        name: '',
        price: 0,
        count: 1
    };

    public state: IProductItemTextInputState = this.props.productData || this.initState;

    public render() {
        const classes = classNames(
            {
                [style.edit]: this.props.editing,
                [style.new]: !this.props.editing
            },
            style.normal
        );

        return (
            <React.Fragment>
                <input
                    className={classes}
                    type="text"
                    autoFocus={true}
                    placeholder="name"
                    value={this.state.name}
                    onChange={event => this.onChange(event, 'name')}
                />
                <input
                    className={classes}
                    type="number"
                    autoFocus={false}
                    placeholder="price"
                    value={this.state.price}
                    onChange={event => this.onChange(event, 'price')}
                />
                <input
                    className={classes}
                    type="number"
                    autoFocus={false}
                    placeholder="count"
                    value={this.state.count}
                    onChange={event => this.onChange(event, 'count')}
                />
                <button onClick={this.onSave}>
                    {
                        this.props.editing
                            ? 'Save'
                            : 'Add'
                    }
                </button>
                {
                    this.props.editing &&
                    <button onClick={this.onCancel}>
                        Cancel
                    </button>
                }
            </React.Fragment>
        );
    }

    private onChange = (event: React.ChangeEvent<HTMLInputElement>, key: keyof IProductPartial) => {
        this.state[key] = event.target.value;
        this.setState(this.state);
    };

    private onSave = () => {
        this.props.onSave(this.state);
        this.setState(this.initState);
    };

    private onCancel = () => {
        if (this.props.onCancel) {
            this.props.onCancel();
        }
    };
}
