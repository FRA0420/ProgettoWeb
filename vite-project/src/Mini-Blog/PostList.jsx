const PostList = ({posts}) => {
    if (posts.length === 0) {
        return <p>Non sono ancora stati pubblicati post</p>
    }
    return (
        <div>
            {posts.map((post,id) => (
                <div key={id}>
                    <h3>{post.titolo}</h3>
                    <h3>{post.contenuto}</h3>
                </div>
            ))}
        </div>
    )
};

export default PostList;