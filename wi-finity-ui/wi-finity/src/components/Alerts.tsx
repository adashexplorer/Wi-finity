import React, { useContext, useEffect, useState } from "react";
import { DeviceContext } from "../context/DeviceContext";

type AlertItem = { id: string; message: string; type: "warning" | "alert" };

const Alerts: React.FC = () => {
  const { devices } = useContext(DeviceContext);
  const [alerts, setAlerts] = useState<AlertItem[]>([]);

  useEffect(() => {
    const next: AlertItem[] = [];

    devices.forEach(d => {
      if (d.status === "offline") next.push({ id: d.id + "-offline", message: `${d.name} is offline`, type: "alert" });
      if (d.bandwidthLimit && d.bandwidthLimit < 50) next.push({ id: d.id + "-lowlimit", message: `${d.name} bandwidth limit is low (${d.bandwidthLimit} Mbps)`, type: "warning" });
    });

    setAlerts(next);
  }, [devices]);

  if (!alerts.length) return <div className="alerts"><h3>Alerts</h3><p>No alerts</p></div>;

  return (
    <div className="alerts">
      <h3>Alerts</h3>
      <ul>
        {alerts.map(a => <li key={a.id} className={a.type}>{a.message}</li>)}
      </ul>
    </div>
  );
};

export default Alerts;