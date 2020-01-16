import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../src/domains/reducers';
import effects from './domains/effects';

const effectMiddleWares = effects.map(effect => store => next => action => {
    next(action);
    effect(store,action);
});

const store = createStore(rootReducer,applyMiddleware(thunk,logger,...effectMiddleWares));
window.store = store;
export default store;