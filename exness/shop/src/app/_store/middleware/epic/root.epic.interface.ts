import {AnyAction} from 'typescript-fsa';
import {ActionsObservable} from 'redux-observable';
import {Dispatch, MiddlewareAPI} from 'redux';
import {Observable} from 'rxjs';

export interface IEpicDependencies {
}

export type IEpic<T extends AnyAction, S, D = {}> = (action$: ActionsObservable<T>,
                                                     store: MiddlewareAPI<Dispatch, S>,
                                                     dependencies: D) => Observable<T>;
