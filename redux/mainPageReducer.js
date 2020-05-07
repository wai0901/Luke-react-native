import * as actionTypes from './ActionTypes';


export const mainPageReducer = (state = { isLoading: true,
                                            errMess: null,
                                            homeMenu: []}, action) => {

    switch(action.type) {
        case actionTypes.FETCH_MAIN_DATA:
            return {...state, isLoading: false, errMess: null, homeMenu: action.payload};

        case actionTypes.FETCH_MAIN_LOADING = 'FETCH_MAIN_LOADING':
            return {...state, isLoading: true, errMess: null, homeMenu: []}
    
        case actionTypes.FETCH_MAIN_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
}