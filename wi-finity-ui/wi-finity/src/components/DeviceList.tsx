import React, { useContext } from "react";
import DeviceCard from "./DeviceCard";
import { DeviceContext } from "../context/DeviceContext";

const DeviceList: React.FC = () => {
  const { devices } = useContext(DeviceContext);
  return (
    <section>
      <h2>Connected Devices</h2>
      <div className="device-list">
        {devices.map(d => (
          <DeviceCard key={d.id} {...d} />
        ))}
      </div>
    </section>
  );
};

export default DeviceList;