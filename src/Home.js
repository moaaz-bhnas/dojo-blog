import { memo, useCallback, useEffect, useState } from "react";
import Blogs from "./Blogs";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = useCallback(async () => {
    const res = await fetch("http://localhost:8000/blogs");
    const data = await res.json();
    setBlogs(data);
  }, []);

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="home">
      <h2 className="home__title">Feed</h2>
      {blogs.length > 0 && <Blogs title={"All Blogs"} blogs={blogs} />}
    </div>
  );
};

export default memo(Home);
