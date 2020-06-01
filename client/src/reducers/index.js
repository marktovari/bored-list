//Root reducer to bring together all the other reducers
import { combineReducers } from 'redux'
import postReducer from "./postReducer"

export default combineReducers({
    posts: postReducer
});