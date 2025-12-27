import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => (
  <aside className="sidebar">
    <nav>
      <ul style={{ padding: 0, listStyle: "none" }}>
        <li style={{ marginBottom: 10 }}><Link to="/">Dashboard</Link></li>
        <li style={{ marginBottom: 10 }}><Link to="/settings">Settings</Link></li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;