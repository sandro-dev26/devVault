import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Error404Explained from "../pages/NotfoundExplained";
import TecnologyPage from "../pages/TecnologyPage";
import TecnologyDetails from "../pages/TechnologyDetails";
import MainRoute from "../layouts/MainLayout";
import TechLayout from "../layouts/TechLayout";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>

        <Route element={<TechLayout />}>
          <Route path="/:sectionId" element={<TecnologyPage />} />
          <Route path="/:sectionId/:id" element={<TecnologyDetails />} />
        </Route>

        <Route path="*" element={<NotFound />} />
        <Route path="/errors/404" element={<Error404Explained />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
