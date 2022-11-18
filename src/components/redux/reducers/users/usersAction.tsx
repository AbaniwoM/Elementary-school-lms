import actionTypes from './users.actionTypes';

const usersLoadStart = () => ({
    type: actionTypes.USERS_LOAD_START
});

const usersLoadSuccess = (quotes:any) => ({
    type: actionTypes.USERS_LOAD_SUCCESS,
    payload: quotes
});

const usersLoadError = (errorMessage:any) => ({
    type: actionTypes.USERS_LOAD_ERROR,
    payload: errorMessage
});

export default {
    usersLoadStart,
    usersLoadSuccess,
    usersLoadError,
};