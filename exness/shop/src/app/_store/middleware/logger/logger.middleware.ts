import {Middleware} from 'redux';

export const loggerMiddleware: Middleware = store => next => action => {
    /* tslint:disable-next-line:no-console */
    console.log(action);
    return next(action);
};
