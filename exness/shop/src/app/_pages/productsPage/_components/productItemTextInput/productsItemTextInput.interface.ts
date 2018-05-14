import {IProductPartial} from 'app/_features/products/product/product.interface';

export interface IProductItemTextInputProps {
    productData?: IProductPartial;
    editing: boolean;
    onSave: (productData: IProductPartial) => void;
    onCancel?: () => void;
}

export interface IProductItemTextInputState extends IProductPartial {
}
