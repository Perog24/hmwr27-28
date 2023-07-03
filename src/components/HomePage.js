import { Fragment } from 'react';

export const HomeGage = () => {

   function getUsers(){

   }
   function getPosts(){

   }
   function getComments(){
      
   }
   return (
      <Fragment>
         <h3>Home page</h3>
         <button onClick = {getUsers}>Users</button>
         <button onClick = {getPosts}>Posts</button>
         <button onClick = {getComments}>Comments</button>
      </Fragment>
   )
}