function postReducer(state, action){
switch(action.type){
case "ADD_POST": {
  const newPost = action.payload.post;
  return { posts: [newPost, ...state.posts] };
}
case "DELETE_POST": {
const deletedPostId = action.payload.id;
return {posts: state.posts.filter(posts => posts.id !== deletedPostId)}
}
default:
  return state;
}
}

export default postReducer