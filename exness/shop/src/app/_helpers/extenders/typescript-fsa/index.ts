import {Action as ActionFsa} from 'typescript-fsa';

declare module 'typescript-fsa' {
    //tslint:disable-next-line:no-shadowed-variable interface-name
    export interface ActionCreator<P> {
        actionType: ActionFsa<P>;
    }
}
