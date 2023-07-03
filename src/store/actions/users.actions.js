import {LOAD_USERS, LOAD_POSTS, LOAD_COMMENTS} from '../constants';

export const loadUsersAction = (payload) => ({
   type: LOAD_USERS,
   payload
});

export const getUsersAsync = () => dispatch => {
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(users => dispatch(loadUsersAction(users)))
   .catch((err)=>console.log("err:", err))

}