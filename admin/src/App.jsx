import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Overview from "./pages/Overview";
import Services from "./pages/Services";
import Quotations from "./pages/Quotations";
import Inquiries from "./pages/Inquiries";
import Users from "./pages/Users";
import Settings from "./pages/Settings";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/admin" element={<Overview />} />
          <Route path="/admin/services" element={<Services />} />
          <Route path="/admin/quotations" element={<Quotations />} />
          <Route path="/admin/inquiries" element={<Inquiries />} />
          <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/settings" element={<Settings />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
