import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import { homeMenuList } from '../shared/homeMenuList';
import { mainPageReducer } from './mainPageReducer';


export const configureStore = () => {
    const store = createStore(
        combineReducers({
            mainPage: mainPageReducer
        }),
        applyMiddleware(thunk)
    );

    return store;
}
 