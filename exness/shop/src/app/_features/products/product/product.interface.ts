export interface IProduct {
    id: number;
    name: string;
    price: number;
    count: number;
}

export interface IProductPartial extends Partial<IProduct> {
    name: string;
    price: number;
    count: number;
}
