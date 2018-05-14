import {RouterState} from 'react-router-redux';

export type IRouterStore = RouterState;

export interface IRouterStoreSegment {
    router: IRouterStore;
}
