import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Overview from "./pages/Overview";
import Services from "./pages/Services";
import Settings from "./pages/Settings";
import Staff from "./pages/Staff";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={
        <div className="flex min-h-screen bg-gray-100">
          <Sidebar onLogout={handleLogout} />
          <div className="flex-1 flex flex-col ml-64">
            <Header />
            <main className="flex-grow p-6">
              <Routes>
                <Route element={<PrivateRoute />}>
                  <Route path="/admin" element={<Overview />} />
                  <Route path="/admin/services" element={<Services />} />
                  <Route path="/admin/staff" element={<Staff />} />
                  <Route path="/admin/settings" element={<Settings />} />
                  <Route path="/" element={<Navigate to="/admin" replace />} />
                </Route>
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      } />
    </Routes>
  );
}

export default App;
