import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="flex flex-row gap-2 bg-slate-50 m-4 mb-12 p-2 justify-center items-center rounded-full w-60 h-12 justify-self-center transition-all duration-200 hover:bg-slate-200">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive
              ? "text-slate-50 transition-all duration-200 bg-slate-800 p-2 rounded-full"
              : "text-slate-950 transition-all duration-200 p-2"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-slate-50 transition-all duration-200 bg-slate-800 p-2 rounded-full"
              : "text-slate-950 transition-all duration-200 p-2"
          }
        >
          About
        </NavLink>
      </div>
    </>
  );
}

export default Navbar;
