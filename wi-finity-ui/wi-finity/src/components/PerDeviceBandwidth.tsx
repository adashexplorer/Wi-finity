import React, { useState } from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { usageData } from "../data/usage";

const deviceIds = Object.keys(usageData[0].perDevice);
const colors = ["#6C5CE7", "#00B894", "#FF7A59", "#FFCE56", "#7CFFBE"];

const PerDeviceBandwidth: React.FC = () => {
  const [selected, setSelected] = useState<string | "all">("all");

  const chartData = usageData.map((row) => {
    const base: any = { time: row.time };
    deviceIds.forEach(id => base[`d${id}`] = row.perDevice[id] || 0);
    return base;
  });

  return (
    <div className="per-device-chart" style={{ marginTop: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3>Per-Device Bandwidth (last 24h)</h3>
        <div>
          <button onClick={() => setSelected("all")}>All</button>
          {deviceIds.map((id, i) => <button key={id} onClick={() => setSelected(id)} style={{ marginLeft: 6 }}>{`Device ${id}`}</button>)}
        </div>
      </div>

      <div style={{ height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={chartData}>
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            {deviceIds.map((id, i) => {
              const key = `d${id}`;
              if (selected === "all" || selected === id) {
                return <Bar key={key} dataKey={key} fill={colors[i % colors.length]} stackId="a" />;
              }
              return null;
            })}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PerDeviceBandwidth;