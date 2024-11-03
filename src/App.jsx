import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/Homepage";
import Products from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route index element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="product" element={<Products />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<p>LIST OF CITIES</p>} />
          <Route path="cities" element={<p>List of cities</p>} />
          <Route path="countries" element={<p>List of countries</p>} />
          <Route path="form" element={<p>Form</p>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
