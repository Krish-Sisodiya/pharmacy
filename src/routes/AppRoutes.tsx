import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CategoryPage from "../pages/CategoryPage";
import Auth from "../pages/Auth";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:name" element={<CategoryPage />} />
        
        {/* Authentication Routes */}
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;