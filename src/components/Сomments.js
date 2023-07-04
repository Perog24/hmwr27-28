import {useDispatch, useSelector} from 'react-redux';
import { getCommentsAsync } from '../store/actions/users.actions'

const Comments = () => {
   const dispatch = useDispatch();
   const comments = useSelector(state=>state.users.comments)

    function handleComments(){
      dispatch(getCommentsAsync());
   };

   return (

    <div>
      {(comments.length !== 0) && (
      <ol>
        {comments.map((comment, index) => (<li key={index}>{comment.name}</li> ))}
      </ol>
        )}        
     
      
      <button onClick={handleComments}>Get Comments</button>
    </div>
  );
}
export default Comments;