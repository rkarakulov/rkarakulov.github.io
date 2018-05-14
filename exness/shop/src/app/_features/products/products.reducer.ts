import {ProductsActions} from 'app/_features/products/products.action';
import {reducerWithInitialState} from 'typescript-fsa-reducers';
import {IProductsStore} from 'app/_features/products/products.interface';
import {IProduct, IProductPartial} from 'app/_features/products/product/product.interface';
import {SortDirection} from 'app/_helpers/sort/sortDirection';

export const DEFAULT_PRICE = 10.1;

export const DEFAULT_COUNT = 1;

export const initialProductsStore: IProductsStore = {
    sort: {
        field: 'name',
        direction: SortDirection.asc
    },
    data: [
        {
            id: 1,
            name: 'Mini Cooper',
            price: DEFAULT_PRICE,
            count: DEFAULT_COUNT
        }
    ]
};

export const productsReducer = reducerWithInitialState(initialProductsStore)
    .case(ProductsActions.add, (productsStore: IProductsStore, productData: IProductPartial) => {
        return productData.name && productData.name.length > 0
            ? {
                sort: productsStore.sort,
                data: [
                    {
                        id:
                        productsStore.data.reduce(
                            (max: number, product: IProduct) => Math.max(product.id || 1, max),
                            0
                        ) + 1,
                        ...productData
                    },
                    ...productsStore.data
                ]
            }
            : {
                sort: {
                    ...productsStore.sort
                },
                data: [...productsStore.data]
            };
    })
    .case(ProductsActions.remove, (productsStore: IProductsStore, productId: number) => {
        const productsData = productsStore.data.filter(product => product.id !== productId);
        return {
            sort: {
                ...productsStore.sort
            },
            data: [...productsData]
        };
    })
    .case(ProductsActions.edit, (productsStore: IProductsStore, editedProduct: IProduct) => {
        const productsData = productsStore.data.map((product: IProduct) => {
            return product.id === editedProduct.id ? {...editedProduct} : {...product};
        });

        return {
            sort: {
                ...productsStore.sort
            },
            data: [...productsData]
        };
    })
    .case(ProductsActions.sort, (productsStore: IProductsStore, field: keyof IProduct) => {
        return {
            sort: {
                direction:
                    productsStore.sort.field === field
                        ? productsStore.sort.direction === SortDirection.asc
                        ? SortDirection.desc
                        : SortDirection.asc
                        : SortDirection.asc,
                field
            },
            data: [...productsStore.data]
        };
    });
