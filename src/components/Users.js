import {useDispatch, useSelector} from 'react-redux';
import { getUsersAsync } from '../store/actions/users.actions'

const Users = () => {
   const dispatch = useDispatch();
   const users = useSelector(state=>state.users.users)

    function handleUsers(){
      dispatch(getUsersAsync());
   };

   return (

    <div>
      {(users.length !== 0) && (
      <ol>
        {users.map((user, index) => (<li key={index}>{user.name}</li> ))}
      </ol>
        )}        
     
      
      <button onClick={handleUsers}>Get Users</button>
    </div>
  );
}
export default Users;