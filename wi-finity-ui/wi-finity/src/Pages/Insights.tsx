import React, { useContext } from "react";
import { DeviceContext } from "../context/DeviceContext";

const Insights: React.FC = () => {
  const { devices } = useContext(DeviceContext);

  return (
    <div>
      <h2>Network Insights</h2>

      <ul>
        {devices
          .filter(d => d.bandwidthLimit < 40)
          .map(d => (
            <li key={d.id}>
              {d.name} may experience slowdowns due to low bandwidth
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Insights;