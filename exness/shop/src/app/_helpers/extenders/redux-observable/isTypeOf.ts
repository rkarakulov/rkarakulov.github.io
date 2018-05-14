import {Observable} from 'rxjs';
import {filter} from 'rxjs/operator/filter';
import {ActionsObservable} from 'redux-observable';
import {Action, ActionCreator, AnyAction, AsyncActionCreators, Failure, Success} from 'typescript-fsa';
import 'app/_helpers/extenders/typescript-fsa';

declare module 'redux-observable' {
    // tslint:disable:interface-name
    // tslint:disable:no-shadowed-variable

    interface ActionsObservable<T extends AnyAction> extends Observable<T> {
        actionType: T;

        isTypeOf<P>(actionCreator: ActionCreator<P>): ActionsObservable<Action<P>>;

        isTypeOf<P1, P2>(actionCreator1: ActionCreator<P1>,
                         actionCreator2: ActionCreator<P2>): ActionsObservable<Action<P1> | Action<P2>>;

        isTypeOf<P1, P2, P3>(actionCreator1: ActionCreator<P1>,
                             actionCreator2: ActionCreator<P2>,
                             actionCreator3: ActionCreator<P3>): ActionsObservable<Action<P1> | Action<P2>
            | Action<P3>>;

        isTypeOf<P1, P2, P3, P4>(actionCreator1: ActionCreator<P1>,
                                 actionCreator2: ActionCreator<P2>,
                                 actionCreator3: ActionCreator<P3>,
                                 actionCreator4: ActionCreator<P4>): ActionsObservable<Action<P1> | Action<P2>
            | Action<P3> | Action<P4>>;

        isTypeOf<P1, P2, P3, P4, P5>(actionCreator1: ActionCreator<P1>,
                                     actionCreator2: ActionCreator<P2>,
                                     actionCreator3: ActionCreator<P3>,
                                     actionCreator4: ActionCreator<P4>,
                                     actionCreator5: ActionCreator<P5>): ActionsObservable<Action<P1> | Action<P2>
            | Action<P3> | Action<P4> | Action<P5>>;

        isTypeOf<P1, P2, P3, P4, P5, P6>(actionCreator1: ActionCreator<P1>,
                                         actionCreator2: ActionCreator<P2>,
                                         actionCreator3: ActionCreator<P3>,
                                         actionCreator4: ActionCreator<P4>,
                                         actionCreator5: ActionCreator<P5>,
                                         actionCreator6: ActionCreator<P6>): ActionsObservable<Action<P1> | Action<P2>
            | Action<P3> | Action<P4> | Action<P5> | Action<P6>>;

        isTypeOf<P1, P2, P3, P4, P5, P6, P7>(actionCreator1: ActionCreator<P1>,
                                             actionCreator2: ActionCreator<P2>,
                                             actionCreator3: ActionCreator<P3>,
                                             actionCreator4: ActionCreator<P4>,
                                             actionCreator5: ActionCreator<P5>,
                                             actionCreator6: ActionCreator<P6>,
                                             actionCreator7: ActionCreator<P7>): ActionsObservable<Action<P1>
            | Action<P2> | Action<P3> | Action<P4> | Action<P5> | Action<P6> | Action<P7>>;

        isTypeOfAsync<P, S, E>(actionCreators: AsyncActionCreators<P, S, E>): ActionsObservable<Action<P>
            | Action<Success<P, S>> | Action<Failure<P, E>>>;

        //isTypeOf(...actionCreators: ActionCreator<any>[]): ActionsObservable<any>;
        isTypeOfAndGetPayload<P>(actionCreator: ActionCreator<P>): Observable<P>;
    }
}

ActionsObservable.prototype.isTypeOf = isTypeOf;

function isTypeOf(this: ActionsObservable<any>,
                  ...actionCreators: ActionCreator<any>[]): ActionsObservable<any> {
    return filter.call(this, (action: Action<any> // tslint:disable-line:no-invalid-this
    ) => actionCreators.some(actionCreator => actionCreator.type === action.type));
}

ActionsObservable.prototype.isTypeOfAsync = isTypeOfAsync;

function isTypeOfAsync(this: ActionsObservable<any>,
                       actionCreators: AsyncActionCreators<any, any, any>): ActionsObservable<any> {
    const {started, failed, done} = actionCreators;
    return isTypeOf.call(this, [started, failed, done]);
}

ActionsObservable.prototype.isTypeOfAndGetPayload = isTypeOfAndGetPayload;

function isTypeOfAndGetPayload<P>(this: ActionsObservable<any>,
                                  actionCreator: ActionCreator<P>): Observable<P> {
    return this.isTypeOf(actionCreator).map((action: Action<P>) => action.payload); // tslint:disable-line:no-invalid-this
}
