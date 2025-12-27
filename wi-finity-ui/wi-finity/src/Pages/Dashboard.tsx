import React from "react";
import DeviceList from "../components/DeviceList";
import NetworkStats from "../components/NetworkStats";
import InteractiveChart from "../components/InteractiveChart";
import DeviceMap from "../components/DeviceMap";
import PerDeviceBandwidth from "../components/PerDeviceBandwidth";
import Alerts from "../components/Alerts";

const Dashboard: React.FC = () => {
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: 12 }}>
        <div>
          <DeviceList />
          <NetworkStats />
          <InteractiveChart />
        </div>

        <aside>
          <DeviceMap />
          <PerDeviceBandwidth />
          <Alerts />
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;