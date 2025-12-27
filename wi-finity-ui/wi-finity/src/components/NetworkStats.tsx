import React, { useState } from "react";
import { usageData } from "../data/usage";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush } from "recharts";

const NetworkStats: React.FC = () => {
  const [filter, setFilter] = useState<"download" | "upload">("download");

  return (
    <div className="network-stats">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3>Network Usage (24h)</h3>
        <div>
          <button onClick={() => setFilter("download")} style={{ marginRight: 8 }}>Download</button>
          <button onClick={() => setFilter("upload")}>Upload</button>
        </div>
      </div>

      <div style={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={usageData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey={filter} stroke="#6C5CE7" strokeWidth={2} dot={false} />
            <Brush dataKey="time" height={30} stroke="#6C5CE7" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default NetworkStats;