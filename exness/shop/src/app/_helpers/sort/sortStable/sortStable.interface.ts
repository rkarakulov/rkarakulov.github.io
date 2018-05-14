export interface ISortStableComparator<T> {
    (a: T, b: T): number;
}
