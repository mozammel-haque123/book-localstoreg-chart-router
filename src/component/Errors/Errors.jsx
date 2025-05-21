import { Link, useRouteError } from "react-router-dom";
export default function Errors() {
      const error = useRouteError();
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-bold text-red-500 mb-4">Oops!</h1>
      <p className="text-xl font-semibold mb-2">Something went wrong.</p>
      <p className="text-gray-600 mb-4">
        {error?.statusText || error?.message || "Page not found"}
      </p>
      <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Go to Home
      </Link>
    </div>
  )
}
