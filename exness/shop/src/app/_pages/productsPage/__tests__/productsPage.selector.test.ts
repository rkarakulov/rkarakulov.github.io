import {SortDirection} from 'app/_helpers/sort/sortDirection';
import {IProductsSort} from 'app/_features/products/products.interface';

const sortProductsMock = jest.fn();
jest.resetModules().doMock('app/_pages/productsPage/productsPage.helper', () => ({
    sortProducts: sortProductsMock
}));

import {productsPageSelector} from 'app/_pages/productsPage/productsPage.selector';

describe('productsPage.selector', () => {
    describe('productsPageSelector', () => {
        const dummyProduct = expect.anything();
        const sortedProducts = [dummyProduct];
        const productsStore = {
            sort: {
                field: 'price',
                direction: SortDirection.desc
            } as IProductsSort,
            data: []
        };
        sortProductsMock.mockImplementation(() => sortedProducts);

        afterEach(() => {
            sortProductsMock.mockReset();
        });

        test('should return correct data for component', () => {
            const actual = productsPageSelector.resultFunc(productsStore);
            const expected = {
                sort: productsStore.sort,
                products: sortedProducts
            };

            expect(actual).toEqual(expected);
        });

        test('should call sort function', () => {
            productsPageSelector.resultFunc(productsStore);

            expect(sortProductsMock).toHaveBeenCalledTimes(1);
            expect(sortProductsMock).toHaveBeenCalledWith(productsStore);
        });
    });
});
