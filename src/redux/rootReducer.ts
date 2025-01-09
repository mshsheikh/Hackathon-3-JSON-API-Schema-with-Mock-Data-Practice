import { combineReducers } from 'redux';

// import slices
import loginSlice from './reducers/loginSlice';

const rootReducer = combineReducers({
    login: loginSlice,
});

export default rootReducer;