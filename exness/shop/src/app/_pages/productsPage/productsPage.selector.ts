import {IProductsPageStateProps} from 'app/_pages/productsPage/productsPage.interface';
import {IProductsStore, IProductsStoreSegment} from 'app/_features/products/products.interface';
import {createSelector} from 'reselect';
import {productsSelector} from 'app/_features/products/products.selector';
import {sortProducts} from 'app/_pages/productsPage/productsPage.helper';

export const productsPageSelector = createSelector<IProductsStoreSegment,
    IProductsStore,
    IProductsPageStateProps>(
    productsSelector,
    productsStore => {
        return {
            sort: productsStore.sort,
            products: sortProducts(productsStore)
        };
    });
