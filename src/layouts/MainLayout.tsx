import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Mainlayout() {
  return (
    <>
      <Navbar />

      <Outlet />

      <h2>Footer</h2>
    </>
  );
}

export default Mainlayout;
