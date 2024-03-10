// rootReducer.js
import { combineReducers } from 'redux';
import userReducer from './/User';

const rootReducer = combineReducers({
    user: userReducer,
});

export default rootReducer;