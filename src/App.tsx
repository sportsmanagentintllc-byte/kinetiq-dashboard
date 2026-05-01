import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import FxQuote from "./pages/FxQuote";
import Transfer from "./pages/Transfer";
import Deposit from "./pages/Deposit";

function App() {
  const token = localStorage.getItem("kinetiq_token");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/fx" element={token ? <FxQuote /> : <Navigate to="/login" />} />
        <Route path="/transfer" element={token ? <Transfer /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to={token ? "/dashboard" : "/login"} />} />
        <Route path="/deposit" element={token ? <Deposit /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;