import { memo } from "react";

const Blogs = ({ title, blogs }) => {
  return (
    <section>
      <h2>{title}</h2>

      <ul className="blogs">
        {blogs.map((blog) => (
          <li className="blogs__item" key={blog.id}>
            <h3 className="blogs__title">{blog.title}</h3>
            <p className="blogs__body">{blog.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default memo(Blogs);
