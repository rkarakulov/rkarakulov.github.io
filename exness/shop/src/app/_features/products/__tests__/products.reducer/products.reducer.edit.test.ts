import {IProductsStore} from 'app/_features/products/products.interface';
import {IProduct} from 'app/_features/products/product/product.interface';
import {SortDirection} from 'app/_helpers/sort/sortDirection';
import {ProductsActions} from 'app/_features/products/products.action';
import {productsReducer} from 'app/_features/products/products.reducer';

describe('products.reducer', () => {
    describe('"edit" action', () => {
        const productId = 1;
        const product: IProduct = {
            id: productId,
            name: 'name',
            price: 1,
            count: 1
        };
        let startProductsStoreForEdit: IProductsStore;

        beforeEach(() => {
            startProductsStoreForEdit = {
                sort: {
                    field: 'name',
                    direction: SortDirection.desc
                },
                data: [product]
            };
        });

        test('should not update anything if productId not found', () => {
            const product2: IProduct = {
                id: 2,
                name: 'name2',
                price: 2,
                count: 2
            };

            const action = ProductsActions.edit(product2);

            const actual = productsReducer(startProductsStoreForEdit, action);
            const expected = startProductsStoreForEdit;

            expect(actual).toEqual(expected);
        });

        test('should update product', () => {
            const product2 = {
                id: productId,
                name: 'name2',
                price: 2,
                count: 2
            };

            const action = ProductsActions.edit(product2);
            const actual = productsReducer(startProductsStoreForEdit, action);
            const expected = {
                sort: {
                    ...startProductsStoreForEdit.sort
                },
                data: [product2]
            };

            expect(actual).toEqual(expected);
        });
    });
});
