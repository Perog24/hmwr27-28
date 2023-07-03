import {MULTYPLTWO, DIVIDETWO, SETZERO} from '../constants';
import {counterInitStore} from '../store'

export const counter = (store = counterInitStore, action) => {
   switch(action.type){
      case MULTYPLTWO: return {
         ...store,
         counter : store.counter * 2
      }
      case DIVIDETWO: return {
         ...store,
         counter : store.counter / 2
      }
      case SETZERO: return {
         ...store,
         counter : 1
      }
      default: return store;
      };
}