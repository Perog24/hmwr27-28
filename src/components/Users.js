import {useEffect} from 'react';
import { connect } from 'react-redux';
import {useDispatch, useSelector} from 'react-redux';
import { getUsersAsync } from '../store/actions/users.actions'

export const Users = () => {
   const dispatch = useDispatch();
   const users = useSelector(state=>state.users.users)

    useEffect(()=>{
      dispatch(getUsersAsync());
   }, [dispatch]);
   console.log(users);

   return (
      <>
      <h3>Users</h3>
      <div>

      </div>
      </>
   )
}
export default connect(mapStateToProps, mapDispatchToProps )(Users)