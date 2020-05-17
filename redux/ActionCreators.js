import axios from 'axios';
import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';



//Fetch Data from server
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


//Fetch select Id from menu
export const fetchCategoryData = (link) => async dispatch => {
    dispatch(categoryDataLoading);

    try {
        const response = await axios.get(baseUrl + link)

        dispatch(addCategoryData(response))
    } catch(err) {
        dispatch(categoryFailed(err));
    } 
}

export const categoryFailed = errMess => ({
    type: ActionTypes.FETCH_CATEGORY_FAILED,
    payload: errMess
});

export const addCategoryData = (categoryData) => ({
    type: ActionTypes.FETCH_CATEGORY_DATA,
    payload: categoryData
});

export const categoryDataLoading = () => ({
    type: ActionTypes.FETCH_CATEGORY_LOADING,
});


//Fetch Items by the "link" from Category Component
export const fetchItemsData = (link) => async dispatch => {
    dispatch(ItemsDataLoading);

    try {
        const response = await axios.get(baseUrl + link)

        dispatch(addItemsData(response))
    } catch(err) {
        dispatch(ItemsFailed(err));
    } 
}

export const ItemsFailed = errMess => ({
    type: ActionTypes.FETCH_ITEMS_FAILED,
    payload: errMess
});

export const addItemsData = (response) => ({
    type: ActionTypes.FETCH_ITEMS_DATA,
    payload: response
});

export const ItemsDataLoading = () => ({
    type: ActionTypes.FETCH_ITEMS_LOADING,
});


//Post to Server
export const postCartItems = (cartItem) => async dispatch => {
    // dispatch(cartDataLoading);
    try {
        axios.post(baseUrl + 'cartItems', { cartItem })

        const response = await axios.get(baseUrl + 'cartItems')
        
        dispatch(addCartData(response))

    } catch(err) {
        dispatch(addCartItemFailed(err));
    }
    
}
//Update request
export const updateCartItems = (cartItem, id) => async dispatch => {
    // dispatch(cartDataLoading);
    // console.log(cartItem)
    try {
        axios.put(baseUrl + 'cartItems/' + id, { cartItem })

        const response = await axios.get(baseUrl + 'cartItems')
        
        dispatch(addCartData(response))

    } catch(err) {
        dispatch(addCartItemFailed(err));
    }
}

//delete request
export const removeCartItems = (id) => async dispatch => {
    // dispatch(cartDataLoading);
    try {
        axios.delete(baseUrl + 'cartItems/' + id, { params: { id: id } })

        const response = await axios.get(baseUrl + 'cartItems')
        
        dispatch(addCartData(response))
       
    } catch(err) {
        dispatch(addCartItemFailed(err));
    }
}

//get cart Data from server
export const fetchCartData = () => async dispatch => {
    dispatch(cartDataLoading);
    try {
        const response = await axios.get(baseUrl + 'cartItems')
        
        dispatch(addCartData(response))
    } catch(err) {
        dispatch(cartFailed(err));
    } 
};

export const cartFailed = errMess => ({
    type: ActionTypes.FETCH_CART_FAILED,
    payload: errMess
});

export const addCartData = (response) => ({
    type: ActionTypes.FETCH_CART_DATA,
    payload: response
});

export const cartDataLoading = () => ({
    type: ActionTypes.FETCH_CART_LOADING,
});

