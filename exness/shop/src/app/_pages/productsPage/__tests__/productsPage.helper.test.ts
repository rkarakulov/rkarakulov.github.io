import {IProductsStore} from 'app/_features/products/products.interface';
import {IProduct} from 'app/_features/products/product/product.interface';
import {SortDirection} from 'app/_helpers/sort/sortDirection';

const sortStableMock = jest.fn();
jest
    .resetModules()
    .doMock('app/_helpers/sort/sortStable/sortStable', () => ({
        sortStable: sortStableMock            
    }));

import {sortProducts} from 'app/_pages/productsPage/productsPage.helper';

describe('productsPage.helper', () => {
    describe('sortProducts', () => {
        const productsStore = {
            sort: {
                field: 'price',
                direction: SortDirection.desc
            },
            data: [expect.anything()]
        } as IProductsStore;
        const dest: IProduct[] = [expect.anything()];
        sortStableMock
            .mockImplementation(() => dest);    

        afterEach(() => {
            sortStableMock.mockReset();        
        });    

        test('should return result of "sortStable" function', () => {
            const actual = sortProducts(productsStore);
            const expected = dest;

            expect(actual).toEqual(expected);
        });

        test('should call "sortStable" function with correct parameters', () => {
            sortProducts(productsStore);

            expect(sortStableMock).toHaveBeenCalledTimes(1);
            expect(sortStableMock).toHaveBeenCalledWith(productsStore.data,
                productsStore.sort.field,
                productsStore.sort.direction);
        });
    });
});
