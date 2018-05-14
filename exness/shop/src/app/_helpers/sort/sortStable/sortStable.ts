import { SortDirection } from 'app/_helpers/sort/sortDirection';
import { ISortStableComparator } from 'app/_helpers/sort/sortStable/sortStable.interface';

export function sortStable<T>(source: T[], key: keyof T, direction: SortDirection): T[] {
  const comparator =
    direction === SortDirection.asc
      ? ascComparatorFactory(key)
      : descComparatorFactory(key);

  let stabilized = source.map((el, index) => <[T, number]>[el, index]);
  let stableCmp: ISortStableComparator<[T, number]> = (a, b) => {
    let order = comparator(a[0], b[0]);
    if (order != 0) return order;
    return a[1] - b[1];
  };

  stabilized.sort(stableCmp);
  for (let i = 0; i < source.length; i++) {
    source[i] = stabilized[i][0];
  }

  return source;
}

function ascComparatorFactory<T>(key: keyof T): ISortStableComparator<T> {
  return (a: T, b: T): number => {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  };
}

function descComparatorFactory<T>(key: keyof T): ISortStableComparator<T> {
  return (a: T, b: T): number => {
    if (a[key] < b[key]) return 1;
    if (a[key] > b[key]) return -1;
    return 0;
  };
}
