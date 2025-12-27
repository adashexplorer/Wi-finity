import React, { useContext } from "react";
import { DeviceContext } from "../context/DeviceContext";

const DeviceMap: React.FC = () => {
  const { devices, simulateScanOnce } = useContext(DeviceContext);

  return (
    <div className="device-map" style={{ marginTop: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3>Network Scanner (Digital Map)</h3>
        <div>
          <button onClick={() => simulateScanOnce()}>Scan Now</button>
        </div>
      </div>

      <div className="floor" style={{ marginTop: 10 }}>
        {devices.map(d => (
          <div
            key={d.id}
            className="device-pin"
            title={`${d.name} • ${d.ip} • ${d.status}`}
            style={{ left: `${d.x}%`, top: `${d.y}%`, borderColor: d.status === "online" ? "#00B894" : "#FF7A59" }}
          >
            <strong style={{ fontSize: 11 }}>{d.name}</strong><br />
            <small style={{ color: "#6b7280" }}>{d.status}</small>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 8 }}>
        <small style={{ color: "#6b7280" }}>Pins show approximate device locations. This is a simulated scanner for demo purposes.</small>
      </div>
    </div>
  );
};

export default DeviceMap;