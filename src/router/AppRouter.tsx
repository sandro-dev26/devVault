import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import LogIn from "../pages/Login";
import NotFound from "../pages/NotFound";
import MainRoute from "../layouts/MainLayout";
import Authlayout from "../layouts/AuthLayout";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>

        <Route element={<Authlayout />}>
          <Route path="/login" element={<LogIn />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
