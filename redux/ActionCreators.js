import axios from 'axios';
import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';


export const fetchMainData = () => async dispatch => {
    dispatch(mainDataLoading);
    try {
        const response = await axios.get(baseUrl + 'homeMenu')
        
        dispatch(addMainData(response))
    } catch(err) {
        dispatch(mainFailed(err));
    } 
};


export const mainFailed = errMess => ({
    type: ActionTypes.FETCH_MAIN_FAILED,
    payload: errMess
});

export const addMainData = (mainData) => ({
    type: ActionTypes.FETCH_MAIN_DATA,
    payload: mainData
});

export const mainDataLoading = () => ({
    type: ActionTypes.FETCH_MAIN_LOADING,
});