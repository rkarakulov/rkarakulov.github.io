import {IProductsStore} from 'app/_features/products/products.interface';
import {IProduct} from 'app/_features/products/product/product.interface';
import {sortStable} from 'app/_helpers/sort/sortStable/sortStable';

export function sortProducts(productsStore: IProductsStore): IProduct[] {
    return sortStable<IProduct>(
        productsStore.data,
        productsStore.sort.field,
        productsStore.sort.direction
    );
}
