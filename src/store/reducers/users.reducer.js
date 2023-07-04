import { LOAD_USERS, LOAD_POSTS, LOAD_COMMENTS } from "../constants" ;
import { usersInitStore } from "../store";

export const users = (store = usersInitStore, action) => {
   switch(action.type){
      case LOAD_USERS: {
         return {
            ...store, 
            users: action.payload
         };
      } 
      case LOAD_POSTS: {
         return {
            ...store,
            posts: action.payload
         }
      } 
      case LOAD_COMMENTS:{
         return {
            ...store,
            comments: action.payload
         }
      }
      default: return store;
   }
}