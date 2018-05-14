import {IProductsStore} from 'app/_features/products/products.interface';
import {IProduct} from 'app/_features/products/product/product.interface';
import {SortDirection} from 'app/_helpers/sort/sortDirection';
import {ProductsActions} from 'app/_features/products/products.action';
import {productsReducer} from 'app/_features/products/products.reducer';

describe('products.reducer', () => {
    describe('"sort" action', () => {
        const productId = 1;
        const product: IProduct = {
            id: productId,
            name: 'name',
            price: 1,
            count: 1
        };
        let startProductsStoreForSort: IProductsStore;

        beforeEach(() => {
            startProductsStoreForSort = {
                sort: {
                    field: 'name',
                    direction: SortDirection.asc
                },
                data: [product]
            };
        });

        test(
            'should set sort direction to "asc" if sort field has been changed' +
            ' and change sort field value',
            () => {
                const key: keyof IProduct = 'price';

                const action = ProductsActions.sort(key);

                const actual = productsReducer(startProductsStoreForSort, action);
                const expected = {
                    sort: {
                        field: key,
                        direction: SortDirection.asc
                    },
                    data: [...startProductsStoreForSort.data]
                };

                expect(actual).toEqual(expected);
            }
        );

        test('should change sort direction from "asc" to "desc" if sort field has NOT been changed', () => {
            startProductsStoreForSort.sort.direction = SortDirection.asc;
            const key: keyof IProduct = startProductsStoreForSort.sort.field;

            const action = ProductsActions.sort(key);

            const actual = productsReducer(startProductsStoreForSort, action);
            const expected = {
                sort: {
                    ...startProductsStoreForSort.sort,
                    direction: SortDirection.desc
                },
                data: [...startProductsStoreForSort.data]
            };

            expect(actual).toEqual(expected);
        });

        test('should change sort direction from "desc" to "asc" if sort field has NOT been changed', () => {
            startProductsStoreForSort.sort.direction = SortDirection.desc;
            const key: keyof IProduct = startProductsStoreForSort.sort.field;

            const action = ProductsActions.sort(key);

            const actual = productsReducer(startProductsStoreForSort, action);
            const expected = {
                sort: {
                    ...startProductsStoreForSort.sort,
                    direction: SortDirection.asc
                },
                data: [...startProductsStoreForSort.data]
            };

            expect(actual).toEqual(expected);
        });
    });
});
