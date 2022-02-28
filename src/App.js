import React from 'react';
import Login from './components/Login';
import Header from './components/Header';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';


function App(){
    const [user, setUser] = React.useState('Mahmoud');
    const [posts, setPosts] = React.useState([])

React.useEffect(() => {
    document.title = user ? `${user}'s Feed` : "Pleae login"; // changing the title of the webpage
}, [user]);


function handleAddPost(newPost){
 setPosts([newPost, ...posts]);
}

    if(!user){
        return <Login setUser= {setUser} />
    }

    return (
        <>
        <Header user={user} setUser = {setUser} /> 
        <CreatePost user={user} handleAddPost={handleAddPost} />
        <PostList posts = {posts} />
        </>
        );
}

export default App;