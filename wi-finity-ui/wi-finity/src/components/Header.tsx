import React from "react";

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Wi-Finity</h1>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <div className="badge">Home Network</div>
        <div className="badge">Admin</div>
      </div>
    </header>
  );
};

export default Header;