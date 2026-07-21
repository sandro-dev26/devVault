import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="flex flex-row gap-2 bg-slate-800 m-4 mb-12 p-2 justify-center items-center rounded-full w-34 h-12 justify-self-center transition-all duration-200 hover:bg-slate-700 hover:scale-110">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive
              ? "text-neutral-50 bg-slate-900 transition-all duration-200 hover:bg-slate-800 hover:scale-110 p-2 rounded-full"
              : "text-neutral-50 p-2 transition-all duration-200 hover:text-neutral-300 active:scale-90"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-neutral-50 bg-slate-900 transition-all duration-200 hover:bg-slate-800 hover:scale-110 p-2 rounded-full"
              : "text-neutral-50 p-2 transition-all duration-200 hover:text-neutral-300 active:scale-90"
          }
        >
          About
        </NavLink>
      </div>
    </>
  );
}

export default Navbar;
