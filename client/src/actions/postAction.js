import {FETCH_POSTS} from '../actions/types';
// import axios from 'axios';

// export const fetchPosts = () => {
//     dispatch(setItemsLoading());
//     axios
//         .get('/api/items')
//         .then(res =>
//             dispatch({
//                 type: FETCH_POSTS,
//                 payload: res.data
//             }))
// }

// Code that worked
export const fetchPosts = () => {
    //Thunk allows for the dispatch method to be called and we can make asynchronus requests
    return function (dispatch) {
        //changed the 'api/items' to https://bored-list.herokuapp.com/api/items
        fetch('./db.json')
        .then (res => res.json())
        .then (posts => dispatch({ 
            type: FETCH_POSTS,
            payload: posts
        }));
    }
};

// export const addArticle = (item) => { 
//     //Thunk allows for the dispatch method to be called and we can make asynchronus requests
//     return function (dispatch) {
//         axios
//         .post('/api/items', item) 
//         .then (res => 
//             dispatch({
//                 type: NEW_POST,
//                 payload: res.data
//             })
//         )
//     }
// };