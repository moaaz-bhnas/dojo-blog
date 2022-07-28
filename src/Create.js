import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("hazem");
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const blog = { title, body, author };
      setLoading(true);

      await fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      });
      setLoading(false);
      history.push("/");
    },
    [title, body, author]
  );

  return (
    <div className="create">
      <h2 className="create__title">Add a new blog</h2>

      <form onSubmit={handleSubmit} className="createForm">
        <label className="createForm__label" htmlFor="title">
          Blog title:
        </label>
        <input
          className="createForm__control"
          type="text"
          id="title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label className="createForm__label" htmlFor="body">
          Blog body:
        </label>
        <textarea
          className="createForm__control"
          id="body"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label className="createForm__label" htmlFor="author">
          Blog author:
        </label>
        <select
          className="createForm__control"
          id="author"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="hazem">Hazem</option>
          <option value="nasr">Nasr</option>
        </select>

        <button
          className="createForm__button"
          type="submit"
          disabled={loading ? true : false}
        >
          {loading ? "Adding blog .." : "Add blog"}
        </button>
      </form>
    </div>
  );
}

export default Create;
