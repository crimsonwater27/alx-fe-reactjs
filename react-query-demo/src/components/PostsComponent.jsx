import { useQuery } from "react-query";

function PostsComponent() {
  const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
  };

  const {
    data,
    isLoading,
    isError,
    error,
    refetch
  } = useQuery("posts", fetchPosts);

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>

      <button onClick={() => refetch()}>
        Refetch Posts
      </button>

      {data.slice(0, 10).map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostsComponent;
