import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import DeviceDetails from "./pages/DeviceDetails";
import Settings from "./pages/Settings";
import { DeviceProvider } from "./context/DeviceContext";

const App: React.FC = () => (
  <DeviceProvider>
    <Router>
      <Header />
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/device/:id" element={<DeviceDetails />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  </DeviceProvider>
);

export default App;