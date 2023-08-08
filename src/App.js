import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Master from "./pages/Master";
import Transactions from "./pages/Transactions";
import Reports from "./pages/Reports";
import ResponsiveAppBar from "./components/AppbarComponent";

function App() {
  return (
    <>
      <ResponsiveAppBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Master" element={<Master />} />
        <Route path="Transactions" element={<Transactions />} />
        <Route path="Reports" element={<Reports />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
