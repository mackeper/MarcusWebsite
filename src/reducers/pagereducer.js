import { CHANGEPAGE } from '../actions/types';

const initailState = {
    currentPage: 0,
}

export default (state = initailState, action) => {
    switch(action.type) {
        case CHANGEPAGE:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}