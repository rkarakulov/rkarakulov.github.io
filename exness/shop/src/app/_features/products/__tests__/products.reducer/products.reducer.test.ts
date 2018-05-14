import {initialProductsStore, productsReducer} from 'app/_features/products/products.reducer';
import {dummyAction} from '../../../../../../tasks/test/jest/dummyAction';

describe('products.reducer', () => {
    test('should return initial state for unknown action', () => {
        const action = dummyAction();

        const actual = productsReducer(undefined, action);
        const expected = initialProductsStore;

        expect(actual).toEqual(expected);
    });
});
