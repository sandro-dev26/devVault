import { Outlet } from "react-router-dom";

function Authlayout() {
  return (
    <>
      <Outlet />

      <p>LOG IN</p>
    </>
  );
}

export default Authlayout;
