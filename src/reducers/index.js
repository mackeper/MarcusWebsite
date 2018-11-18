import { combineReducers } from 'redux';
import testReducer from './reducer';
import pageReducer from './pagereducer';

export default combineReducers({
    test: testReducer,
    page: pageReducer
});