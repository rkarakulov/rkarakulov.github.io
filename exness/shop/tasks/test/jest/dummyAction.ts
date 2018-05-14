import actionCretorFactory from 'typescript-fsa';

const actionCreator = actionCretorFactory('Test');

export const dummyAction = actionCreator('DummyAction');