import React, { useContext } from "react";
import { DeviceContext } from "../context/DeviceContext";

const NetworkHealth: React.FC = () => {
  const { devices } = useContext(DeviceContext);

  const score = Math.max(
    0,
    100 -
      devices.filter(d => d.status === "offline").length * 10 -
      devices.filter(d => d.bandwidthLimit < 40).length * 5
  );

  return (
    <div className="network-health">
      <h3>Network Health</h3>
      <div style={{ fontSize: 36, fontWeight: 700 }}>{score}</div>
      <small>{score > 80 ? "Excellent" : score > 60 ? "Fair" : "Needs Attention"}</small>
    </div>
  );
};

export default NetworkHealth;