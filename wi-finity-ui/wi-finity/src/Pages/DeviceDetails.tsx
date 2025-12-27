import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { DeviceContext } from "../context/DeviceContext";

const DeviceDetails: React.FC = () => {
  const { id } = useParams();
  const { devices, updateDevice } = useContext(DeviceContext);
  const dev = devices.find(d => d.id === id);

  if (!dev) return <div><p>Device not found</p><Link to="/">Back</Link></div>;

  return (
    <div style={{ maxWidth: 720 }}>
      <h2>{dev.name}</h2>
      <p><strong>IP</strong>: {dev.ip}</p>
      <p><strong>MAC</strong>: {dev.mac}</p>
      <p><strong>Status</strong>: {dev.status}</p>
      <p><strong>Bandwidth Limit</strong>: {dev.bandwidthLimit} Mbps</p>
      <div style={{ marginTop: 12 }}>
        <label>Set Limit:</label>
        <input type="range" min={0} max={1000} value={dev.bandwidthLimit}
               onChange={(e) => updateDevice(dev.id, { bandwidthLimit: Number(e.target.value) })} />
      </div>
      <div style={{ marginTop: 12 }}>
        <Link to="/"><button>Back to dashboard</button></Link>
      </div>
    </div>
  );
};

export default DeviceDetails;