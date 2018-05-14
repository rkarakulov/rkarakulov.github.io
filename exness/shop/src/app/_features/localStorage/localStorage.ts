import {IStore} from 'app/_store/store.interface';

const localStorageKey = 'state';

export function loadStore(): IStore | undefined {
    try {
        const serializedState = localStorage.getItem(localStorageKey);
        return serializedState ?
            JSON.parse(serializedState)
            : undefined;
    }
    catch (error) {
        console.error(`Error ocured when load store: ${ error }`);
        return undefined;
    }
}

export function saveStore(state: IStore): void {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(localStorageKey, serializedState);
    }
    catch (error) {
        console.error(`Error ocured when save store: ${ error }`);
    }
}
