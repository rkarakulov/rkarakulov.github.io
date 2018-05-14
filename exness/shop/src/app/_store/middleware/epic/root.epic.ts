import 'rxjs';
import 'app/_helpers/extenders/redux-observable/isTypeOf';
import {AnyAction} from 'typescript-fsa';
import {ActionsObservable, combineEpics} from 'redux-observable';
import {Dispatch, MiddlewareAPI} from 'redux';
import {IStore} from 'app/_store/store.interface';
import {Observable} from 'rxjs';
import {productsEpic} from 'app/_features/products/products.epic';
import {IEpic, IEpicDependencies} from 'app/_store/middleware/epic/root.epic.interface';

export function createRootEpic(): IEpic<AnyAction, IStore, IEpicDependencies> {
    const rootEpic = combineEpics(
        productsEpic
    );

    return (action$: ActionsObservable<AnyAction>,
            store: MiddlewareAPI<Dispatch, IStore>,
            dependencies: IEpicDependencies): Observable<any> => {
        return rootEpic(action$, store, dependencies)
            .catch((error: any, source: Observable<AnyAction>) => {
                console.error(error, source);
                return source;
            });
    };
}
