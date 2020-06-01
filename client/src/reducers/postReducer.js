import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    //The list of article object displayed
    items: [],
    //The article we add
    item: {},
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        case NEW_POST:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        default:
            return state
    }
}