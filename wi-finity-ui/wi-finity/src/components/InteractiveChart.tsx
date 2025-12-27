import React from "react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, Brush } from "recharts";
import { usageData } from "../data/usage";

const InteractiveChart: React.FC = () => {
  return (
    <div style={{ marginTop: 16 }}>
      <h3>Interactive Bandwidth Overview</h3>
      <div style={{ height: 220 }}>
        <ResponsiveContainer>
          <AreaChart data={usageData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="download" stackId="1" stroke="#00B894" fill="#a6f4d6" />
            <Area type="monotone" dataKey="upload" stackId="1" stroke="#6C5CE7" fill="#d6ccff" />
            <Brush dataKey="time" height={20} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default InteractiveChart;