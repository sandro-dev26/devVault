import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-900 w-full h-screen text-neutral-50">
      <Link to="/errors/404" className="text-4xl hover:text-neutral-300">
        404
      </Link>
      <p>Page not found.</p>

      <Link to="/" className="bg-sky-700 m-2 p-2 rounded-xl hover:bg-sky-600">
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
