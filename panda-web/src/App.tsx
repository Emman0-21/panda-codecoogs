import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import SpendingPage from "./pages/SpendingPage";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">Products</NavLink>
        <NavLink to="/spending">Spending</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/spending" element={<SpendingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
