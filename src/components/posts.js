import {useDispatch, useSelector} from 'react-redux';
import { getPostsAsync } from '../store/actions/users.actions'

const Posts = () => {
   const dispatch = useDispatch();
   const posts = useSelector(state=>state.users.posts)

    function handlePosts(){
      dispatch(getPostsAsync());
   };

   return (

    <div>
      {(posts.length !== 0) && (
      <ol>
        {posts.map((post, index) => (<li key={index}>{post.title}</li> ))}
      </ol>
        )}        
     
      
      <button onClick={handlePosts}>Get Posts</button>
    </div>
  );
}
export default Posts;