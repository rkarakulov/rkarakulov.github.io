import {createEpicMiddleware} from 'redux-observable';
import {createRootEpic} from 'app/_store/middleware/epic/root.epic';

const rootEpic = createRootEpic();
const epicOptions = {
    dependencies: {}
};

export const epicMiddleware = createEpicMiddleware(
    rootEpic,
    epicOptions,
);
