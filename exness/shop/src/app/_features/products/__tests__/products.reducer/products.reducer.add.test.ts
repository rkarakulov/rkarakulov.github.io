import { productsReducer, initialProductsStore } from "app/_features/products/products.reducer";
import { IProductsStore } from "app/_features/products/products.interface";
import { ProductsActions } from "app/_features/products/products.action";

describe('products.reducer', () => {
    describe('"add" action', () => {
        const startProductsStoreForAdd: IProductsStore = initialProductsStore;;
        let productData;
        
        test('should return initial state if "name" is empty', () => {
            productData = {
                name: '',
                price: 100,
                count: 2    
            };
            const action = ProductsActions.add(productData);

            const actual = productsReducer(startProductsStoreForAdd, action);        
            const expected = startProductsStoreForAdd;
    
            expect(actual).toEqual(expected);
        });

        test('should add new product if "name" is NOT empty', () => {
            productData = {                
                name: 'name',
                price: 100,
                count: 2    
            };
            const action = ProductsActions.add(productData);

            const actual = productsReducer(startProductsStoreForAdd, action);        
            const expected = {
                sort: {
                    ...startProductsStoreForAdd.sort
                },
                data: [
                    {
                        id: startProductsStoreForAdd.data[0].id + 1,
                        ...productData
                    },
                    ...startProductsStoreForAdd.data
                ]
            };
    
            expect(actual).toEqual(expected);
        });
    });   
});
