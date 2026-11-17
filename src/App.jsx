import { useState } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Students from "./pages/Students";
import Registrations from "./pages/Registrations";

import "./styles/dashboard.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <HashRouter>
      <div className="app-layout">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <div className="main-content">
          {/* Top Navigation */}
          <header className="topbar">
            <div className="d-flex align-items-center gap-3">
              <button
                className="menu-toggle d-lg-none"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open sidebar"
              >
                <i className="bi bi-list"></i>
              </button>

              <span>Admin Workspace</span>
            </div>

            <div className="admin-profile">
              <span className="d-none d-sm-inline">Administrator</span>
              <i className="bi bi-person-circle"></i>
            </div>
          </header>

          {/* Page Content */}
          <main className="dashboard-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />

              <Route path="/courses" element={<Courses />} />
              <Route path="/students" element={<Students />} />

              <Route
                path="/registrations"
                element={<Registrations />}
              />

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
