import { useState } from "react";

const BlogApp = () => {
    const [posts,setPosts] = useState([]);
    const aggiungiPost = (nuovoPost) => {
        setPosts((prevPost) => [...prevPost,nuovoPost]);
    }
    return (
        <div>
            <PostForm aggiungipost={aggiungiPost}></PostForm>
            <PostList posts={posts}></PostList>
        </div>
    )
};

export default BlogApp;
