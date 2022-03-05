import React from 'react';
import Login from './components/Login';
import Header from './components/Header';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';

export const UserContext = React.createContext()
export const PostContext = React.createContext({
    posts: []
});


function App(){
    const initialtate = React.useContext(PostContext)
    const [state, dispatch] = React.useReducer(() => {}, initialPostState);
    const [user, setUser] = React.useState('Mahmoud');
    // const [posts, setPosts] = React.useState([])

React.useEffect(() => {
    document.title = user ? `${user}'s Feed` : "Pleae login"; // changing the title of the webpage
}, [user]);

const handleAddPost = React.useCallback(
    newPost => {
        setPosts({newPost, ...state.posts})
    },
    [posts]
);


    if(!user){
        return <Login setUser= {setUser} />
    }

    return (
        <UserContext.Provider value={user}>
        <Header user={user} setUser ={setUser} /> 
        <CreatePost user={user} handleAddPost={handleAddPost} />
        <PostList posts={posts} />
        </UserContext.Provider>
        );
}

export default App;