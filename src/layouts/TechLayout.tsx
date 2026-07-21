import { Outlet } from "react-router-dom";
import Foooter from "../components/Footer";

function TechLayout() {
  return (
    <div className="bg-slate-950 text-slate-50 w-full min-h-screen p-4">
      <Outlet />

      <Foooter />
    </div>
  );
}

export default TechLayout;
