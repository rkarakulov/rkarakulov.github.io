import {IProductsStore} from 'app/_features/products/products.interface';
import {IProduct} from 'app/_features/products/product/product.interface';
import {SortDirection} from 'app/_helpers/sort/sortDirection';
import {ProductsActions} from 'app/_features/products/products.action';
import {productsReducer} from 'app/_features/products/products.reducer';

describe('products.reducer', () => {
    describe('"remove" action', () => {
        const productId = 2;
        let startProductsStoreForRemove: IProductsStore;
        const product: IProduct = {
            id: 1,
            name: 'name',
            price: 1,
            count: 1
        };

        beforeEach(() => {
            startProductsStoreForRemove = {
                sort: {
                    field: 'name',
                    direction: SortDirection.desc
                },
                data: []
            };
        });

        test('should not remove anything if productId not found', () => {
            startProductsStoreForRemove.data.push(product);

            const action = ProductsActions.remove(productId);
            const actual = productsReducer(startProductsStoreForRemove, action);
            const expected = startProductsStoreForRemove;

            expect(actual).toEqual(expected);
        });

        test('should remove product from store', () => {
            const product2 = {
                id: productId,
                name: 'name2',
                price: 2,
                count: 2
            };
            startProductsStoreForRemove.data.push(product);
            startProductsStoreForRemove.data.push(product2);

            const action = ProductsActions.remove(productId);
            const actual = productsReducer(startProductsStoreForRemove, action);
            const expected = {
                sort: {
                    ...startProductsStoreForRemove.sort
                },
                data: [product]
            };

            expect(actual).toEqual(expected);
        });
    });
});
