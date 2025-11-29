import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import About from "./pages/About.jsx";

const AppRoutes = () => {
  return (
  <>
   <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Products" element={<Products/>} />
        <Route path="/About" element={<About/>} />
    </Routes> 
  </> 
  );
};

export default AppRoutes;