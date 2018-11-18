import { TYPE } from './types';

export const example = () => dispatch => {
    dispatch({
        type: TYPE,
        payload: {
            test: "helo"
        }
    });
} 