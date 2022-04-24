import {createStore,compose,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import reducer from './reducer';

export default function configureStore(){
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    
    const middlewares = [thunkMiddleware,loggerMiddleware];
    const store = createStore(
        reducer,
        undefined,
        composeEnhancers(
            applyMiddleware(...middlewares)
        )
    );
    return store;
};
