import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notFound">
      <p>
        Sorry
        <br />
        That page cannot be found
      </p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default NotFound;
