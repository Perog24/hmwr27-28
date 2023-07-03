import { LOAD_USERS } from "../constants" ;
import { usersInitStore } from "../store";

export const users = () => (state = usersInitStore, action) => {
   switch(action.type){
      case LOAD_USERS: {
         return {
            ...state, 
            users : action.payload
         }
      }      
      default: return state;
   }
}