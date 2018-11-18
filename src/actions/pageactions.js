import { CHANGEPAGE } from './types';

export const changePage = (page) => dispatch => {
    dispatch({
        type: CHANGEPAGE,
        payload: {
            currentPage: page
        }
    });
} 