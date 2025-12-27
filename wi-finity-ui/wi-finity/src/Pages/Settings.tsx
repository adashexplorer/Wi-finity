import React from "react";

const Settings: React.FC = () => {
  return (
    <div>
      <h2>Settings</h2>
      <p>Wi-Finity currently runs in demo mode. Integrate with your router backend to enable real scanning & actions.</p>
      <p>Planned integrations: vendor router APIs, SNMP, UPnP, local agents, WebSocket for live push.</p>
    </div>
  );
};

export default Settings;