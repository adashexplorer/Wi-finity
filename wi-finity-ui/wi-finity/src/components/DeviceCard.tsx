import React, { useContext } from "react";
import BandwidthControl from "./BandwidthControl";
import { DeviceContext } from "../context/DeviceContext";
import { Link } from "react-router-dom";

type Props = {
  id: string;
  name: string;
  ip: string;
  status: "online" | "offline";
  mac: string;
  bandwidthLimit: number;
};

const DeviceCard: React.FC<Props> = ({ id, name, ip, status, mac, bandwidthLimit }) => {
  const { updateDevice } = useContext(DeviceContext);

  return (
    <div className={`device-card ${status}`}>
      <h3>{name}</h3>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
        <div>
          <div style={{ fontSize: 13, color: "#6b7280" }}>{ip}</div>
          <div style={{ fontSize: 12, color: "#9ca3af" }}>{mac}</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div className="badge">{status.toUpperCase()}</div>
          <div style={{ marginTop: 6 }}>
            <Link to={`/device/${id}`}><button className="secondary">Details</button></Link>
          </div>
        </div>
      </div>

      <BandwidthControl id={id} limit={bandwidthLimit} onChange={(did, v) => updateDevice(did, { bandwidthLimit: v })} />
    </div>
  );
};

export default DeviceCard;