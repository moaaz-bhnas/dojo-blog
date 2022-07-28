import { memo } from "react";
import { Link } from "react-router-dom";

const Blogs = ({ title, blogs }) => {
  return (
    <section>
      <h2>{title}</h2>

      <ul className="blogs">
        {blogs.map((blog) => (
          <li className="blogs__item" key={blog.id}>
            <Link className="blogs__link" to={`/blogs/${blog.id}`}>
              <h3 className="blogs__title">{blog.title}</h3>
              <p className="blogs__author">Written by {blog.author}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default memo(Blogs);
