import { Link } from "react-router-dom";

function Error404Explained() {
  return (
    <div className="flex flex-col p-4 bg-slate-900 w-full h-screen text-neutral-50">
      <h1 className="text-xl mb-4 font-semibold">What is 404?</h1>
      <p>
        404 is a standard HTTP status code. When your browser sends a request to
        a server, the server checks its "map" (the routing) to see if that
        destination exists. If the server cannot locate the specific resource
        you asked for, it sends back a 404 status. It is the web's primary way
        of maintaining order; it lets you know that while the server itself is
        functioning perfectly, the specific content you are looking for is
        either no longer there, was never there, or has been moved to a new
        home.
      </p>

      <Link
        to="/"
        className="flex justify-center items-center bg-sky-700 m-2 p-2 rounded-xl w-24 hover:bg-sky-600"
      >
        Go Home
      </Link>
    </div>
  );
}

export default Error404Explained;
