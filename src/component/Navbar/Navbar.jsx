import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-blue-100 p-4 shadow-md rounded-lg w-11/12 mx-auto">
      
      {/* Left: Title */}
      <div className="text-xl font-bold text-blue-800">
        Book Vibe
      </div>

      {/* Middle: Links */}
      <div className="space-x-4 text-blue-600 font-medium">
        <NavLink to={'/'} className="hover:underline">Home</NavLink>
        <NavLink to={'/bookmark'} className="hover:underline">Listed Books</NavLink>
        <NavLink to={'/pagess'} className="hover:underline">Pages to Read</NavLink>
      </div>

      {/* Right: Buttons */}
      <div className="space-x-2">
        <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition">
          Login
        </button>
        <button className="bg-gray-300 text-gray-800 px-4 py-1 rounded hover:bg-gray-400 transition">
          Signup
        </button>
      </div>
      
    </nav>
  )
}
