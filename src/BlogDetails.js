import { useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

function BlogDetails() {
  const { id } = useParams();
  const history = useHistory();

  const {
    data: blog,
    loading,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

  console.log("blog: ", blog);

  const deleteBlog = useCallback(async () => {
    await fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    });
    history.push("/");
  }, []);

  return (
    <div className="blogDetails">
      {loading && <p>Loading ...</p>}
      {error && <p>{error}</p>}
      {blog && (
        <article>
          <h2 className="blogDetails__title">{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <p>{blog.body}</p>
          <button onClick={deleteBlog} className="blogDetails__button">
            Delete
          </button>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
