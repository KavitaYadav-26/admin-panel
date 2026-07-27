import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Products from "./pages/Products";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>

      <div className="d-flex">

        <Sidebar />

        <div className="flex-grow-1">

          <Navbar />

          <Routes>

            <Route path="/" element={<Dashboard />}  />
            <Route path="/users" element={<Users />}  />
            <Route path="/products" element={<Products />}  />
            <Route path="/settings" element={<Settings />}  />
            <Route path="/login" element={<Login />} />

          </Routes>

        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;