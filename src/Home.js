import { memo } from "react";
import Blogs from "./Blogs";
import useFetch from "./useFetch";

const Home = () => {
  const {
    loading,
    data: blogs,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      <h2 className="home__title">Feed</h2>
      {loading && <p>Loading ...</p>}
      {error && <p>{error}</p>}
      {blogs.length > 0 && <Blogs title={"All Blogs"} blogs={blogs} />}
    </div>
  );
};

export default memo(Home);
