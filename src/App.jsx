import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/ErrorPages/NotFound";
import ServiceLayout from "./pages/Services/ServiceLayout";
import TrainingSection from "./pages/Services/TrainingSection";
import AboutUsPage from "./pages/AboutUs/AboutUsPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<AboutUsPage />} />{" "}
        <Route path="/services/:slug" element={<ServiceLayout />} />{" "}
        <Route path="/services/training" element={<TrainingSection />} />{" "}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
