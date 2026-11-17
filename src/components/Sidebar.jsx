
import { NavLink } from "react-router-dom";

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={onClose}
        ></div>
      )}

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>

        {/* Logo */}
        <div className="sidebar-logo">
          <i className="bi bi-mortarboard-fill"></i>
          <span>Improve AC</span>
        </div>

        <p className="sidebar-label">MANAGEMENT</p>

        {/* Navigation */}
        <nav className="sidebar-nav">

          <NavLink to="/" end onClick={onClose}>
            <i className="bi bi-grid-1x2"></i>
            Dashboard
          </NavLink>

          <NavLink to="/courses" onClick={onClose}>
            <i className="bi bi-book"></i>
            Courses
          </NavLink>

          <NavLink to="/students" onClick={onClose}>
            <i className="bi bi-people"></i>
            Students
          </NavLink>

          <NavLink to="/registrations" onClick={onClose}>
            <i className="bi bi-clipboard-check"></i>
            Registrations
          </NavLink>

        </nav>

        <div className="sidebar-footer">
          Improve AC · Admin Panel
        </div>

      </aside>
    </>
  );
}

export default Sidebar;
