import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="flex flex-row gap-2 bg-slate-800 text-white m-2 p-2 justify-center items-center rounded-full">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 transition-all duration-200"
              : "text-white transition-all duration-200"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 transition-all duration-200"
              : "text-white transition-all duration-200"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 transition-all duration-200"
              : "text-white transition-all duration-200"
          }
        >
          Log In
        </NavLink>
      </div>
    </>
  );
}

export default Navbar;
