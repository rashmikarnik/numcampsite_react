import * as ActionTypes from './ActionTypes';
import { CAMPSITES } from '../shared/campsites';

export const addComment = (campsiteId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        campsiteId: campsiteId,
        rating: rating,
        author: author,
        text: text
    }
});

//redux Thunk Syntax with two arrows
export const fetchCampsites = () => dispatch => {

    dispatch(campsiteLoading());

    setTimeout(() => {
            dispatch(addCampsites(CAMPSITES));
    }, 2000);
};

export const campsiteLoading = () => ({
    type: ActionTypes.CAMPSITES_LOADING
});

export const campsitesFailed = errMess => ({
    type: ActionTypes.CAMPSITES_FAILED,
    payload: errMess
});

export const addCampsites = campsites =>({
    type: ActionTypes.ADD_CAMPSITES,
    payload: campsites
});