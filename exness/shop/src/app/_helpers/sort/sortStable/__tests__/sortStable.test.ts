import {sortStable} from 'app/_helpers/sort/sortStable/sortStable';
import {SortDirection} from 'app/_helpers/sort/sortDirection';

interface ITestObject {
    id: number;
    text: string;
}

describe('sortStable', () => {
    const sortFieldKey = 'text';
    const source: ITestObject[] = [
        {
            id: 1,
            text: 'a'
        },
        {
            id: 2,
            text: 'b'
        },
        {
            id: 3,
            text: 'c'
        },
        {
            id: 4,
            text: 'a'
        },
        {
            id: 5,
            text: 'c'
        },
        {
            id: 6,
            text: 'a'
        }
    ];

    test('should sort stable by asc direction', () => {
        const actual = sortStable<ITestObject>(source, sortFieldKey, SortDirection.asc);
        const expected: ITestObject[] = [
            {
                id: 1,
                text: 'a'
            },
            {
                id: 4,
                text: 'a'
            },
            {
                id: 6,
                text: 'a'
            },
            {
                id: 2,
                text: 'b'
            },
            {
                id: 3,
                text: 'c'
            },
            {
                id: 5,
                text: 'c'
            }
        ];

        expect(actual).toEqual(expected);
    });

    test('should sort stable by asc direction', () => {
        const actual = sortStable<ITestObject>(source, sortFieldKey, SortDirection.desc);
        const expected: ITestObject[] = [
            {
                id: 3,
                text: 'c'
            },
            {
                id: 5,
                text: 'c'
            },
            {
                id: 2,
                text: 'b'
            },
            {
                id: 1,
                text: 'a'
            },
            {
                id: 4,
                text: 'a'
            },
            {
                id: 6,
                text: 'a'
            }
        ];

        expect(actual).toEqual(expected);
    });
});
