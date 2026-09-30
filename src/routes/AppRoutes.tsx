import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CategoryPage from "../pages/CategoryPage";
import EnquiryPage from "../pages/EnquiryPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:name" element={<CategoryPage />} />
      <Route path="/enquiry" element={<EnquiryPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;